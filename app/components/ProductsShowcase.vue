<script setup lang="ts">
const products = [
  {
    icon: 'i-carbon-oil-pump',
    title: 'Diesel',
    description: 'Ultra-Low Sulphur Diesel meeting the highest environmental standards. Perfect for industrial applications.',
    features: ['Low emissions', 'High performance', 'Reliable supply', 'Competitive pricing'],
    color: 'yellow',
  },
  {
    icon: 'i-carbon-industry',
    title: 'Oil Products',
    description: 'Premium oil products for refineries and industrial operations. Sourced from reliable suppliers.',
    features: ['Quality assured', 'Flexible volumes', 'Global sourcing', 'Technical support'],
    color: 'green',
  },
  {
    icon: 'i-carbon-gas-station',
    title: 'Petroleum Products',
    description: 'Comprehensive range of petroleum products for diverse industrial needs and applications.',
    features: ['Wide range', 'Custom solutions', 'Fast delivery', 'Expert guidance'],
    color: 'yellow',
  },
  {
    icon: 'i-carbon-solar-panel',
    title: 'Solar Solutions',
    description: 'Sustainable energy solutions for forward-thinking businesses. Reduce costs and carbon footprint.',
    features: ['Renewable energy', 'Cost savings', 'Eco-friendly', 'Future-ready'],
    color: 'green',
  },
]
</script>

<template>
  <section class="section-padding bg-jetspan-light dark:bg-jetspan-black">
    <div class="section-container">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <h2 class="text-4xl text-jetspan-black font-bold mb-4 md:text-5xl dark:text-white">
          Our Products & Services
        </h2>
        <p class="text-xl text-jetspan-gray mx-auto max-w-3xl dark:text-gray-400">
          Comprehensive energy solutions tailored to meet your industrial and commercial needs
        </p>
      </div>

      <!-- Products Grid -->
      <div class="gap-8 grid grid-cols-1 md:grid-cols-2">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="group card transition-transform duration-300 hover:scale-105"
        >
          <div
            class="text-3xl mb-6 rounded-xl flex h-16 w-16 transition-transform items-center justify-center group-hover:scale-110"
            :class="product.color === 'yellow' ? 'bg-jetspan-yellow text-jetspan-black' : 'bg-jetspan-green text-white'"
          >
            <div :class="product.icon" />
          </div>

          <h3 class="text-2xl text-jetspan-black font-bold mb-3 dark:text-white">
            {{ product.title }}
          </h3>

          <p class="text-jetspan-gray mb-6 dark:text-gray-400">
            {{ product.description }}
          </p>

          <ul class="space-y-2">
            <li
              v-for="(feature, featureIndex) in product.features"
              :key="featureIndex"
              class="text-jetspan-gray flex items-center dark:text-gray-400"
            >
              <div class="i-carbon-checkmark text-jetspan-green mr-2" />
              {{ feature }}
            </li>
          </ul>
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
