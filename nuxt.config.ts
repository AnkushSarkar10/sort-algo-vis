import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  ssr: true,
//   head: {
//     script: [
//       {
//         src: 'https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.js',
//         integrity:
//           'sha384-I2b1Pcl48X93GxEkGkaMo1hrd6n+IX8H2wgSsMimGbkZoGTve/87h1FjaDNvlpQi',
//         crossorigin: 'anonymous',
//       },
//     ],
//     link: [
//       {
//         rel: "stylesheet",
//         href: "https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.css",
//         integrity:
//           "sha384-1IGr2Yb8xuHjwTG+WoGjj2+I/a/N6z0gDD5YIGCQxywPROOKc3+orbn/R7arWQxD",
//         crossorigin: "anonymous",
//       },
//     ],
//   },
});
