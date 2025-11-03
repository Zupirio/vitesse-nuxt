<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const products = [
  {
    id: 'diesel-ulsd',
    icon: 'i-carbon-oil-pump',
    title: 'Diesel',
    subtitle: 'Ultra-Low Sulphur Diesel',
    description: 'Premium quality Ultra-Low Sulphur Diesel (ULSD) meeting the highest environmental and performance standards. Ideal for industrial machinery, transportation fleets, and commercial applications.',
    specifications: [
      { label: 'Sulphur Content', value: '< 10 ppm' },
      { label: 'Cetane Number', value: '≥ 51' },
      { label: 'Density @ 15°C', value: '820-845 kg/m³' },
      { label: 'Flash Point', value: '≥ 55°C' },
    ],
    features: [
      'Reduced emissions and environmental impact',
      'Enhanced engine performance and longevity',
      'Complies with Euro 5/6 standards',
      'Reliable year-round supply',
      'Bulk delivery options available',
      'Competitive pricing for large volumes',
    ],
    applications: [
      'Industrial machinery',
      'Transportation fleets',
      'Mining operations',
      'Construction equipment',
      'Agricultural machinery',
      'Power generation',
    ],
  },
  {
    id: 'crude-oil',
    icon: 'i-carbon-industry',
    title: 'Oil Products',
    subtitle: 'Premium Grade Oil',
    description: 'High-quality oil products sourced from reliable international suppliers. Available in various grades to meet specific refinery requirements and industrial applications.',
    specifications: [
      { label: 'API Gravity', value: '30-40°' },
      { label: 'Sulphur Content', value: 'Sweet/Sour grades' },
      { label: 'Viscosity', value: 'Varies by grade' },
      { label: 'Pour Point', value: 'Grade dependent' },
    ],
    features: [
      'Multiple grade options available',
      'Flexible volume requirements',
      'Global sourcing network',
      'Quality certification provided',
      'Technical support and analysis',
      'Logistics coordination included',
    ],
    applications: [
      'Refinery operations',
      'Petrochemical production',
      'Industrial fuel processing',
      'Lubricant manufacturing',
      'Chemical feedstock',
      'Energy production',
    ],
  },
  {
    id: 'petroleum-products',
    icon: 'i-carbon-gas-station',
    title: 'Petroleum Products',
    subtitle: 'Comprehensive Range',
    description: 'Complete portfolio of petroleum products including petrol, jet fuel, lubricants, and specialty products. Tailored solutions for diverse industrial and commercial requirements.',
    specifications: [
      { label: 'Product Range', value: 'Petrol, Jet Fuel, Lubricants' },
      { label: 'Quality Standards', value: 'International specs' },
      { label: 'Delivery', value: 'Bulk & packaged' },
      { label: 'Custom Blends', value: 'Available' },
    ],
    features: [
      'Wide product selection',
      'Custom blending services',
      'Quality assurance testing',
      'Fast delivery nationwide',
      'Technical consultation',
      'Competitive bulk pricing',
    ],
    applications: [
      'Aviation industry',
      'Automotive sector',
      'Manufacturing facilities',
      'Marine operations',
      'Industrial applications',
      'Commercial fleets',
    ],
  },
  {
    id: 'solar-solutions',
    icon: 'i-carbon-solar-panel',
    title: 'Solar Energy Solutions',
    subtitle: 'Sustainable Power',
    description: 'Comprehensive solar energy solutions for businesses looking to reduce costs and environmental impact. From consultation to installation and maintenance.',
    specifications: [
      { label: 'Panel Efficiency', value: '≥ 20%' },
      { label: 'System Capacity', value: '10kW - 5MW+' },
      { label: 'Warranty', value: '25 years performance' },
      { label: 'Monitoring', value: 'Real-time remote' },
    ],
    features: [
      'Custom system design',
      'Professional installation',
      'Grid-tied and off-grid options',
      'Energy storage solutions',
      'Maintenance and support',
      'ROI analysis and financing',
    ],
    applications: [
      'Industrial facilities',
      'Commercial buildings',
      'Manufacturing plants',
      'Warehouses',
      'Agricultural operations',
      'Remote installations',
    ],
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="section-padding from-jetspan-black to-jetspan-gray bg-gradient-to-br">
      <div class="section-container">
        <div class="max-w-3xl">
          <h1 class="text-5xl text-white font-bold mb-6 md:text-6xl">
            Products & Services
          </h1>
          <p class="text-xl text-gray-300">
            Comprehensive energy solutions designed to meet the demanding requirements of industrial and commercial operations across South Africa.
          </p>
        </div>
      </div>
    </section>

    <!-- Products -->
    <section class="section-padding bg-jetspan-light dark:bg-jetspan-black">
      <div class="section-container">
        <div class="space-y-24">
          <div
            v-for="(product, index) in products"
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
                    :class="index % 2 === 0 ? 'bg-jetspan-yellow text-jetspan-black' : 'bg-jetspan-green text-white'"
                  >
                    <div :class="product.icon" />
                  </div>

                  <h2 class="text-4xl text-jetspan-black font-bold mb-2 dark:text-white">
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
                        class="text-sm text-jetspan-gray px-3 py-2 rounded-lg bg-jetspan-yellow/10 dark:text-gray-400"
                      >
                        {{ application }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- CTA -->
              <div class="mt-8 pt-8 border-t border-gray-200 dark:border-jetspan-gray">
                <NuxtLink to="/contact" class="btn">
                  Request a Quote for {{ product.title }}
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
