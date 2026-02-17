<script setup lang="ts">
const terms = [
  {
    name: 'PV (Photovoltaic)',
    icon: 'i-carbon-solar-panel',
    description: 'The panel on your roof. It converts sunlight directly into electricity. No moving parts, no noise.',
  },
  {
    name: 'Inverter',
    icon: 'i-carbon-settings-adjust',
    description: 'The brain of the system. Converts DC power from panels into AC power your machines actually use. Megarevo microgrid inverters handle 30–500kW commercial sites.',
  },
  {
    name: 'Lithium Cycles',
    icon: 'i-carbon-battery-full',
    description: 'How many times you can charge and discharge your battery. Our PowerCo LiFePO4 banks deliver 7,000+ cycles at 90% DOD — that\'s 15+ years of daily use.',
  },
  {
    name: 'kWp (Kilowatt-peak)',
    icon: 'i-carbon-meter',
    description: 'The maximum power your system produces under perfect conditions. Think of it as the engine size.',
  },
  {
    name: 'Grid-Tied vs Off-Grid',
    icon: 'i-carbon-plug',
    description: 'Grid-tied feeds excess power back to the municipality. Off-grid means total independence — you are the power station.',
  },
  {
    name: 'Load Shedding Stage',
    icon: 'i-carbon-warning',
    description: 'Eskom\'s way of saying how much power they\'re cutting. Higher stage = more cuts. Your solar system doesn\'t care what stage it is.',
  },
]
</script>

<template>
  <section class="section-padding bg-gray-50 dark:bg-jetspan-gray/10">
    <div class="section-container">
      <!-- Heading -->
      <div class="mb-16 text-center">
        <h2 class="section-title">
          Solar Jargon, Decoded
        </h2>
        <p class="section-subtitle">
          No engineering degree required. Here's what the terms actually mean.
        </p>
      </div>

      <!-- Terms Grid -->
      <div class="mx-auto gap-6 grid max-w-6xl lg:grid-cols-3 md:grid-cols-2">
        <div
          v-for="term in terms"
          :key="term.name"
          class="card"
        >
          <!-- Icon Circle -->
          <div class="mb-4 rounded-full bg-jetspan-teal/20 flex h-14 w-14 items-center justify-center">
            <div :class="term.icon" class="text-2xl text-jetspan-teal" />
          </div>

          <!-- Term Name -->
          <h3 class="text-lg text-jetspan-black font-bold mb-2 dark:text-white">
            {{ term.name }}
          </h3>

          <!-- Description -->
          <p class="text-sm text-jetspan-gray leading-relaxed dark:text-gray-400">
            {{ term.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
