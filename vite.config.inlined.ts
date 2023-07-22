import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from "vite-plugin-singlefile"

// https://stackoverflow.com/questions/72002253/is-it-possible-to-deploy-vue-and-vite-without-a-server-to-run
export default defineConfig({
    plugins: [react(), viteSingleFile()],
    css: {
        devSourcemap: true,
        preprocessorOptions: {
            scss: {
                additionalData: `$injectedColor: orange;`,
            },
        },
    },
    build: {
        cssCodeSplit: false,
        assetsInlineLimit: 100000000,
        // rollupOptions: {
        //     output: {
        //         inlineDynamicImports: true,
        //         manualChunks: (id) => {
        //             if (id.includes('node_modules')) {
        //                 return 'vendor';
        //             }
        //         },
        //     },
        // },
    },
    // resolve: {
    //     alias: [
    //         { find: '@', replacement: '/src' },
    //         { find: 'public', replacement: '/public' },
    //         { find: 'assets', replacement: '/src/assets' },
    //         { find: 'components', replacement: '/src/components' },
    //     ]
    // },
    // server: {
    //     open: true,
    // },
    define: {
        'process.env': process.env
    }
})