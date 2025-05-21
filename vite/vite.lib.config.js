import { defineConfig } from "vite";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import path from "path";
import { glob } from 'glob';

export default async (/** if you want to use mode : { mode }*/) => {
    const packPath = path.resolve(__dirname, '../packages/**/index.ts');
    const entries = await glob(packPath);

    return defineConfig({
        plugins: [cssInjectedByJsPlugin({
            jsAssetsFilterFunction: function(outputChunk) {
                // 检查该 chunk 是否包含 CSS 导入
                const hasCssImports = outputChunk.moduleIds?.some(id => id.includes('.css') || id.includes('.less'));
                // 只有当该 chunk 实际包含 CSS 导入时才注入
                return hasCssImports && (outputChunk.fileName.endsWith('.mjs') || outputChunk.fileName.endsWith('.cjs'));
            }
        })],
        resolve: {
            extensions: [".js", ".ts", ".json"],
        },
        build: {
            target: ["es2015"],
            outDir: "lib",
            lib: {
                entry: entries,
            },
            // cssCodeSplit: false, // This is no longer needed as the plugin handles CSS injection
            rollupOptions: {
                output: [
                    {
                        format: 'es',
                        entryFileNames: (chunkInfo) => {
                            const name = path.basename(path.dirname(chunkInfo.facadeModuleId));
                            return `${name}/index.mjs`;
                        },
                        manualChunks: (id) => {
                            // 将所有代码打包到主入口文件中
                            return 'index';
                        }
                    },
                    {
                        format: 'cjs',
                        entryFileNames: (chunkInfo) => {
                            const name = path.basename(path.dirname(chunkInfo.facadeModuleId));
                            return `${name}/index.cjs`;
                        },
                        manualChunks: (id) => {
                            // 将所有代码打包到主入口文件中
                            return 'index';
                        }
                    }
                ]
            }
        }
    })
}