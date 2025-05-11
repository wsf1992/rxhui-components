import { defineConfig } from "vite";
import path from "path";
import { glob } from 'glob';

export default async (/** if you want to use mode : { mode }*/) => {
    const packPath = path.resolve(__dirname, '../packages/**/index.ts');
    const entries = await glob(packPath);

    return defineConfig({
        resolve: {
            extensions: [".js", ".ts", ".json"],
        },
        build: {
            target: ["es2015"],
            outDir: "lib",
            lib: {
                entry: entries,
                formats: ["es", "cjs"],
            },
            rollupOptions: {
                output: [
                    {
                        format: 'es',
                        entryFileNames: (chunkInfo) => {
                            const name = path.basename(path.dirname(chunkInfo.facadeModuleId));
                            return `${name}/index.mjs`;
                        }
                    },
                    {
                        format: 'cjs',
                        entryFileNames: (chunkInfo) => {
                            const name = path.basename(path.dirname(chunkInfo.facadeModuleId));
                            return `${name}/index.cjs`;
                        }
                    }
                ]
            }
        }
    })
}