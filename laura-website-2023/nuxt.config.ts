// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
      siteName: "Laura Salgado | Developer",
      siteDescription: "add site desc here",
      language: "en-CA",
    },
  },
});
