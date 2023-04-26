// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {},
  },
  css: [
    "~/assets/scss/reset.scss",
    "~/assets/scss/fonts.scss",
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
    "nuxt-icon",
  ],
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
