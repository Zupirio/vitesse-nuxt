<script setup lang="ts">
interface SafetyPoint {
  icon: string
  title: string
  desc: string
}

const safetyPoints: SafetyPoint[] = [
  {
    icon: 'i-carbon-certificate-check',
    title: 'Certified Bulk Storage',
    desc: 'All storage vessels inspected and certified to SANS 10087-1 standards.',
  },
  {
    icon: 'i-carbon-pressure',
    title: 'Pressure-Tested Lines',
    desc: 'Every delivery line pressure-tested before commissioning. Zero compromise.',
  },
  {
    icon: 'i-carbon-user-certification',
    title: 'Registered Practitioners',
    desc: 'Installation by qualified, registered gas practitioners only.',
  },
  {
    icon: 'i-carbon-calendar',
    title: 'Regular Inspections',
    desc: 'Scheduled inspection and maintenance — we don\'t wait for problems.',
  },
  {
    icon: 'i-carbon-phone-filled',
    title: 'Emergency Response',
    desc: '24/7 emergency response protocols. Your safety is our first call.',
  },
  {
    icon: 'i-carbon-document-signed',
    title: 'Full Documentation',
    desc: 'Complete compliance documentation for your audits and insurance.',
  },
]
</script>

<template>
  <section class="section-padding bg-jetspan-light dark:bg-jetspan-black">
    <div class="section-container">
      <!-- Heading -->
      <div class="mx-auto mb-16 text-center max-w-3xl">
        <h2 class="section-title">
          Safety Is Not Optional
        </h2>
        <p class="section-subtitle">
          Every Jetspan LPG installation and delivery complies with SANS 10087-1.
        </p>
      </div>

      <!-- Safety Grid -->
      <div class="gap-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <div
          v-for="point in safetyPoints"
          :key="point.title"
          class="group card"
        >
          <!-- Icon Circle -->
          <div class="mb-4 rounded-full bg-jetspan-amber/20 flex h-14 w-14 transition-colors duration-300 items-center justify-center group-hover:bg-jetspan-amber">
            <div
              :class="point.icon"
              class="text-2xl text-jetspan-amber transition-colors duration-300 group-hover:text-black"
            />
          </div>

          <!-- Text -->
          <h3 class="text-lg text-jetspan-black font-bold mb-2 dark:text-white">
            {{ point.title }}
          </h3>
          <p class="text-sm text-jetspan-gray leading-relaxed dark:text-gray-400">
            {{ point.desc }}
          </p>
        </div>
      </div>

      <!-- Trust Badge -->
      <div class="mt-8 px-6 py-4 rounded-lg bg-jetspan-amber/10 flex gap-3 items-center justify-center">
        <div class="i-carbon-security text-2xl text-jetspan-amber" />
        <span class="text-sm text-jetspan-gray font-semibold dark:text-gray-400">LPGSASA Member — LP Gas Safety Association of South Africa</span>
      </div>
    </div>
  </section>
</template>
