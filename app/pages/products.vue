<script setup lang="ts">
import { productColorMap, products } from '~/constants/products'

definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: 'Products & Services | Jetspan — Energy Solutions for South African Industry',
  description: 'Diesel, oil products, petroleum, solar energy, and LPG gas — comprehensive energy solutions for industrial and commercial operations across South Africa.',
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <SectionHero
      title="Explore Solutions"
      subtitle="Comprehensive energy solutions designed to meet the demanding requirements of industrial and commercial operations across South Africa."
      badge="Diesel · Solar · Gas · Oil · Petroleum"
      badge-icon="i-carbon-catalog"
      bg-image="/assets/hero/pexels-refinery-6060191.jpg"
      compact
    />

    <!-- Products -->
    <section class="section-padding bg-jetspan-light dark:bg-jetspan-black">
      <div class="section-container">
        <div class="space-y-24">
          <div
            v-for="product in products"
            :id="product.id"
            :key="product.id"
            class="scroll-mt-24"
          >
            <div class="mx-auto card max-w-6xl">
              <div class="gap-8 grid md:grid-cols-2">
                <!-- Left Column -->
                <div>
                  <div
                    class="text-4xl mb-6 rounded-xl inline-flex h-20 w-20 items-center justify-center"
                    :class="`${productColorMap[product.color].bg} ${productColorMap[product.color].text}`"
                  >
                    <div :class="product.icon" />
                  </div>

                  <h2 class="text-4xl text-jetspan-black font-bold mb-2 dark:text-white heading-display">
                    {{ product.title }}
                  </h2>
                  <p class="text-jetspan-green font-semibold mb-4">
                    {{ product.subtitle }}
                  </p>
                  <p class="text-jetspan-gray mb-6 dark:text-gray-400">
                    {{ product.description }}
                  </p>

                  <!-- Specifications -->
                  <div class="mb-6">
                    <h3 class="text-xl text-jetspan-black font-bold mb-4 dark:text-white">
                      Technical Specifications
                    </h3>
                    <div class="space-y-2">
                      <div
                        v-for="spec in product.specifications"
                        :key="spec.label"
                        class="py-2 border-b border-gray-200 flex justify-between dark:border-jetspan-gray"
                      >
                        <span class="text-jetspan-gray font-medium dark:text-gray-400">{{ spec.label }}</span>
                        <span class="text-jetspan-black dark:text-white">{{ spec.value }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Right Column -->
                <div>
                  <!-- Features -->
                  <div class="mb-6">
                    <h3 class="text-xl text-jetspan-black font-bold mb-4 dark:text-white">
                      Key Features
                    </h3>
                    <ul class="space-y-2">
                      <li
                        v-for="feature in product.features"
                        :key="feature"
                        class="text-jetspan-gray flex items-start dark:text-gray-400"
                      >
                        <div class="i-carbon-checkmark text-jetspan-green mr-2 mt-1 flex-shrink-0" />
                        {{ feature }}
                      </li>
                    </ul>
                  </div>

                  <!-- Applications -->
                  <div>
                    <h3 class="text-xl text-jetspan-black font-bold mb-4 dark:text-white">
                      Applications
                    </h3>
                    <div class="gap-2 grid grid-cols-2">
                      <div
                        v-for="application in product.applications"
                        :key="application"
                        class="text-sm text-jetspan-gray px-3 py-2 rounded-lg dark:text-gray-400"
                        :class="productColorMap[product.color].bgLight"
                      >
                        {{ application }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- CTA -->
              <div class="mt-8 pt-8 border-t border-gray-200 flex flex-wrap gap-4 items-center justify-between dark:border-jetspan-gray">
                <NuxtLink to="/contact" class="btn">
                  Request a Quote for {{ product.title }}
                </NuxtLink>
                <NuxtLink
                  v-if="product.route"
                  :to="product.route"
                  class="btn-outline text-sm"
                >
                  Learn More
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <CTASection />
  </div>
</template>
