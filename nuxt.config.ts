import { pwa } from './app/config/pwa'
import { appDescription } from './app/constants/index'

export default defineNuxtConfig({
  // Client-side rendering for static generation

  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
  ],
  ssr: false,

  devtools: {
    enabled: true,
  },

  app: {
    buildAssetsDir: '/_nuxt/',

    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.png', type: 'image/png' },
        // { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#F2F2F2' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#0D0D0D' },
      ],
    },
  },

  // Disable app manifest for static hosting (prevents 403 errors)
  router: {
    options: {
      hashMode: false,
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'light',
  },

  // Route rules for optimization
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },

    // All product pages pre-rendered
    '/products': { prerender: true },
    '/en590-diesel': { prerender: true },

    // Static pages pre-rendered
    '/about': { prerender: true },
    '/contact': { prerender: true },
    '/color-preview': { prerender: true },
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    typedPages: true,
    // Disable app manifest for static hosting to prevent 403 errors
    appManifest: false,
  },

  compatibilityDate: '2024-08-14',

  // Nitro configuration for static site generation
  nitro: {
    // Set preset to static for cPanel deployment
    preset: 'static',

    // Compress public assets for better performance
    compressPublicAssets: true,

    esbuild: {
      options: {
        target: 'esnext',
      },
    },

    // Prerender configuration
    prerender: {
      // Automatically crawl and discover routes
      crawlLinks: true,

      // Explicitly specify routes to prerender
      routes: [
        '/',
        '/products',
        '/about',
        '/contact',
        '/en590-diesel',
        '/color-preview',
      ],

      // Fail the build if a route fails to prerender
      failOnError: false,
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  // Image configuration for static hosting (no IPX server)
  image: {
    // Use static provider for cPanel deployment (no server-side processing)
    provider: 'none',
  },

  pwa,
})
