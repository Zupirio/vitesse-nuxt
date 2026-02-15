<script setup lang="ts">
interface Tier {
  name: string
  badge?: string
  recommended: boolean
  specs: { label: string, value: string }[]
}

const tiers: Tier[] = [
  {
    name: 'Essential Backup',
    recommended: false,
    specs: [
      { label: 'Inverter', value: 'Sunsynk 8kW Hybrid' },
      { label: 'Panels', value: '12× 550W Mono (6.6kWp)' },
      { label: 'Battery', value: '1× Hubble AM-2 5.5kWh' },
      { label: 'Backup Duration', value: '4-6 hours (essential loads)' },
      { label: 'Best For', value: 'Office, retail, light commercial' },
      { label: 'Indicative Price', value: 'From R150,000 ex VAT' },
    ],
  },
  {
    name: 'Full Off-Grid',
    badge: 'Recommended',
    recommended: true,
    specs: [
      { label: 'Inverter', value: 'Victron Quattro 15kW' },
      { label: 'Panels', value: '30× 550W Mono (16.5kWp)' },
      { label: 'Battery', value: '4× Hubble AM-2 (22kWh)' },
      { label: 'Backup Duration', value: '12-18 hours (full site)' },
      { label: 'Best For', value: 'Factory, warehouse, farm' },
      { label: 'Indicative Price', value: 'From R450,000 ex VAT' },
    ],
  },
]
</script>

<template>
  <section id="specs" class="section-padding bg-gray-50 dark:bg-jetspan-gray/10">
    <div class="section-container">
      <!-- Heading -->
      <div class="mb-16 text-center">
        <h2 class="section-title">
          System Specifications
        </h2>
        <p class="section-subtitle">
          Two tiers. Proven brands. Real numbers.
        </p>
      </div>

      <!-- Comparison Cards -->
      <div class="mx-auto gap-8 grid max-w-5xl md:grid-cols-2">
        <div
          v-for="tier in tiers"
          :key="tier.name"
          class="border-2 rounded-xl bg-white shadow-lg transition-shadow duration-300 relative overflow-hidden dark:bg-jetspan-gray-dark hover:shadow-xl"
          :class="tier.recommended ? 'border-jetspan-teal' : 'border-gray-200 dark:border-jetspan-gray'"
        >
          <!-- Recommended Badge -->
          <div
            v-if="tier.badge"
            class="text-xs text-white tracking-wider font-bold px-3 py-1 rounded-full bg-jetspan-teal uppercase right-4 top-4 absolute"
          >
            {{ tier.badge }}
          </div>

          <!-- Card Header -->
          <div
            class="p-6 pb-4"
            :class="tier.recommended ? 'bg-jetspan-teal/10' : 'bg-gray-50 dark:bg-jetspan-gray/20'"
          >
            <h3 class="text-2xl text-jetspan-black font-bold dark:text-white">
              {{ tier.name }}
            </h3>
          </div>

          <!-- Specs List -->
          <div class="px-6 divide-gray-100 divide-y dark:divide-jetspan-gray/30">
            <div
              v-for="spec in tier.specs"
              :key="spec.label"
              class="py-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
            >
              <span class="text-sm text-jetspan-gray font-semibold dark:text-gray-400">
                {{ spec.label }}
              </span>
              <span class="text-sm text-jetspan-black font-medium dark:text-white">
                {{ spec.value }}
              </span>
            </div>
          </div>

          <!-- Card Footer -->
          <div class="p-6 pt-2">
            <NuxtLink
              to="/contact"
              class="font-semibold py-3 text-center rounded-lg w-full block transition-all duration-200"
              :class="tier.recommended
                ? 'bg-jetspan-teal text-white hover:bg-jetspan-teal/90'
                : 'bg-gray-100 text-jetspan-black hover:bg-gray-200 dark:bg-jetspan-gray/30 dark:text-white dark:hover:bg-jetspan-gray/50'"
            >
              Get a Custom Quote
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Disclaimer -->
      <p class="text-sm text-jetspan-gray mt-8 text-center dark:text-gray-500">
        Prices indicative as of 2024. Subject to site assessment.
      </p>
    </div>
  </section>
</template>
