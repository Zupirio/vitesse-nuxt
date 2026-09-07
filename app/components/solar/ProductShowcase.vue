<script setup lang="ts">
type SolarColor = 'teal' | 'blue' | 'amber'

interface ProductImage {
  src: string
  alt: string
}

interface SolarProduct {
  name: string
  model: string
  specs: string[]
  badge: string
  images: ProductImage[]
  price?: string
  stores?: { name: string, url: string }[]
  datasheet?: { href: string, size: string }
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
        name: 'Astronergy Astro N7 610W Bifacial',
        model: 'CHSM66RN(DG)/F-BH · 605–630W',
        specs: ['N-type TOPCon, 132 half-cells', '≥22.6% module efficiency', 'Bifacial dual-glass (2.0 + 2.0mm)', '30-year linear power warranty', '≤0.4% annual degradation', 'Low-Voc — fewer strings, lower BOS'],
        badge: 'Commercial',
        images: [
          { src: '/assets/products/solar/astronergy-n7-610w.jpg', alt: 'Astronergy Astro N7 610W bifacial solar panel' },
        ],
        price: 'R63,000.00 / pallet',
        stores: [{ name: 'Amazon', url: 'https://www.amazon.co.za/Astronergy-Astro-Bifacial-Solar-Panel/dp/B0HHG7PZW3' }],
        datasheet: { href: '/datasheets/astronergy-n7-610w.pdf', size: '565 KB' },
      },
      {
        name: 'Astronergy 580W Bifacial',
        model: 'CHSM72N(DG)/F-BH · 580–600W',
        specs: ['N-type TOPCon, 144 half-cells', '≥22.5% module efficiency', 'Bifacial dual-glass (2.0 + 2.0mm)', '30-year linear power warranty', '≤0.29%/°C temperature coefficient', '5400Pa front / 2400Pa rear load'],
        badge: 'Residential',
        images: [
          { src: '/assets/products/solar/astronergy-580w.jpg', alt: 'Astronergy 580W bifacial solar panel' },
        ],
        price: 'R59,500.00 / pallet',
        stores: [{ name: 'Amazon', url: 'https://www.amazon.co.za/Astronergy-580W-Bifacial-Solar-Panel/dp/B0HHG4TWDV' }],
        datasheet: { href: '/datasheets/astronergy-580w.pdf', size: '558 KB' },
      },
    ],
  },
  {
    title: 'Inverters',
    icon: 'i-carbon-settings-adjust',
    color: 'blue',
    products: [
      {
        name: 'Hinen PS3000 Power Station',
        model: 'PS3000 · 3000W / 2.56kWh',
        specs: ['3000W output / 6000W peak', '2.56kWh LiFePO4 prismatic battery', 'Pure sine wave — safe for electronics', '~1.7-hr fast charge (2500W max)', 'UPS mode · <14ms switchover', 'Expandable up to 17.5kWh'],
        badge: 'Portable',
        images: [
          { src: '/assets/products/hinen-ps3000/main.png', alt: 'Hinen PS3000 power station — front view' },
          { src: '/assets/products/hinen-ps3000/panel.png', alt: 'Hinen PS3000 control panel and AC outlets' },
          { src: '/assets/products/hinen-ps3000/side.png', alt: 'Hinen PS3000 side profile' },
          { src: '/assets/products/hinen-ps3000/rear.png', alt: 'Hinen PS3000 rear ports and connectors' },
        ],
        price: 'R14,500.00',
        stores: [
          { name: 'Makro', url: 'https://www.makro.co.za/hinen-ps3000-pure-sine-wave-inverter/p/itm6a65833afa223?pid=IVTH7FD3H9TNGZPY' },
          { name: 'Amazon', url: 'https://www.amazon.co.za/Hinen-PS3000-3000-Portable-Station/dp/B0FDWLJ9DV' },
        ],
        datasheet: { href: '/datasheets/hinen-ps3000.pdf', size: '1.2 MB' },
      },
      {
        name: 'Hinen H6000 Hybrid',
        model: 'H6000-EU · 6kW single-phase',
        specs: ['6kW single-phase hybrid inverter', '190% oversized PV input — up to 11.4kW', '120A continuous charge / discharge', 'AC-coupled, DC-coupled & hybrid modes', 'Fanless · ≤25dB ultra-quiet', 'EPS backup switchover <20ms'],
        badge: 'Hybrid',
        images: [
          { src: '/assets/products/solar/hinen-h6000-hybrid/1-front.jpg', alt: 'Hinen H6000 hybrid inverter — front view' },
          { src: '/assets/products/solar/hinen-h6000-hybrid/2-angle.jpg', alt: 'Hinen H6000 hybrid inverter — three-quarter view' },
          { src: '/assets/products/solar/hinen-h6000-hybrid/3-back.jpg', alt: 'Hinen H6000 hybrid inverter — rear heatsink' },
        ],
        datasheet: { href: '/datasheets/hinen-h6000-hybrid.pdf', size: '1.1 MB' },
      },
      {
        name: 'Hinen H6000-OG Off-Grid',
        model: 'H6000-OG · 6kW single-phase',
        specs: ['6kW single-phase off-grid inverter', 'Hybrid mode + multi-unit parallel', 'Built-in MPPT solar charge controller', 'Optional generator auto-start', 'Lead-acid & lithium battery support', 'Backup switchover ≤10ms'],
        badge: 'Off-Grid',
        images: [
          { src: '/assets/products/solar/hinen-h6000-og/1-front.jpg', alt: 'Hinen H6000-OG off-grid inverter — front view' },
          { src: '/assets/products/solar/hinen-h6000-og/2-angle.jpg', alt: 'Hinen H6000-OG off-grid inverter — three-quarter view' },
          { src: '/assets/products/solar/hinen-h6000-og/3-back.jpg', alt: 'Hinen H6000-OG off-grid inverter — rear heatsink' },
          { src: '/assets/products/solar/hinen-h6000-og/4-ports.jpg', alt: 'Hinen H6000-OG off-grid inverter — connection ports' },
        ],
        price: 'R9,000.00',
        stores: [{ name: 'Amazon', url: 'https://www.amazon.co.za/Generic-H6000-OG-Hinen/dp/B0HHKQZNSN' }],
        datasheet: { href: '/datasheets/hinen-h6000-og.pdf', size: '617 KB' },
      },
    ],
  },
  {
    title: 'Energy Storage',
    icon: 'i-carbon-battery-full',
    color: 'amber',
    products: [
      {
        name: 'KNYEE 15.36kWh Floor Battery',
        model: 'KNY51300 · 51.2V 300Ah',
        specs: ['15.36kWh LiFePO4 (300Ah @ 51.2V)', '4,000 cycles at 80% DOD', 'Up to 15 units in parallel', 'IP65 — indoor / outdoor floor mount', 'CAN / RS485 / RS232 comms', 'CHILWEE Group (Fortune 500) build'],
        badge: 'Light Commercial',
        images: [
          { src: '/assets/products/solar/knyee-15kwh.jpg', alt: 'KNYEE 15.36kWh floor-mount LiFePO4 battery' },
        ],
        price: 'R30,000.00',
        stores: [{ name: 'Amazon', url: 'https://www.amazon.co.za/Knyee-Energy-15kwh-Floor-Battery/dp/B0FSSN96RB' }],
        datasheet: { href: '/datasheets/knyee-15kwh.pdf', size: '314 KB' },
      },
      {
        name: 'KNYEE 16.08kWh Fire-Safe',
        model: 'ES-LV-16 · 51.2V 314Ah',
        specs: ['16.08kWh LiFePO4 (314Ah @ 51.2V)', '8,000 cycles at 80% DOD', 'Built-in aerosol fire suppression', 'Up to 32 units in parallel', 'Touchscreen · Bluetooth + WiFi', 'Auto-dialling fault alerts'],
        badge: 'Commercial',
        images: [
          { src: '/assets/products/solar/knyee-16kwh/1-main.jpg', alt: 'KNYEE 16.08kWh LiFePO4 battery' },
          { src: '/assets/products/solar/knyee-16kwh/2-fire-suppression.jpg', alt: 'KNYEE 16.08kWh battery with built-in aerosol fire suppression' },
        ],
        price: 'R31,500.00',
        stores: [{ name: 'Amazon', url: 'https://www.amazon.co.za/LiFePO4-Battery-16-08kWh-Energy-Storage/dp/B0HGGGPNHB' }],
        datasheet: { href: '/datasheets/knyee-16kwh.pdf', size: '325 KB' },
      },
    ],
  },
]

