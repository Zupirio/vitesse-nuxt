<script setup lang="ts">
const metrics = [
  {
    icon: 'i-carbon-chemistry',
    label: 'Sulphur Content',
    value: '≤10 ppm',
    detail: 'Ultra-Low Sulphur',
    color: 'text-green-600',
    bg: 'bg-green-100 dark:bg-green-900/20',
  },
  {
    icon: 'i-carbon-flash',
    label: 'Cetane Number',
    value: '≥51',
    detail: 'Superior Ignition',
    color: 'text-blue-600',
    bg: 'bg-blue-100 dark:bg-blue-900/20',
  },
  {
    icon: 'i-carbon-temperature-hot',
    label: 'Flash Point',
    value: '≥55°C',
    detail: 'Safe Handling',
    color: 'text-orange-600',
    bg: 'bg-orange-100 dark:bg-orange-900/20',
  },
  {
    icon: 'i-carbon-scale',
    label: 'Density (15°C)',
    value: '820–845 kg/m³',
    detail: 'Optimal Range',
    color: 'text-purple-600',
    bg: 'bg-purple-100 dark:bg-purple-900/20',
  },
]
</script>

<template>
  <section class="section-padding bg-white dark:bg-jetspan-black">
    <div class="section-container">
      <div class="mx-auto max-w-5xl">
        <div class="border-2 border-green-200 rounded-2xl overflow-hidden dark:border-green-900/40">
          <!-- Header -->
          <div class="from-green-600 px-8 py-6 text-white to-green-700 bg-gradient-to-r">
            <div class="flex flex-wrap gap-4 items-center justify-between">
              <div>
                <h2 class="heading-display text-3xl mb-1">
                  The EN590 Quality Promise
                </h2>
                <p class="text-green-100">
                  Every shipment independently verified to exceed international standards
                </p>
              </div>
              <div class="flex gap-2 items-center rounded-full bg-white/20 px-4 py-2 backdrop-blur">
                <span class="i-carbon-checkmark-filled text-lg" />
                <span class="text-sm font-semibold">SGS / Intertek Verified</span>
              </div>
            </div>
          </div>

          <!-- Metric Cards -->
          <div class="gap-6 grid p-8 sm:grid-cols-2 lg:grid-cols-4">
            <div
              v-for="metric in metrics"
              :key="metric.label"
              class="text-center"
            >
              <div
                class="mx-auto mb-3 rounded-xl flex h-14 w-14 items-center justify-center"
                :class="metric.bg"
              >
                <span :class="[metric.icon, metric.color]" class="text-2xl" />
              </div>
              <p class="text-sm text-gray-500 font-medium mb-1 dark:text-gray-400">
                {{ metric.label }}
              </p>
              <p class="heading-display text-2xl" :class="metric.color">
                {{ metric.value }}
              </p>
              <p class="text-xs text-gray-400 mt-1">
                {{ metric.detail }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
