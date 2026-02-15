<script setup lang="ts">
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
    icon: 'i-carbon-flash',
  },
  {
    title: 'Oil Products',
    description: 'Premium petroleum products for various applications',
    color: 'orange',
    icon: 'i-carbon-rain-drop',
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
    icon: 'i-carbon-energy-renewable',
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
  <div class="min-h-screen from-white to-brand-gray-50 via-brand-light bg-gradient-to-br">
    <!-- Hero Section with New Colors -->
    <div class="section-container section-padding">
      <div class="mb-16 text-center">
        <h1 class="text-5xl text-transparent font-bold mb-6 from-brand-yellow-600 to-brand-blue-600 via-brand-orange-500 bg-gradient-to-r bg-clip-text">
          Enhanced Color Palette
        </h1>
        <p class="text-xl text-brand-gray-600 mx-auto max-w-3xl">
          Visual preview of how the new colors enhance Jetspan's brand presence
        </p>
      </div>

      <!-- Color Palette Swatches -->
      <div class="mb-20">
        <h2 class="text-3xl text-brand-gray-800 font-bold mb-8 text-center">
          Complete Color System
        </h2>
        <div class="gap-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          <div v-for="palette in colorPalettes" :key="palette.key" class="card">
            <h3 class="text-xl font-semibold mb-2" :class="`text-brand-${palette.key}-600`">
              {{ palette.name }}
              <span v-if="palette.desc.includes('NEW')" class="text-xs text-brand-orange-700 ml-2 px-2 py-1 rounded-full bg-brand-orange-100">NEW</span>
            </h3>
            <p class="text-sm text-brand-gray-600 mb-4">
              {{ palette.desc }}
            </p>
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
        <h2 class="text-3xl text-brand-gray-800 font-bold mb-8 text-center">
          Product Cards with Color Identity
        </h2>
        <div class="gap-6 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
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
        <h2 class="text-3xl text-brand-gray-800 font-bold mb-8 text-center">
          Features with Color-Coded Icons
        </h2>
        <div class="gap-6 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="p-8 text-center rounded-xl bg-white transition-all duration-300 hover:shadow-xl"
          >
            <div :class="`inline-flex p-4 rounded-full bg-brand-${feature.color}-100 text-brand-${feature.color}-600 mb-4`">
              <div :class="`${feature.icon} text-3xl`" />
            </div>
            <h3 class="text-lg text-brand-gray-800 font-semibold mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-sm text-brand-gray-600">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Button Variations -->
      <div class="mb-20">
        <h2 class="text-3xl text-brand-gray-800 font-bold mb-8 text-center">
          Button Variations
        </h2>
        <div class="gap-8 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          <!-- Existing Buttons -->
          <div class="card text-center">
            <h3 class="text-brand-gray-700 font-semibold mb-4">
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
            <h3 class="text-brand-gray-700 font-semibold mb-4 flex gap-2 items-center justify-center">
              New Options
              <span class="text-xs text-brand-orange-700 px-2 py-1 rounded-full bg-brand-orange-100">NEW</span>
            </h3>
            <div class="space-y-3">
              <button class="text-white font-semibold px-6 py-3 rounded-lg bg-brand-blue-500 w-full transition-colors hover:bg-brand-blue-600">
                Trust & Info (Blue)
              </button>
              <button class="text-white font-semibold px-6 py-3 rounded-lg bg-brand-orange-500 w-full transition-colors hover:bg-brand-orange-600">
                Energy & Action (Orange)
              </button>
              <button class="text-white font-semibold px-6 py-3 rounded-lg bg-brand-teal-500 w-full transition-colors hover:bg-brand-teal-600">
                Modern & Tech (Teal)
              </button>
            </div>
          </div>

          <!-- Subtle Accent Buttons -->
          <div class="card text-center">
            <h3 class="text-brand-gray-700 font-semibold mb-4">
              Subtle Accents
            </h3>
            <div class="space-y-3">
              <button class="text-brand-blue-600 font-semibold px-6 py-3 border-2 border-brand-blue-500 rounded-lg w-full transition-colors hover:bg-brand-blue-50">
                Blue Outline
              </button>
              <button class="text-brand-amber-700 font-semibold px-6 py-3 rounded-lg bg-brand-amber-50 w-full transition-colors hover:bg-brand-amber-100">
                Premium (Amber)
              </button>
              <button class="text-white font-semibold px-6 py-3 rounded-lg bg-brand-navy-800 w-full transition-colors hover:bg-brand-navy-900">
                Authority (Navy)
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Alert/Badge Variations -->
      <div class="mb-20">
        <h2 class="text-3xl text-brand-gray-800 font-bold mb-8 text-center">
          Alerts & Badges
        </h2>
        <div class="gap-6 grid grid-cols-1 md:grid-cols-2">
          <div class="space-y-4">
            <div class="p-4 border-l-4 border-brand-blue-500 rounded-lg bg-brand-blue-50">
              <div class="flex gap-3 items-start">
                <div class="i-carbon-information text-2xl text-brand-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 class="text-brand-blue-800 font-semibold mb-1">
                    Information
                  </h4>
                  <p class="text-sm text-brand-blue-700">
                    New delivery schedules available. Check your dashboard.
                  </p>
                </div>
              </div>
            </div>

            <div class="p-4 border-l-4 border-brand-teal-500 rounded-lg bg-brand-teal-50">
              <div class="flex gap-3 items-start">
                <div class="i-carbon-checkmark-filled text-2xl text-brand-teal-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 class="text-brand-teal-800 font-semibold mb-1">
                    Success
                  </h4>
                  <p class="text-sm text-brand-teal-700">
                    Your order has been successfully placed!
                  </p>
                </div>
              </div>
            </div>

            <div class="p-4 border-l-4 border-brand-orange-500 rounded-lg bg-brand-orange-50">
              <div class="flex gap-3 items-start">
                <div class="i-carbon-warning text-2xl text-brand-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 class="text-brand-orange-800 font-semibold mb-1">
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
              <h4 class="text-brand-gray-700 font-semibold mb-4">
                Status Badges
              </h4>
              <div class="flex flex-wrap gap-3">
                <span class="text-sm text-brand-blue-700 font-medium px-3 py-1 rounded-full bg-brand-blue-100">In Stock</span>
                <span class="text-sm text-brand-teal-700 font-medium px-3 py-1 rounded-full bg-brand-teal-100">Available</span>
                <span class="text-sm text-brand-orange-700 font-medium px-3 py-1 rounded-full bg-brand-orange-100">Hot Deal</span>
                <span class="text-sm text-brand-amber-700 font-medium px-3 py-1 rounded-full bg-brand-amber-100">Premium</span>
                <span class="text-sm text-brand-green-700 font-medium px-3 py-1 rounded-full bg-brand-green-100">Eco-Friendly</span>
                <span class="text-sm text-brand-yellow-800 font-medium px-3 py-1 rounded-full bg-brand-yellow-100">Fast Delivery</span>
              </div>
            </div>

            <div class="card">
              <h4 class="text-brand-gray-700 font-semibold mb-4">
                Category Tags
              </h4>
              <div class="flex flex-wrap gap-2">
                <span class="text-xs text-white font-semibold px-3 py-1.5 rounded-md bg-brand-blue-600">Petroleum</span>
                <span class="text-xs text-white font-semibold px-3 py-1.5 rounded-md bg-brand-orange-600">Oil Products</span>
                <span class="text-xs text-white font-semibold px-3 py-1.5 rounded-md bg-brand-teal-600">Solar</span>
                <span class="text-xs text-white font-semibold px-3 py-1.5 rounded-md bg-brand-green-600">Renewable</span>
                <span class="text-xs text-white font-semibold px-3 py-1.5 rounded-md bg-brand-amber-600">Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mb-20">
        <h2 class="text-3xl text-brand-gray-800 font-bold mb-8 text-center">
          Statistics with Color Coding
        </h2>
        <div class="gap-6 grid grid-cols-1 md:grid-cols-4">
          <div class="card text-center from-brand-blue-50 to-white bg-gradient-to-br">
            <div class="text-4xl text-brand-blue-600 font-bold mb-2">
              1000+
            </div>
            <div class="text-brand-blue-800 font-semibold">
              Clients Served
            </div>
          </div>
          <div class="card text-center from-brand-orange-50 to-white bg-gradient-to-br">
            <div class="text-4xl text-brand-orange-600 font-bold mb-2">
              24/7
            </div>
            <div class="text-brand-orange-800 font-semibold">
              Support Available
            </div>
          </div>
          <div class="card text-center from-brand-teal-50 to-white bg-gradient-to-br">
            <div class="text-4xl text-brand-teal-600 font-bold mb-2">
              100%
            </div>
            <div class="text-brand-teal-800 font-semibold">
              Quality Assured
            </div>
          </div>
          <div class="card text-center from-brand-amber-50 to-white bg-gradient-to-br">
            <div class="text-4xl text-brand-amber-600 font-bold mb-2">
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
        <div class="p-1 rounded-2xl inline-block from-brand-blue-500 to-brand-orange-500 via-brand-teal-500 bg-gradient-to-r">
          <div class="p-12 rounded-xl bg-white">
            <h2 class="text-4xl text-transparent font-bold mb-6 from-brand-blue-600 to-brand-orange-600 via-brand-teal-600 bg-gradient-to-r bg-clip-text">
              Ready to Experience the Difference?
            </h2>
            <p class="text-xl text-brand-gray-600 mx-auto mb-8 max-w-2xl">
              Contact us today for premium petroleum products and sustainable energy solutions
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
              <button class="btn">
                Get Started
              </button>
              <button class="text-white font-semibold px-6 py-3 rounded-lg bg-brand-blue-500 transition-colors hover:bg-brand-blue-600">
                Learn More
              </button>
              <button class="text-brand-teal-600 font-semibold px-6 py-3 border-2 border-brand-teal-500 rounded-lg transition-colors hover:bg-brand-teal-50">
                View Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