const colorMap: Record<SolarColor, { bg: string, text: string, bgLight: string, badgeBg: string }> = {
  teal: { bg: 'bg-jetspan-teal', text: 'text-jetspan-teal', bgLight: 'bg-jetspan-teal/10', badgeBg: 'bg-jetspan-teal/20' },
  blue: { bg: 'bg-jetspan-blue', text: 'text-jetspan-blue', bgLight: 'bg-jetspan-blue/10', badgeBg: 'bg-jetspan-blue/20' },
  amber: { bg: 'bg-jetspan-amber', text: 'text-jetspan-amber', bgLight: 'bg-jetspan-amber/10', badgeBg: 'bg-jetspan-amber/20' },
}

const lightbox = ref<{ images: ProductImage[], index: number, name: string } | null>(null)

const lightboxImage = computed(() => (lightbox.value ? lightbox.value.images[lightbox.value.index] : null))

function openLightbox(product: SolarProduct, index = 0) {
  lightbox.value = { images: product.images, index, name: product.name }
}

function closeLightbox() {
  lightbox.value = null
}

/** Move `delta` places through the current gallery, wrapping at both ends. */
function step(delta: number) {
  if (!lightbox.value)
    return
  const count = lightbox.value.images.length
  lightbox.value.index = (lightbox.value.index + delta + count) % count
}

