import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  ssr: false
});
