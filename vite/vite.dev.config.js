// 只设置 proxy
import { defineConfig } from "vite";

export default async (/** if you want to use mode : { mode }*/) => {

    return defineConfig({
        // 设置代理
        server: {
            proxy: {
                '/dfs': {
                    target: 'http://10.0.0.22:10105',
                    changeOrigin: true,
                    secure: false
                }
            }
        },


 
    })
}