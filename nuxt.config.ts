
import eslintPlugin from 'vite-plugin-eslint';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
    typescript: {
        strict: true,
    },
    css: ['~/assets/style/_.scss'],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore',
        ],
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/style/scss/main.scss";'
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
