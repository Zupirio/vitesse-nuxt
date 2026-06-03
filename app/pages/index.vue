<script setup lang="ts">
definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div>
    <HeroSection />
    <LazyProductsShowcase />
    <LazyFeaturedProduct />
    <LazyWhyChooseUs />
    <LazyCTASection />
  </div>
</template>
