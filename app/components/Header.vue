<script setup lang="ts">
import { companyInfo } from '~/constants'

const route = useRoute()
const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Products & Services', path: '/products' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

function isActive(path: string) {
  return route.path === path
}
</script>

<template>
  <header class="bg-white shadow-md left-0 right-0 top-0 fixed z-50 dark:bg-jetspan-black">
    <nav class="section-container">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="group flex items-center space-x-3">
          <div class="text-xl text-jetspan-black font-bold rounded-lg bg-jetspan-yellow flex h-10 w-10 transition-transform items-center justify-center group-hover:scale-110">
            J
          </div>
          <span class="text-2xl text-jetspan-black font-bold dark:text-white">
            {{ companyInfo.name }}
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden items-center space-x-1 md:flex">
          <NuxtLink
            v-for="item in navigation"
            :key="item.path"
            :to="item.path"
            class="font-medium px-4 py-2 rounded-lg transition-all duration-200"
            :class="isActive(item.path)
              ? 'text-jetspan-green bg-jetspan-green/10'
              : 'text-jetspan-gray dark:text-gray-300 hover:text-jetspan-green hover:bg-jetspan-green/5'"
          >
            {{ item.name }}
          </NuxtLink>
          <div class="pl-2">
            <DarkToggle />
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="text-jetspan-gray p-2 rounded-lg transition-colors hover:bg-gray-100 md:hidden dark:hover:bg-jetspan-gray"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <div class="flex flex-col h-6 w-6 justify-center space-y-1.5">
            <span class="bg-current h-0.5 w-full block transition-transform" :class="mobileMenuOpen ? 'rotate-45 translate-y-2' : ''" />
            <span class="bg-current h-0.5 w-full block transition-opacity" :class="mobileMenuOpen ? 'opacity-0' : ''" />
            <span class="bg-current h-0.5 w-full block transition-transform" :class="mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''" />
          </div>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-show="mobileMenuOpen" class="py-4 border-t border-gray-200 dark:border-jetspan-gray md:hidden">
          <NuxtLink
            v-for="item in navigation"
            :key="item.path"
            :to="item.path"
            class="font-medium px-4 py-3 rounded-lg block transition-all duration-200"
            :class="isActive(item.path)
              ? 'text-jetspan-green bg-jetspan-green/10'
              : 'text-jetspan-gray dark:text-gray-300 hover:text-jetspan-green hover:bg-jetspan-green/5'"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </Transition>
    </nav>
  </header>
</template>
