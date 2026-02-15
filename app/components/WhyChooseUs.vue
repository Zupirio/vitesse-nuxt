<script setup lang="ts">
import { productColorMap } from '~/constants/products'
import type { Product } from '~/constants/products'

const benefits: Array<{ icon: string, title: string, description: string, color: Product['color'] }> = [
  {
    icon: 'i-carbon-certificate-check',
    title: 'Quality Assured',
    description: 'All our products meet international quality standards and undergo rigorous testing.',
    color: 'green',
  },
  {
    icon: 'i-carbon-delivery-truck',
    title: 'Reliable Supply',
    description: 'Consistent delivery schedules and dependable supply chain management.',
    color: 'blue',
  },
  {
    icon: 'i-carbon-user-favorite',
    title: 'Expert Support',
    description: 'Dedicated account managers and technical support team available 24/7.',
    color: 'amber',
  },
  {
    icon: 'i-carbon-sustainability',
    title: 'Sustainable Solutions',
    description: 'Committed to environmental responsibility and sustainable energy practices.',
    color: 'teal',
  },
  {
    icon: 'i-carbon-partnership',
    title: 'B2B Expertise',
    description: 'Deep understanding of industrial needs and customized business solutions.',
    color: 'orange',
  },
  {
    icon: 'i-carbon-chart-line',
    title: 'Competitive Pricing',
    description: 'Best-in-market pricing without compromising on quality or service.',
    color: 'yellow',
  },
]
</script>

<template>
  <section class="section-padding bg-white dark:bg-jetspan-gray-dark">
    <div class="section-container">
      <div class="mb-16 text-center">
        <h2 class="section-title">
          Why Choose Jetspan?
        </h2>
        <p class="section-subtitle mt-4">
          Your trusted partner in energy solutions with proven excellence
        </p>
      </div>

      <div class="gap-8 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="group text-center"
        >
          <div
            class="mb-6 rounded-full inline-flex h-20 w-20 transition-colors duration-300 items-center justify-center"
            :class="[productColorMap[benefit.color].bgLight, productColorMap[benefit.color].hoverBg]"
          >
            <div
              :class="[benefit.icon, productColorMap[benefit.color].iconText, productColorMap[benefit.color].hoverText]"
              class="text-4xl transition-colors duration-300"
            />
          </div>
          <h3 class="text-xl text-jetspan-black font-bold mb-3 dark:text-white">
            {{ benefit.title }}
          </h3>
          <p class="text-jetspan-gray dark:text-gray-400">
            {{ benefit.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
