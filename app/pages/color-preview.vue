<script setup lang="ts">
import { companyInfo } from '~/constants'

definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: 'Color Palette Preview - Jetspan',
  description: 'Visual preview of enhanced color palette',
})

const products = [
  {
    title: 'Diesel',
    description: 'High-quality diesel fuel for commercial and industrial use',
    color: 'yellow',
    icon: 'i-carbon-hybrid',
  },
  {
    title: 'Oil Products',
    description: 'Premium petroleum products for various applications',
    color: 'orange',
    icon: 'i-carbon-petroleum',
  },
  {
    title: 'Petroleum Products',
    description: 'Comprehensive range of refined petroleum solutions',
    color: 'blue',
    icon: 'i-carbon-fire',
  },
  {
    title: 'Solar Energy',
    description: 'Sustainable solar power solutions for the future',
    color: 'teal',
    icon: 'i-carbon-solar-panel',
  },
]

const features = [
  {
    icon: 'i-carbon-checkmark-filled',
    title: 'Quality Assurance',
    description: 'ISO certified products meeting international standards',
    color: 'blue',
  },
  {
    icon: 'i-carbon-delivery',
    title: 'Fast Delivery',
    description: 'Reliable and timely delivery across South Africa',
    color: 'orange',
  },
  {
    icon: 'i-carbon-renewable-energy',
    title: 'Sustainable',
    description: 'Committed to environmental responsibility',
    color: 'teal',
  },
  {
    icon: 'i-carbon-phone',
    title: '24/7 Support',
    description: 'Round-the-clock customer service',
    color: 'amber',
  },
]

