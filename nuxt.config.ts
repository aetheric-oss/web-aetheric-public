// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src/",
  app: {
    head: {
      titleTemplate: (chunk) => `Aetheric B.V.`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Aetheric B.V. (est. 2024)",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Poppins:wght@200;400;700;800&display=swap",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
      ],
      script: [
        {
          src: "https://assets.calendly.com/assets/external/widget.js",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      smartlookId: "8cb5dedb29eece98911dfa11592e5de2b3957c3a"
    }
  },

  css: ["~/assets/styles/main.scss"],
  modules: ["@nuxt/content"],
  calendly: {},
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.build.sourcemap = "hidden";
      }
    },
  },
});
