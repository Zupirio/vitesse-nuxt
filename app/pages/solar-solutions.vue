<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: 'Solar Solutions | Jetspan — Commercial & Industrial Solar Systems',
  description: 'Commercial and industrial solar systems designed for South African conditions. Load shedding sorted with Sunsynk and Victron inverters, lithium storage, and proven ROI.',
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <SectionHero
      title="Power That Pays for Itself"
      subtitle="Commercial and industrial solar systems designed for South African conditions."
      badge="Load Shedding? Sorted."
      badge-icon="i-carbon-solar-panel"
      bg-image="/assets/hero/pexels-solar-6961215.jpg"
    >
      <template #actions>
        <div class="flex flex-col gap-4 sm:flex-row">
          <NuxtLink to="/contact" class="btn text-center inline-flex gap-2 items-center justify-center">
            <span class="i-carbon-send-alt" />
            Get a Solar Quote
          </NuxtLink>
          <a href="#specs" class="btn-outline text-center">
            See the Specs
          </a>
        </div>
      </template>
    </SectionHero>

    <!-- Solar Jargon Decoder -->
    <LazySolarLingoDecoder />

    <!-- Case Study -->
    <LazySolarCaseStudy />

    <!-- System Specifications -->
    <LazySolarSpecsTable />

    <!-- Cross-sell Banner -->
    <section class="section-padding bg-white dark:bg-jetspan-black">
      <div class="section-container">
        <CrossSellBanner
          title="Need diesel backup for those 3-day storm windows?"
          description="We supply EN590 too — reliable fuel for when the grid and sun can't keep up."
          cta-text="View Diesel"
          cta-link="/en590-diesel"
          variant="solar-to-diesel"
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
            Ready to Cut Your Energy Costs?
          </h2>
          <p class="text-xl text-gray-300 mb-8">
            Get a free solar assessment for your site — no obligation, real numbers.
          </p>
          <NuxtLink to="/contact" class="btn text-center inline-flex gap-2 items-center">
            <span class="i-carbon-solar-panel" />
            Request a Solar Assessment
          </NuxtLink>
        </div>
      </div>

      <!-- Decorative blur -->
      <div class="bg-jetspan-teal/10 rounded-full h-1/3 w-1/3 bottom-0 left-0 absolute blur-3xl" />
    </section>
  </div>
</template>
