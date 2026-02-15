<script setup lang="ts">
import { productColorMap, products } from '~/constants/products'
</script>

<template>
  <section class="section-padding bg-jetspan-light dark:bg-jetspan-black">
    <div class="section-container">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2 class="section-title">
          Our Solutions
        </h2>
        <p class="section-subtitle mt-4">
          Comprehensive energy solutions tailored to meet your industrial and commercial needs
        </p>
      </div>

      <!-- Products Grid — 3 top + 2 bottom centered -->
      <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="product in products"
          :key="product.id"
          class="group card transition-transform duration-300 hover:scale-105"
        >
          <div
            class="text-3xl mb-6 rounded-xl flex h-16 w-16 transition-transform items-center justify-center group-hover:scale-110"
            :class="`${productColorMap[product.color].bg} ${productColorMap[product.color].text}`"
          >
            <div :class="product.icon" />
          </div>

          <h3 class="text-2xl text-jetspan-black font-bold mb-2 dark:text-white">
            {{ product.title }}
          </h3>
          <p class="text-sm text-jetspan-green font-semibold mb-3">
            {{ product.subtitle }}
          </p>

          <p class="text-jetspan-gray mb-6 dark:text-gray-400">
            {{ product.description }}
          </p>

          <ul class="mb-6 space-y-2">
            <li
              v-for="feature in product.features.slice(0, 4)"
              :key="feature"
              class="text-jetspan-gray flex items-center dark:text-gray-400"
            >
              <div class="i-carbon-checkmark text-jetspan-green mr-2 flex-shrink-0" />
              {{ feature }}
            </li>
          </ul>

          <NuxtLink
            :to="product.route || '/contact'"
            class="btn-outline text-sm mt-auto inline-block"
          >
            Learn More
          </NuxtLink>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12 text-center">
        <NuxtLink to="/products" class="btn">
          View All Products
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
