<script setup lang="ts">
const product = {
  name: 'Hinen PS3000 Power Station',
  tagline: '3000W Portable Power · 2.56kWh LiFePO4 · Pure Sine Wave',
  price: 'R13,500.00',
  description: 'An all-in-one 3000W portable power station with a built-in 2.56kWh LiFePO4 battery and pure sine wave inverter — built for home backup, load-shedding, camping and off-grid living.',
  features: [
    '3000W output / 6000W peak',
    '2.56kWh LiFePO4 prismatic battery',
    '~1.7-hr fast charge (2500W max)',
    'UPS mode · <14ms switchover',
    'Expandable up to 17.5kWh',
    '4000 cycles · 10-year lifespan',
    'WiFi / Bluetooth / App control',
    '≤30dB ultra-quiet operation',
  ],
  stores: [
    { name: 'Makro', url: 'https://www.makro.co.za/hinen-ps3000-pure-sine-wave-inverter/p/itm6a65833afa223?pid=IVTH7FD3H9TNGZPY' },
    { name: 'Amazon', url: 'https://www.amazon.co.za/Hinen-PS3000-3000-Portable-Station/dp/B0FDWLJ9DV' },
  ],
}

const images = [
  { src: '/assets/products/hinen-ps3000/main.png', alt: 'Hinen PS3000 power station — front view' },
  { src: '/assets/products/hinen-ps3000/panel.png', alt: 'Hinen PS3000 control panel and AC outlets' },
  { src: '/assets/products/hinen-ps3000/side.png', alt: 'Hinen PS3000 side profile' },
  { src: '/assets/products/hinen-ps3000/rear.png', alt: 'Hinen PS3000 rear ports and connectors' },
]

const activeIndex = ref(0)
const activeImage = computed(() => images[activeIndex.value])
const lightboxOpen = ref(false)

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape')
    lightboxOpen.value = false
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <section class="section-padding bg-white dark:bg-jetspan-gray-dark">
    <div class="section-container">
      <!-- Heading -->
      <div class="mb-12 text-center">
        <span class="text-sm text-jetspan-green font-semibold mb-4 px-4 py-1.5 rounded-full bg-jetspan-green/10 inline-flex gap-2 items-center">
          <span class="i-carbon-flash" />
          New Product
        </span>
        <h2 class="section-title">
          Featured Product
        </h2>
        <p class="section-subtitle mt-4">
          A standout addition to our energy lineup — now available from Jetspan.
        </p>
      </div>

      <div class="gap-10 grid items-start lg:grid-cols-2">
        <!-- Image gallery -->
        <div>
          <div
            class="p-6 border rounded-2xl bg-jetspan-light flex h-80 cursor-zoom-in items-center justify-center dark:border-jetspan-gray/30 dark:bg-jetspan-black/40 md:h-96"
            @click="lightboxOpen = true"
          >
            <img
              :src="activeImage?.src"
              :alt="activeImage?.alt"
              class="max-h-full max-w-full transition-transform duration-300 object-contain hover:scale-105"
            >
          </div>

          <div class="mt-4 gap-3 grid grid-cols-4">
            <button
              v-for="(img, i) in images"
              :key="img.src"
              type="button"
              class="p-2 border-2 rounded-xl bg-jetspan-light transition-colors dark:bg-jetspan-black/40"
              :class="i === activeIndex ? 'border-jetspan-green' : 'border-transparent hover:border-jetspan-green/40'"
              @click="activeIndex = i"
            >
              <img :src="img.src" :alt="img.alt" class="h-16 w-full object-contain md:h-20">
            </button>
          </div>
        </div>

        <!-- Details -->
        <div>
          <span class="text-xs text-jetspan-green font-semibold mb-3 px-3 py-1 rounded-full bg-jetspan-green/15 inline-block">
            Portable Power · In Stock
          </span>
          <h3 class="text-3xl text-jetspan-black font-bold mb-2 dark:text-white">
            {{ product.name }}
          </h3>
          <p class="text-jetspan-green font-semibold mb-4">
            {{ product.tagline }}
          </p>

          <ProductPrice :price="product.price" :product-name="product.name" class="mb-5" />

          <p class="text-jetspan-gray mb-6 dark:text-gray-400">
            {{ product.description }}
          </p>

          <ul class="mb-6 gap-x-6 gap-y-2 grid sm:grid-cols-2">
            <li
              v-for="feature in product.features"
              :key="feature"
              class="text-jetspan-gray flex items-start dark:text-gray-400"
            >
              <div class="i-carbon-checkmark text-jetspan-green mr-2 mt-1 flex-shrink-0" />
              {{ feature }}
            </li>
          </ul>

          <ProductStoreLinks :stores="product.stores" class="mb-5" />

          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn">
              Request a Quote
            </NuxtLink>
            <NuxtLink to="/solar-solutions" class="text-sm btn-outline">
              Learn More
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <div
      v-if="lightboxOpen"
      class="p-4 bg-black/80 flex items-center inset-0 justify-center fixed z-100 backdrop-blur-sm"
      @click="lightboxOpen = false"
    >
      <img
        :src="activeImage?.src"
        :alt="activeImage?.alt"
        class="rounded-lg bg-white max-h-[90vh] max-w-[90vw] object-contain"
        @click.stop
      >
    </div>
  </section>
</template>
