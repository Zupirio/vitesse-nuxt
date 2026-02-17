<script setup lang="ts">
interface Tier {
  name: string
  specs: { label: string, value: string }[]
}

const tiers: Tier[] = [
  {
    name: 'Residential / Small Business',
    specs: [
      { label: 'Inverter', value: 'Sunova eFox 5kW Hybrid' },
      { label: 'Panels', value: '10× Thornova 580W N-type (5.8kWp)' },
      { label: 'Battery', value: 'Built-in 10kWh LiFePO4' },
      { label: 'Panel Efficiency', value: '22.5–23.2%' },
      { label: 'Backup Duration', value: '6–10 hours (essential loads)' },
      { label: 'Best For', value: 'Home, office, retail, small workshop' },
    ],
  },
  {
    name: 'Commercial',
    specs: [
      { label: 'Inverter', value: 'Megarevo MPS100 Microgrid (100kW)' },
      { label: 'Panels', value: '165× Thornova 615W Bifacial (101kWp)' },
      { label: 'Battery', value: 'PowerCo 71.68kWh HV Stacked' },
      { label: 'Panel Efficiency', value: '22.8–23.0% (bifacial +30%)' },
      { label: 'Backup Duration', value: '10–16 hours (full site)' },
      { label: 'Best For', value: 'Factory, warehouse, farm, logistics' },
    ],
  },
  {
    name: 'Industrial / Microgrid',
    specs: [
      { label: 'Inverter', value: 'Megarevo MPS500 Microgrid (500kW)' },
      { label: 'Panels', value: '820× Thornova 615W Bifacial (504kWp)' },
      { label: 'Battery', value: 'PowerCo 215kWh+ / Container ESS 1MWh' },
      { label: 'Panel Efficiency', value: '22.8–23.0% (bifacial +30%)' },
      { label: 'Backup Duration', value: '24+ hours (full facility)' },
      { label: 'Best For', value: 'Mining, manufacturing, data centres' },
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
          Three tiers. Proven hardware. Real numbers.
        </p>
      </div>

      <!-- Comparison Cards -->
      <div class="mx-auto gap-8 grid max-w-7xl lg:grid-cols-3 md:grid-cols-2">
        <div
          v-for="tier in tiers"
          :key="tier.name"
          class="border-2 border-gray-200 rounded-xl bg-white shadow-lg transition-shadow duration-300 overflow-hidden dark:border-jetspan-gray dark:bg-jetspan-gray-dark hover:shadow-xl"
        >
          <!-- Card Header -->
          <div class="p-6 pb-4 bg-gray-50 dark:bg-jetspan-gray/20">
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
              class="text-jetspan-black font-semibold py-3 text-center rounded-lg bg-gray-100 w-full block transition-all duration-200 dark:text-white dark:bg-jetspan-gray/30 hover:bg-gray-200 dark:hover:bg-jetspan-gray/50"
            >
              Get a Custom Quote
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Disclaimer -->
      <p class="text-sm text-jetspan-gray mt-8 text-center dark:text-gray-500">
        All systems custom-designed per site. Prices subject to site assessment.
      </p>
    </div>
  </section>
</template>
