<script setup lang="ts">
interface Application {
  icon: string
  title: string
  desc: string
}

const applications: Application[] = [
  {
    icon: 'i-carbon-delivery-truck',
    title: 'Forklifts & Material Handling',
    desc: 'LPG forklifts are the standard for indoor warehouses — zero emissions, instant refuelling, and lower operating costs than electric. Clean-burning fuel means no ventilation headaches.',
  },
  {
    icon: 'i-carbon-restaurant',
    title: 'Hospitality & Commercial Kitchens',
    desc: 'From hotel kitchens to fast-food chains, LPG delivers instant, controllable heat that chefs rely on. No load shedding risk. No waiting for elements to warm up.',
  },
  {
    icon: 'i-carbon-industry',
    title: 'Industrial Boilers & Heating',
    desc: 'Manufacturing processes that need consistent, high-temperature heat. LPG boilers offer 90%+ efficiency with lower carbon output than coal or HFO.',
  },
]
</script>

<template>
  <section class="section-padding bg-white dark:bg-jetspan-gray-dark">
    <div class="section-container">
      <!-- Heading -->
      <div class="mx-auto mb-16 text-center max-w-3xl">
        <h2 class="section-title">
          Who Needs LPG?
        </h2>
        <p class="section-subtitle">
          From warehouses to kitchens to factory floors.
        </p>
      </div>

      <!-- Application Cards -->
      <div class="gap-8 grid grid-cols-1 md:grid-cols-3">
        <div
          v-for="app in applications"
          :key="app.title"
          class="group card"
        >
          <!-- Icon Circle -->
          <div class="mb-6 rounded-full bg-jetspan-amber/20 flex h-16 w-16 transition-transform duration-300 items-center justify-center group-hover:scale-110">
            <div
              :class="app.icon"
              class="text-2xl text-jetspan-amber"
            />
          </div>

          <!-- Text -->
          <h3 class="text-xl text-jetspan-black font-bold mb-3 dark:text-white">
            {{ app.title }}
          </h3>
          <p class="text-base text-jetspan-gray leading-relaxed dark:text-gray-400">
            {{ app.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
