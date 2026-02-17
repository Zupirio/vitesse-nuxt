<script setup lang="ts">
type SolarColor = 'teal' | 'blue' | 'amber'

interface SolarProduct {
  name: string
  model: string
  specs: string[]
  badge: string
  image: string
}

interface SolarCategory {
  title: string
  icon: string
  color: SolarColor
  products: SolarProduct[]
}

const categories: SolarCategory[] = [
  {
    title: 'Solar Panels',
    icon: 'i-carbon-solar-panel',
    color: 'teal',
    products: [
      {
        name: 'Thornova 615W Bifacial',
        model: 'Tangra L Pro HD TS-BGT66',
        specs: ['N-type 132-cell', '22.8–23.0% efficiency', 'Bifacial +30% rear gain', '30-year warranty', '0.40% annual degradation'],
        badge: 'Commercial',
        image: '/assets/products/solar/thornova-615w.jpg',
      },
      {
        name: 'Thornova 580W Monofacial',
        model: 'Tangra M TS-SWT72',
        specs: ['N-type 144-cell', '22.5–23.2% efficiency', 'Single glass, 27.2 kg', '30-year warranty', '2400Pa wind / 5400Pa snow'],
        badge: 'Residential',
        image: '/assets/products/solar/thornova-580w.jpg',
      },
    ],
  },
  {
    title: 'Inverters',
    icon: 'i-carbon-settings-adjust',
    color: 'blue',
    products: [
      {
        name: 'Megarevo MPS Microgrid',
        model: 'MPS100 / MPS150 / MPS250 / MPS500',
        specs: ['30–500kW hybrid inverter', 'PV + Grid + Battery + Diesel', 'Built-in isolation transformer', 'LCD touchscreen + EMS', '<10ms grid switchover'],
        badge: 'Industrial',
        image: '/assets/products/solar/megarevo-mps.png',
      },
      {
        name: 'Sunova eFox Hybrid',
        model: 'eFox-H-35E / H-50E / WP-50E',
        specs: ['3.5–5kW inverter', 'Built-in 5–10kWh battery', 'All-in-one compact design', 'MPPT charge controller', 'Mobile app monitoring'],
        badge: 'Residential',
        image: '/assets/products/solar/sunova-580w.jpg',
      },
    ],
  },
  {
    title: 'Energy Storage',
    icon: 'i-carbon-battery-full',
    color: 'amber',
    products: [
      {
        name: 'PowerCo HV Stacked',
        model: 'Tower-X-HV 71–215kWh',
        specs: ['LiFePO4 EVE cells', '7,000+ cycles at 90% DOD', '10+ year lifespan', 'Modular, stackable design', 'OTA remote upgrades'],
        badge: 'Commercial',
        image: '/assets/products/solar/powerco-hv.jpg',
      },
      {
        name: 'Knyee Floor / Wall Mount',
        model: 'KNY51300 / 5kW Wall',
        specs: ['15.36kWh floor battery', 'LiFePO4 300Ah @ 51.2V', '6,000 cycles at 80% DOD', 'IP65 rated', 'CHILWEE Group quality'],
        badge: 'Light Commercial',
        image: '/assets/products/solar/knyee-floor.jpg',
      },
    ],
  },
]

const colorMap: Record<SolarColor, { bg: string, text: string, bgLight: string, badgeBg: string }> = {
  teal: { bg: 'bg-jetspan-teal', text: 'text-jetspan-teal', bgLight: 'bg-jetspan-teal/10', badgeBg: 'bg-jetspan-teal/20' },
  blue: { bg: 'bg-jetspan-blue', text: 'text-jetspan-blue', bgLight: 'bg-jetspan-blue/10', badgeBg: 'bg-jetspan-blue/20' },
  amber: { bg: 'bg-jetspan-amber', text: 'text-jetspan-amber', bgLight: 'bg-jetspan-amber/10', badgeBg: 'bg-jetspan-amber/20' },
}
</script>

<template>
  <section class="section-padding bg-white dark:bg-jetspan-gray-dark">
    <div class="section-container">
      <!-- Heading -->
      <div class="mb-16 text-center">
        <h2 class="section-title">
          What We Install
        </h2>
        <p class="section-subtitle">
          Real hardware from trusted manufacturers — not generic white-label kit.
        </p>
      </div>

      <!-- Category Cards -->
      <div class="space-y-12">
        <div
          v-for="category in categories"
          :key="category.title"
        >
          <!-- Category Header -->
          <div class="mb-6 flex gap-3 items-center">
            <div
              class="rounded-lg flex h-10 w-10 items-center justify-center"
              :class="colorMap[category.color].badgeBg"
            >
              <div :class="category.icon" class="text-xl" :style="{ color: `var(--colors-jetspan-${category.color})` }" />
            </div>
            <h3 class="text-2xl text-jetspan-black font-bold dark:text-white">
              {{ category.title }}
            </h3>
          </div>

          <!-- Products Grid -->
          <div class="gap-6 grid md:grid-cols-2">
            <div
              v-for="product in category.products"
              :key="product.name"
              class="group border rounded-xl bg-gray-50 transition-all duration-300 overflow-hidden dark:border-jetspan-gray/30 dark:bg-jetspan-black/50 hover:shadow-lg"
              :class="`hover:border-jetspan-${category.color}/50`"
            >
              <!-- Product Image -->
              <div class="p-4 bg-white flex h-48 items-center justify-center dark:bg-jetspan-black/30">
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="max-h-full max-w-full transition-transform duration-300 object-contain group-hover:scale-105"
                >
              </div>

              <!-- Product Content -->
              <div class="p-6 pt-4">
                <!-- Product Header -->
                <div class="mb-4 flex items-start justify-between">
                  <div>
                    <h4 class="text-lg text-jetspan-black font-bold dark:text-white">
                      {{ product.name }}
                    </h4>
                    <p class="text-sm text-jetspan-gray dark:text-gray-500">
                      {{ product.model }}
                    </p>
                  </div>
                  <span
                    class="text-xs font-semibold px-2.5 py-1 rounded-full"
                    :class="[colorMap[category.color].badgeBg, colorMap[category.color].text]"
                  >
                    {{ product.badge }}
                  </span>
                </div>

                <!-- Specs List -->
                <ul class="space-y-2">
                  <li
                    v-for="spec in product.specs"
                    :key="spec"
                    class="text-sm text-jetspan-gray flex items-start dark:text-gray-400"
                  >
                    <div class="i-carbon-checkmark mr-2 mt-0.5 flex-shrink-0" :class="colorMap[category.color].text" />
                    {{ spec }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12 text-center">
        <NuxtLink to="/contact" class="btn text-center inline-flex gap-2 items-center">
          <span class="i-carbon-document" />
          Request Full Datasheets
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
