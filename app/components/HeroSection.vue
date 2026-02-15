<script setup lang="ts">
import { companyInfo } from '~/constants'

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Industrial Clients' },
  { value: '24/7', label: 'Support Available' },
  { value: '100%', label: 'Quality Assured' },
]
</script>

<template>
  <SectionHero
    title="Powering Industry, Fueling Progress"
    :subtitle="companyInfo.description"
    badge="Diesel · Solar · Gas · Oil"
    badge-icon="i-carbon-flash"
  >
    <template #title>
      Powering Industry,
      <span class="text-jetspan-yellow">Fueling Progress</span>
    </template>

    <template #actions>
      <div class="flex flex-col gap-4 sm:flex-row">
        <NuxtLink to="/products" class="btn text-center">
          Explore Solutions
        </NuxtLink>
        <NuxtLink to="/contact" class="btn-outline text-center">
          Request a Quote
        </NuxtLink>
      </div>
    </template>

    <!-- Stats -->
    <div class="mt-16 gap-8 grid grid-cols-2 md:grid-cols-4">
      <div v-for="stat in stats" :key="stat.label" class="text-center md:text-left">
        <div class="text-4xl text-jetspan-yellow font-bold mb-2 heading-display">
          {{ stat.value }}
        </div>
        <div class="text-sm text-gray-400">
          {{ stat.label }}
        </div>
      </div>
    </div>
  </SectionHero>
</template>
