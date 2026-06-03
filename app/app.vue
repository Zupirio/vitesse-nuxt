<script setup lang="ts">
import { appDescription, appName } from '~/constants'

useHead({
  title: appName,
  meta: [
    { name: 'description', content: appDescription },
  ],
})

useSeoMeta({
  ogTitle: appName,
  ogDescription: appDescription,
  ogType: 'website',
  ogUrl: 'https://jetspan.co.za',
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <WhatsAppButton />
  <!-- <LeadCaptureModal /> -->
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  color-scheme: dark;
}
</style>
