<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: 'Industrial LPG Gas Supply | Jetspan — Bulk Gas for South African Industry',
  description: 'Bulk LPG supply for industry, hospitality, and agriculture. SANS 10087-compliant installations, scheduled delivery, and 24/7 emergency response across Gauteng.',
})

const stats = [
  { value: '90%+', label: 'Boiler Efficiency' },
  { value: 'Zero', label: 'Indoor Emissions' },
  { value: '24/7', label: 'Supply Available' },
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <SectionHero
      title="Instant Heat. Cleaner Energy."
      subtitle="Bulk LPG supply for industry, hospitality, and agriculture."
      badge="SANS 10087 Compliant"
      badge-icon="i-carbon-flame"
      bg-image="/assets/hero/pexels-gas-32399133.jpg"
    >
      <template #actions>
        <div class="flex flex-col gap-4 sm:flex-row">
          <NuxtLink to="/contact" class="btn text-center inline-flex gap-2 items-center justify-center">
            <span class="i-carbon-send-alt" />
            Request LPG Pricing
          </NuxtLink>
          <a href="#applications" class="btn-outline text-center">
            See Applications
          </a>
        </div>
      </template>
    </SectionHero>

    <!-- What is LPG? -->
    <section class="section-padding bg-white dark:bg-jetspan-black">
      <div class="section-container">
        <div class="mx-auto text-center max-w-4xl">
          <h2 class="section-title">
            Cleaner Fuel. Smarter Operations.
          </h2>
          <p class="text-lg text-jetspan-gray leading-relaxed mx-auto mt-6 max-w-3xl dark:text-gray-400">
            Liquefied Petroleum Gas is a clean-burning, portable fuel used across South African industry.
            It heats faster than electricity, burns cleaner than diesel, and stores safely in bulk.
            Jetspan supplies commercial and industrial LPG in bulk quantities with scheduled delivery or on-demand top-ups.
          </p>

          <!-- Stat Cards -->
          <div class="mx-auto mt-12 gap-6 grid grid-cols-1 max-w-2xl sm:grid-cols-3">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="px-6 py-5 rounded-xl bg-jetspan-light dark:bg-jetspan-gray-dark"
            >
              <div class="text-3xl text-jetspan-amber font-bold">
                {{ stat.value }}
              </div>
              <div class="text-sm text-jetspan-gray font-medium mt-1 dark:text-gray-400">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Safety Compliance -->
    <LazyGasSafetyCompliance />

    <!-- Application Grid -->
    <div id="applications">
      <LazyGasApplicationGrid />
    </div>

    <!-- Cross-sell Banner -->
    <section class="section-padding bg-white dark:bg-jetspan-black">
      <div class="section-container">
        <CrossSellBanner
          title="Pair gas heating with solar power generation"
          description="Maximum efficiency — gas for heat, solar for electricity. Let us design your hybrid energy system."
          cta-text="Explore Solar"
          cta-link="/solar-solutions"
          variant="gas-to-solar"
        />
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding relative overflow-hidden from-jetspan-black to-jetspan-gray bg-gradient-to-br">
      <!-- Background Pattern -->
      <div class="opacity-10 inset-0 absolute">
        <div
          class="inset-0 absolute"
          style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"
        />
      </div>

      <div class="section-container relative z-10">
        <div class="mx-auto text-center max-w-4xl">
          <h2 class="text-4xl text-white font-bold mb-6 md:text-5xl">
            Ready to Switch to Cleaner Energy?
          </h2>
          <p class="text-xl text-gray-300 mb-8">
            Get bulk LPG pricing for your operation — delivery across Gauteng and beyond.
          </p>
          <div class="flex flex-col gap-4 justify-center sm:flex-row">
            <NuxtLink to="/contact" class="btn text-center inline-flex gap-2 items-center justify-center">
              <span class="i-carbon-send-alt" />
              Request LPG Pricing
            </NuxtLink>
            <NuxtLink to="/products" class="btn-outline text-center">
              Explore All Products
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Decorative blurs -->
      <div class="rounded-full bg-jetspan-amber/10 h-1/3 w-1/3 bottom-0 right-0 absolute blur-3xl" />
      <div class="rounded-full bg-jetspan-teal/10 h-1/4 w-1/4 right-1/4 top-1/4 absolute blur-3xl" />
    </section>
  </div>
</template>
