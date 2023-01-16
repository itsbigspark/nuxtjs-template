
import eslintPlugin from 'vite-plugin-eslint';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    typescript: {
        strict: true,
    },
    css: ['~/assets/style/_.scss'],
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
