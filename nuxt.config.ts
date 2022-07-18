import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-solid-svg-icons"
    ],
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  target: "static",
});