const colorPalettes = [
  { name: 'Yellow', key: 'yellow', desc: 'Primary brand color' },
  { name: 'Green', key: 'green', desc: 'Growth & sustainability' },
  { name: 'Blue', key: 'blue', desc: 'Trust & reliability (NEW)' },
  { name: 'Orange', key: 'orange', desc: 'Energy & innovation (NEW)' },
  { name: 'Teal', key: 'teal', desc: 'Modern & environmental (NEW)' },
  { name: 'Amber', key: 'amber', desc: 'Premium & quality (NEW)' },
  { name: 'Gray', key: 'gray', desc: 'Professional neutral' },
]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-white via-brand-light to-brand-gray-50">
    <!-- Hero Section with New Colors -->
    <div class="section-container section-padding">
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold mb-6 bg-gradient-to-r from-brand-yellow-600 via-brand-orange-500 to-brand-blue-600 bg-clip-text text-transparent">
          Enhanced Color Palette
        </h1>
        <p class="text-xl text-brand-gray-600 max-w-3xl mx-auto">
          Visual preview of how the new colors enhance Jetspan's brand presence
        </p>
      </div>

      <!-- Color Palette Swatches -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-8 text-center text-brand-gray-800">
          Complete Color System
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="palette in colorPalettes" :key="palette.key" class="card">
            <h3 class="text-xl font-semibold mb-2" :class="`text-brand-${palette.key}-600`">
              {{ palette.name }}
              <span v-if="palette.desc.includes('NEW')" class="text-xs bg-brand-orange-100 text-brand-orange-700 px-2 py-1 rounded-full ml-2">NEW</span>
            </h3>
            <p class="text-sm text-brand-gray-600 mb-4">{{ palette.desc }}</p>
            <div class="flex gap-1">
              <div
                v-for="shade in [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]"
                :key="shade"
                :class="`bg-brand-${palette.key}-${shade} h-12 flex-1 rounded transition-transform hover:scale-110 cursor-pointer`"
                :title="`${palette.name} ${shade}`"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Product Cards with Color Accents -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-8 text-center text-brand-gray-800">
          Product Cards with Color Identity
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="product in products"
            :key="product.title"
            :class="`card border-l-4 border-brand-${product.color}-500 hover:border-brand-${product.color}-600 cursor-pointer group`"
          >
            <div :class="`inline-flex p-4 rounded-lg bg-brand-${product.color}-50 text-brand-${product.color}-600 mb-4 group-hover:bg-brand-${product.color}-100 transition-colors`">
              <div :class="`${product.icon} text-4xl`" />
            </div>
            <h3 :class="`text-xl font-semibold mb-3 text-brand-${product.color}-700`">
              {{ product.title }}
            </h3>
            <p class="text-brand-gray-600 mb-4">
              {{ product.description }}
            </p>
            <button :class="`text-brand-${product.color}-600 font-semibold hover:text-brand-${product.color}-700 flex items-center gap-2 transition-colors`">
              Learn More
              <span class="i-carbon-arrow-right" />
            </button>
          </div>
        </div>
      </div>

      <!-- Feature Grid with Icons -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-8 text-center text-brand-gray-800">
          Features with Color-Coded Icons
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="text-center p-8 rounded-xl bg-white hover:shadow-xl transition-all duration-300"
          >
            <div :class="`inline-flex p-4 rounded-full bg-brand-${feature.color}-100 text-brand-${feature.color}-600 mb-4`">
              <div :class="`${feature.icon} text-3xl`" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-brand-gray-800">
              {{ feature.title }}
            </h3>
            <p class="text-brand-gray-600 text-sm">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Button Variations -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-8 text-center text-brand-gray-800">
          Button Variations
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Existing Buttons -->
          <div class="card text-center">
            <h3 class="font-semibold mb-4 text-brand-gray-700">
              Current Buttons
            </h3>
            <div class="space-y-3">
              <button class="btn w-full">
                Primary (Yellow)
              </button>
              <button class="btn-secondary w-full">
                Secondary (Green)
              </button>
              <button class="btn-outline w-full">
                Outline
              </button>
            </div>
          </div>

          <!-- New Color Buttons -->
          <div class="card text-center">
            <h3 class="font-semibold mb-4 text-brand-gray-700 flex items-center justify-center gap-2">
              New Options
              <span class="text-xs bg-brand-orange-100 text-brand-orange-700 px-2 py-1 rounded-full">NEW</span>
            </h3>
            <div class="space-y-3">
              <button class="px-6 py-3 rounded-lg w-full bg-brand-blue-500 text-white font-semibold hover:bg-brand-blue-600 transition-colors">
                Trust & Info (Blue)
              </button>
              <button class="px-6 py-3 rounded-lg w-full bg-brand-orange-500 text-white font-semibold hover:bg-brand-orange-600 transition-colors">
                Energy & Action (Orange)
              </button>
              <button class="px-6 py-3 rounded-lg w-full bg-brand-teal-500 text-white font-semibold hover:bg-brand-teal-600 transition-colors">
                Modern & Tech (Teal)
              </button>
            </div>
          </div>

          <!-- Subtle Accent Buttons -->
          <div class="card text-center">
            <h3 class="font-semibold mb-4 text-brand-gray-700">
              Subtle Accents
            </h3>
            <div class="space-y-3">
              <button class="px-6 py-3 rounded-lg w-full border-2 border-brand-blue-500 text-brand-blue-600 font-semibold hover:bg-brand-blue-50 transition-colors">
                Blue Outline
              </button>
              <button class="px-6 py-3 rounded-lg w-full bg-brand-amber-50 text-brand-amber-700 font-semibold hover:bg-brand-amber-100 transition-colors">
                Premium (Amber)
              </button>
              <button class="px-6 py-3 rounded-lg w-full bg-brand-navy-800 text-white font-semibold hover:bg-brand-navy-900 transition-colors">
                Authority (Navy)
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Alert/Badge Variations -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-8 text-center text-brand-gray-800">
          Alerts & Badges
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="p-4 rounded-lg border-l-4 border-brand-blue-500 bg-brand-blue-50">
              <div class="flex items-start gap-3">
                <div class="i-carbon-information text-2xl text-brand-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold text-brand-blue-800 mb-1">
                    Information
                  </h4>
                  <p class="text-sm text-brand-blue-700">
                    New delivery schedules available. Check your dashboard.
                  </p>
                </div>
              </div>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-brand-teal-500 bg-brand-teal-50">
              <div class="flex items-start gap-3">
                <div class="i-carbon-checkmark-filled text-2xl text-brand-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold text-brand-teal-800 mb-1">
                    Success
                  </h4>
                  <p class="text-sm text-brand-teal-700">
                    Your order has been successfully placed!
                  </p>
                </div>
              </div>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-brand-orange-500 bg-brand-orange-50">
              <div class="flex items-start gap-3">
                <div class="i-carbon-warning text-2xl text-brand-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 class="font-semibold text-brand-orange-800 mb-1">
                    Warning
                  </h4>
                  <p class="text-sm text-brand-orange-700">
                    Please review your delivery address before confirming.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <div class="card">
              <h4 class="font-semibold mb-4 text-brand-gray-700">
                Status Badges
              </h4>
              <div class="flex flex-wrap gap-3">
                <span class="px-3 py-1 rounded-full bg-brand-blue-100 text-brand-blue-700 text-sm font-medium">In Stock</span>
                <span class="px-3 py-1 rounded-full bg-brand-teal-100 text-brand-teal-700 text-sm font-medium">Available</span>
                <span class="px-3 py-1 rounded-full bg-brand-orange-100 text-brand-orange-700 text-sm font-medium">Hot Deal</span>
                <span class="px-3 py-1 rounded-full bg-brand-amber-100 text-brand-amber-700 text-sm font-medium">Premium</span>
                <span class="px-3 py-1 rounded-full bg-brand-green-100 text-brand-green-700 text-sm font-medium">Eco-Friendly</span>
                <span class="px-3 py-1 rounded-full bg-brand-yellow-100 text-brand-yellow-800 text-sm font-medium">Fast Delivery</span>
              </div>
            </div>

            <div class="card">
              <h4 class="font-semibold mb-4 text-brand-gray-700">
                Category Tags
              </h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1.5 rounded-md bg-brand-blue-600 text-white text-xs font-semibold">Petroleum</span>
                <span class="px-3 py-1.5 rounded-md bg-brand-orange-600 text-white text-xs font-semibold">Oil Products</span>
                <span class="px-3 py-1.5 rounded-md bg-brand-teal-600 text-white text-xs font-semibold">Solar</span>
                <span class="px-3 py-1.5 rounded-md bg-brand-green-600 text-white text-xs font-semibold">Renewable</span>
                <span class="px-3 py-1.5 rounded-md bg-brand-amber-600 text-white text-xs font-semibold">Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-8 text-center text-brand-gray-800">
          Statistics with Color Coding
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="card text-center bg-gradient-to-br from-brand-blue-50 to-white">
            <div class="text-4xl font-bold text-brand-blue-600 mb-2">
              1000+
            </div>
            <div class="text-brand-blue-800 font-semibold">
              Clients Served
            </div>
          </div>
          <div class="card text-center bg-gradient-to-br from-brand-orange-50 to-white">
            <div class="text-4xl font-bold text-brand-orange-600 mb-2">
              24/7
            </div>
            <div class="text-brand-orange-800 font-semibold">
              Support Available
            </div>
          </div>
          <div class="card text-center bg-gradient-to-br from-brand-teal-50 to-white">
            <div class="text-4xl font-bold text-brand-teal-600 mb-2">
              100%
            </div>
            <div class="text-brand-teal-800 font-semibold">
              Quality Assured
            </div>
          </div>
          <div class="card text-center bg-gradient-to-br from-brand-amber-50 to-white">
            <div class="text-4xl font-bold text-brand-amber-600 mb-2">
              25+
            </div>
            <div class="text-brand-amber-800 font-semibold">
              Years Experience
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <div class="inline-block p-1 rounded-2xl bg-gradient-to-r from-brand-blue-500 via-brand-teal-500 to-brand-orange-500">
          <div class="bg-white rounded-xl p-12">
            <h2 class="text-4xl font-bold mb-6 bg-gradient-to-r from-brand-blue-600 via-brand-teal-600 to-brand-orange-600 bg-clip-text text-transparent">
              Ready to Experience the Difference?
            </h2>
            <p class="text-xl text-brand-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today for premium petroleum products and sustainable energy solutions
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
              <button class="btn">
                Get Started
              </button>
              <button class="px-6 py-3 rounded-lg bg-brand-blue-500 text-white font-semibold hover:bg-brand-blue-600 transition-colors">
                Learn More
              </button>
              <button class="px-6 py-3 rounded-lg border-2 border-brand-teal-500 text-brand-teal-600 font-semibold hover:bg-brand-teal-50 transition-colors">
                View Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
