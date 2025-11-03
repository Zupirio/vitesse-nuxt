<script setup lang="ts">
import { companyInfo } from '~/constants'
</script>

<template>
  <section class="flex min-h-[90vh] items-center relative overflow-hidden from-jetspan-black to-jetspan-gray via-jetspan-gray-dark bg-gradient-to-br">
    <!-- Background Pattern -->
    <div class="opacity-10 inset-0 absolute">
      <div class="inset-0 absolute" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;" />
    </div>

    <!-- Content -->
    <div class="section-container relative z-10">
      <div class="max-w-4xl">
        <div class="mb-6 px-4 py-2 rounded-full bg-jetspan-yellow/20 inline-block">
          <span class="text-sm text-jetspan-yellow tracking-wider font-semibold uppercase">
            Premium Energy Solutions
          </span>
        </div>

        <h1 class="text-5xl text-white leading-tight font-bold mb-6 md:text-7xl">
          Powering Industry,
          <span class="text-jetspan-yellow">Fueling Progress</span>
        </h1>

        <p class="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl md:text-2xl">
          {{ companyInfo.description }}
        </p>

        <div class="flex flex-col gap-4 sm:flex-row">
          <NuxtLink to="/products" class="btn text-center">
            Explore Our Products
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-outline text-center">
            Get in Touch
          </NuxtLink>
        </div>

        <!-- Stats -->
        <div class="mt-16 gap-8 grid grid-cols-2 md:grid-cols-4">
          <div class="text-center md:text-left">
            <div class="text-4xl text-jetspan-yellow font-bold mb-2">
              15+
            </div>
            <div class="text-sm text-gray-400">
              Years Experience
            </div>
          </div>
          <div class="text-center md:text-left">
            <div class="text-4xl text-jetspan-yellow font-bold mb-2">
              500+
            </div>
            <div class="text-sm text-gray-400">
              Industrial Clients
            </div>
          </div>
          <div class="text-center md:text-left">
            <div class="text-4xl text-jetspan-yellow font-bold mb-2">
              24/7
            </div>
            <div class="text-sm text-gray-400">
              Support Available
            </div>
          </div>
          <div class="text-center md:text-left">
            <div class="text-4xl text-jetspan-yellow font-bold mb-2">
              100%
            </div>
            <div class="text-sm text-gray-400">
              Quality Assured
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="rounded-full bg-jetspan-yellow/10 h-1/3 w-1/3 bottom-0 right-0 absolute blur-3xl" />
    <div class="rounded-full bg-jetspan-green/10 h-1/4 w-1/4 right-1/4 top-1/4 absolute blur-3xl" />
  </section>
</template>
