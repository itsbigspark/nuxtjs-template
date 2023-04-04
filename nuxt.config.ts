
import eslintPlugin from 'vite-plugin-eslint';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxt/devtools',
    ],
    typescript: {
        strict: true,
    },
    css: ['~/assets/style/_.scss'],
    pinia: {
        autoImports: [
            'defineStore',
        ],
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/style/scss/main.scss" as *;'
                }
            }
        },
        plugins: [
            eslintPlugin()
        ]
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

})
