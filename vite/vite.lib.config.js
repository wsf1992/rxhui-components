import { defineConfig } from "vite";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import path from "path";
import { glob } from 'glob';
import fs from 'fs-extra';

export default async (/** if you want to use mode : { mode }*/) => {
    const packPath = path.resolve(__dirname, '../packages/**/index.ts');
    const entries = await glob(packPath);

    // 复制 dist 目录到 lib
    const copyDistToLib = () => {
        return {
            name: 'copy-dist-to-lib',
            closeBundle: async () => {
                const sourceDir = path.resolve(__dirname, '../packages/excel/dist');
                const targetDir = path.resolve(__dirname, '../lib/excel/dist');
                await fs.copy(sourceDir, targetDir);
            }
        };
    };

    return defineConfig({
        plugins: [
            cssInjectedByJsPlugin({
                jsAssetsFilterFunction: function(outputChunk) {
                    return outputChunk.fileName.endsWith('.mjs') || outputChunk.fileName.endsWith('.cjs');
                },
                topExecutionPriority: true,
                injectCode: true,
                injectCodeFunction: function injectCode(cssCode) {
                    if (typeof document !== 'undefined') {
                        const style = document.createElement('style');
                        style.textContent = cssCode;
                        document.head.appendChild(style);
                    }
                }
            }),
            copyDistToLib()
        ],
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