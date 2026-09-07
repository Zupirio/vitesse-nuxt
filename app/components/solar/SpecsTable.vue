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
    name: 'Home / Small Business',
    specs: [
      { label: 'Inverter', value: 'Hinen H6000 6kW Hybrid' },
      { label: 'Panels', value: '10× Astronergy 580W N-type (5.8kWp)' },
      { label: 'Battery', value: 'KNYEE 15.36kWh LiFePO4' },
      { label: 'Panel Efficiency', value: '22.5–23.2%' },
      { label: 'Backup Duration', value: '6–10 hours (essential loads)' },
      { label: 'Best For', value: 'Home, office, retail, small workshop' },
    ],
  },
  {
    color: 'blue',
    name: 'Business / Light Commercial',
    specs: [
      { label: 'Inverter', value: '2× Hinen H6000 parallel (12kW)' },
      { label: 'Panels', value: '22× Astronergy N7 610W Bifacial (13.4kWp)' },
      { label: 'Battery', value: '2× KNYEE 16.08kWh (32kWh)' },
      { label: 'Panel Efficiency', value: '≥22.6% (bifacial rear gain)' },
      { label: 'Backup Duration', value: '10–16 hours (essential site loads)' },
      { label: 'Best For', value: 'Shops, guesthouses, clinics, workshops' },
    ],
  },
  {
    color: 'amber',
    name: 'Custom / Large-Scale',
    specs: [
      { label: 'Inverter', value: 'Three-phase hybrid platform — sized per site' },
      { label: 'Panels', value: 'Astronergy N7 610W ground-mount array' },
      { label: 'Battery', value: 'KNYEE / container LiFePO4 bank' },
      { label: 'Panel Efficiency', value: '≥22.6% (bifacial rear gain)' },
      { label: 'Backup Duration', value: '24+ hours (engineered to load)' },
      { label: 'Best For', value: 'Farms, cold storage, manufacturing, logistics' },
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
