<script setup lang="ts">
defineProps<{ stores: { name: string, url: string }[] }>()
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <a
      v-for="store in stores"
      :key="store.name"
      :href="store.url"
      target="_blank"
      rel="noopener noreferrer"
      class="text-sm text-jetspan-green font-semibold px-4 py-2 border-2 border-jetspan-green/40 rounded-lg inline-flex gap-1.5 transition-colors items-center hover:text-white hover:bg-jetspan-green"
    >
      <div class="i-carbon-shopping-cart" />
      Buy from {{ store.name }}
      <div class="i-carbon-launch text-xs opacity-70" />
    </a>
  </div>
</template>
