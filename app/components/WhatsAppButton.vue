<script setup lang="ts">
import { companyInfo } from '~/constants'

const whatsappUrl = computed(() => {
  const phone = companyInfo.whatsapp.replace(/\D/g, '')
  const message = encodeURIComponent('Hi Jetspan, I\'d like to request a quote.')
  return `https://wa.me/${phone}?text=${message}`
})
</script>

<template>
  <a
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-xl md:bottom-8 md:right-8"
    aria-label="Chat on WhatsApp"
  >
    <div class="i-mdi-whatsapp text-3xl" />
  </a>
</template>
