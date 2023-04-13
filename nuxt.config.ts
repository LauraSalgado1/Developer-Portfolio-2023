// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Roboto:wght@400;500;600&display=swap",
        },
      ],
    },
  },
  css: [
    "~/assets/scss/reset.scss",
    "~/assets/scss/typography.scss",
    "~/assets/scss/global.scss",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/variables.scss";',
        },
      },
    },
  },
  modules: [
    [
      "nuxt-swiper",
      {
        // Swiper options
      },
    ],
    "@morev/vue-transitions/nuxt",
    "@nuxt/image-edge",
    "nuxt-icon",
  ],
  vueTransitions: {
    // The same options as in the plugin itself.
    // You will get an autocomplete using Nuxt 3.
  },
  extends: ["nuxt-seo-kit"],
  runtimeConfig: {
    public: {
      siteUrl: "https://laurasalgado.com",
      siteName: "Laura Salgado | Developer Since 2016",
      siteDescription:
        "Check out the portfolio of Toronto-based web developer Laura Salgado. Specialized in WCAG 2.1 AA accessible front-end coding of WordPress, Vue, Nuxt and API projects.",
      language: "en-CA",
    },
  },
});
