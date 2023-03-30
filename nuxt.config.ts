// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    srcDir: 'src/',
    app: {
        head: {
            titleTemplate: chunk => `FlyArrow.io${chunk && ' - ' + chunk}`,
            meta: [
                { hid: 'description', name: 'description', content: 'FlyArrow.io - Part of Arrow DAO' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Poppins:wght@200;400;700;800&display=swap' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
            ]
        }
    },
    css: ['~/assets/styles/main.scss'],
})
