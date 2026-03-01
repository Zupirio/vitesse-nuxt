<script setup lang="ts">
type TierColor = 'teal' | 'blue' | 'amber'

interface Tier {
  color: TierColor
  name: string
  specs: { label: string, value: string }[]
}

const tiers: Tier[] = [
  {
    color: 'teal',
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
    color: 'blue',
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
    color: 'amber',
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
          class="border-2 rounded-xl bg-white shadow-lg transition-shadow duration-300 overflow-hidden dark:bg-jetspan-gray-dark hover:shadow-xl"
          :class="tier.color === 'teal'
            ? 'border-jetspan-teal/40 dark:border-jetspan-teal/50'
            : tier.color === 'blue'
              ? 'border-jetspan-blue/40 dark:border-jetspan-blue/50'
              : 'border-jetspan-amber/40 dark:border-jetspan-amber/50'"
        >
          <!-- Card Header -->
          <div
            class="p-6 pb-4"
            :class="tier.color === 'teal'
              ? 'bg-jetspan-teal/10 dark:bg-jetspan-teal/20'
              : tier.color === 'blue'
                ? 'bg-jetspan-blue/10 dark:bg-jetspan-blue/20'
                : 'bg-jetspan-amber/10 dark:bg-jetspan-amber/20'"
          >
            <h3
              class="text-2xl font-bold"
              :class="tier.color === 'teal'
                ? 'text-jetspan-teal'
                : tier.color === 'blue'
                  ? 'text-jetspan-blue'
                  : 'text-jetspan-amber'"
            >
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
              <span
                class="text-sm font-semibold"
                :class="tier.color === 'teal'
                  ? 'text-jetspan-teal/80 dark:text-jetspan-teal/90'
                  : tier.color === 'blue'
                    ? 'text-jetspan-blue/80 dark:text-jetspan-blue/90'
                    : 'text-jetspan-amber/90 dark:text-jetspan-amber'"
              >
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
              :class="tier.color === 'teal'
                ? 'text-jetspan-teal bg-jetspan-teal/10 hover:bg-jetspan-teal/20'
                : tier.color === 'blue'
                  ? 'text-jetspan-blue bg-jetspan-blue/10 hover:bg-jetspan-blue/20'
                  : 'text-jetspan-amber bg-jetspan-amber/10 hover:bg-jetspan-amber/20'"
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