function goTo(index: number) {
  if (lightbox.value)
    lightbox.value.index = index
}

function onKeydown(event: KeyboardEvent) {
  if (!lightbox.value)
    return
  if (event.key === 'Escape')
    closeLightbox()
  else if (event.key === 'ArrowRight')
    step(1)
  else if (event.key === 'ArrowLeft')
    step(-1)
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
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
              <button
                type="button"
                class="p-4 bg-white flex h-64 w-full cursor-zoom-in items-center justify-center relative dark:bg-jetspan-black/30"
                :aria-label="`View ${product.name} images`"
                @click="openLightbox(product)"
              >
                <img
                  :src="product.images[0]?.src"
                  :alt="product.images[0]?.alt"
                  class="max-h-full max-w-full transition-transform duration-300 object-contain group-hover:scale-110"
                >
                <span
                  v-if="product.images.length > 1"
                  class="text-xs text-jetspan-black/70 leading-none font-medium px-2 py-1 rounded-full bg-white/90 inline-flex gap-1 shadow-sm items-center bottom-3 right-3 absolute dark:text-white/80 dark:bg-jetspan-black/70"
                >
                  <div class="i-carbon-image" />
                  {{ product.images.length }}
                </span>
              </button>

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
                    class="text-base text-jetspan-gray flex items-start dark:text-gray-400"
                  >
                    <div class="i-carbon-checkmark mr-2 mt-0.5 flex-shrink-0" :class="colorMap[category.color].text" />
                    {{ spec }}
                  </li>
                </ul>

                <ProductPrice
                  v-if="product.price"
                  :price="product.price"
                  :product-name="product.name"
                  class="mt-4"
                />

                <ProductStoreLinks
                  v-if="product.stores"
                  :stores="product.stores"
                  class="mt-4"
                />

                <a
                  v-if="product.datasheet"
                  :href="product.datasheet.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm text-jetspan-gray font-medium mt-4 inline-flex gap-1.5 transition-colors items-center dark:text-gray-400 hover:text-jetspan-green dark:hover:text-jetspan-green"
                >
                  <div class="i-carbon-document-pdf text-base" />
                  Datasheet <span class="opacity-60">(PDF, {{ product.datasheet.size }})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Image gallery lightbox -->
      <div
        v-if="lightbox"
        class="p-4 bg-black/85 flex flex-col gap-4 items-center inset-0 justify-center fixed z-100 backdrop-blur-sm sm:p-8"
        @click="closeLightbox"
      >
        <button
          type="button"
          class="text-white/70 transition-colors right-4 top-4 absolute hover:text-white"
          aria-label="Close"
          @click.stop="closeLightbox"
        >
          <div class="i-carbon-close text-3xl" />
        </button>

        <!-- Stage -->
        <div class="flex flex-1 min-h-0 w-full items-center justify-center relative" @click.stop>
          <img
            :src="lightboxImage?.src"
            :alt="lightboxImage?.alt"
            class="rounded-lg bg-white max-h-full max-w-full object-contain"
            :class="lightbox.images.length > 1 ? 'cursor-pointer' : ''"
            @click="lightbox.images.length > 1 && step(1)"
          >

          <button
            v-if="lightbox.images.length > 1"
            type="button"
            class="text-white/80 p-2 rounded-full bg-black/40 transition-colors left-0 absolute hover:text-white hover:bg-black/60 sm:left-2"
            aria-label="Previous image"
            @click="step(-1)"
          >
            <div class="i-carbon-chevron-left text-2xl sm:text-3xl" />
          </button>
          <button
            v-if="lightbox.images.length > 1"
            type="button"
            class="text-white/80 p-2 rounded-full bg-black/40 transition-colors right-0 absolute hover:text-white hover:bg-black/60 sm:right-2"
            aria-label="Next image"
            @click="step(1)"
          >
            <div class="i-carbon-chevron-right text-2xl sm:text-3xl" />
          </button>
        </div>

        <!-- Caption + thumbnails -->
        <div class="flex flex-shrink-0 flex-col gap-3 items-center" @click.stop>
          <p class="text-sm text-white/70">
            {{ lightbox.name }}
            <span v-if="lightbox.images.length > 1" class="text-white/40">&nbsp;·&nbsp;{{ lightbox.index + 1 }} / {{ lightbox.images.length }}</span>
          </p>
          <div v-if="lightbox.images.length > 1" class="flex flex-wrap gap-2 justify-center">
            <button
              v-for="(img, i) in lightbox.images"
              :key="img.src"
              type="button"
              class="p-1 border-2 rounded-lg bg-white/90 transition-all"
              :class="i === lightbox.index ? 'border-jetspan-green' : 'border-transparent opacity-50 hover:opacity-100'"
              :aria-label="`View image ${i + 1}`"
              @click="goTo(i)"
            >
              <img :src="img.src" :alt="img.alt" class="h-12 w-16 object-contain sm:h-14 sm:w-20">
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
