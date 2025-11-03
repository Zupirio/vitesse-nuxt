<script setup lang="ts">
import { companyInfo } from '~/constants'

const currentYear = new Date().getFullYear()

const navigation = {
  products: [
    { name: 'Diesel', path: '/products#diesel-ulsd' },
    { name: 'Oil Products', path: '/products#crude-oil' },
    { name: 'Petroleum Products', path: '/products#petroleum-products' },
    { name: 'Solar Solutions', path: '/products#solar-solutions' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
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
            <div class="text-xl text-jetspan-black font-bold rounded-lg bg-jetspan-yellow flex h-10 w-10 items-center justify-center">
              J
            </div>
            <span class="text-2xl text-white font-bold">
              {{ companyInfo.name }}
            </span>
          </div>
          <p class="text-gray-400 mb-4 max-w-md">
            {{ companyInfo.description }}
          </p>
          <div class="space-y-2">
            <a :href="`mailto:${companyInfo.email}`" class="text-gray-400 flex transition-colors items-center space-x-2 hover:text-jetspan-yellow">
              <div class="i-carbon-email" />
              <span>{{ companyInfo.email }}</span>
            </a>
            <a :href="`tel:${companyInfo.phone}`" class="text-gray-400 flex transition-colors items-center space-x-2 hover:text-jetspan-yellow">
              <div class="i-carbon-phone" />
              <span>{{ companyInfo.phone }}</span>
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

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-jetspan-gray flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
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
