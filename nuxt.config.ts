import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // modules: ['@nuxtjs/tailwindcss'],
    // buildModules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
    modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
    ssr: true
})
