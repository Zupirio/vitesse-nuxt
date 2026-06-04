<script setup lang="ts">
import { companyInfo } from '~/constants'

const currentYear = new Date().getFullYear()

const navigation = {
  products: [
    { name: 'Diesel (EN590)', path: '/en590-diesel' },
    { name: 'Oil Products', path: '/products#crude-oil' },
    { name: 'Petroleum Products', path: '/products#petroleum-products' },
    { name: 'Solar Solutions', path: '/solar-solutions' },
    { name: 'Gas (LPG)', path: '/gas-lpg' },
    { name: 'Fertilizer', path: '/fertilizer' },
  ],
  company: [
    { name: 'Our Story', path: '/about' },
    { name: 'All Products', path: '/products' },
    { name: 'Request a Quote', path: '/contact' },
  ],
}
</script>

<template>
  <footer class="text-gray-300 bg-jetspan-black">
    <div class="section-container section-padding">
      <div class="mb-12 gap-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="mb-4 flex items-center space-x-3">
            <div
              class="bg-jetspan-white text-xl text-jetspan-black font-bold rounded-lg flex h-10 w-10 items-center justify-center"
            >
              <NuxtImg
                src="/assets/logos/jetspan-logo.png"
                alt="Jetspan Logo"
                class="h-12 w-auto transition-transform group-hover:scale-110"
                width="48"
                height="48"
              />
            </div>
            <span class="text-2xl text-white font-bold">
              {{ companyInfo.name }}
            </span>
          </div>
          <p class="text-gray-400 mb-4 max-w-md">
            {{ companyInfo.description }}
          </p>
          <div class="space-y-2">
            <a
              :href="`mailto:${companyInfo.email}`"
              class="text-gray-400 flex transition-colors items-center space-x-2 hover:text-jetspan-yellow"
            >
              <div class="i-carbon-email" />
              <span>{{ companyInfo.email }}</span>
            </a>
            <a
              :href="`tel:${companyInfo.phone}`"
              class="text-gray-400 flex transition-colors items-center space-x-2 hover:text-jetspan-yellow"
            >
              <div class="i-carbon-phone" />
              <span>{{ companyInfo.phone }}</span>
            </a>
            <a
              :href="`tel:${companyInfo.phone}`"
              class="text-gray-400 flex transition-colors items-center space-x-2 hover:text-jetspan-yellow"
            >
              <div class="i-mdi-whatsapp" />
              <span>{{ companyInfo.whatsapp }}</span>
            </a>
          </div>
        </div>

        <!-- Products -->
        <div>
          <h3 class="text-lg text-white font-bold mb-4">
            Products
          </h3>
          <ul class="space-y-2">
            <li v-for="item in navigation.products" :key="item.path">
              <NuxtLink :to="item.path" class="text-gray-400 transition-colors hover:text-jetspan-yellow">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-lg text-white font-bold mb-4">
            Company
          </h3>
          <ul class="space-y-2">
            <li v-for="item in navigation.company" :key="item.path">
              <NuxtLink :to="item.path" class="text-gray-400 transition-colors hover:text-jetspan-yellow">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Quick Quote Banner -->
      <div class="mb-12 p-6 border border-jetspan-yellow/20 rounded-xl bg-jetspan-yellow/5 flex flex-col gap-4 items-center justify-between sm:flex-row">
        <div>
          <h3 class="text-lg text-white font-bold mb-1">
            Need a Quick Quote?
          </h3>
          <p class="text-sm text-gray-400">
            Get pricing for diesel, solar, or gas via WhatsApp — fast, direct, no hassle.
          </p>
        </div>
        <a
          :href="`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hi Jetspan, I\'d like to request a quote.')}`"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm btn-whatsapp inline-flex flex-shrink-0 gap-2 items-center"
        >
          <div class="i-mdi-whatsapp text-xl" />
          WhatsApp Us
        </a>
      </div>

      <!-- Bottom Bar -->
      <div
        class="pt-8 border-t border-jetspan-gray flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0"
      >
        <p class="text-sm text-gray-400">
          © {{ currentYear }} {{ companyInfo.name }}. All rights reserved.
        </p>
        <div class="flex items-center space-x-4">
          <DarkToggle />
        </div>
      </div>
    </div>
  </footer>
</template>
