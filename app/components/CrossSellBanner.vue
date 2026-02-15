<script setup lang="ts">
interface Props {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  icon?: string
  variant?: 'diesel-to-solar' | 'solar-to-diesel' | 'gas-to-solar' | 'default'
}

withDefaults(defineProps<Props>(), {
  icon: 'i-carbon-arrow-right',
  variant: 'default',
})

const variantStyles: Record<string, { border: string, iconBg: string, iconColor: string }> = {
  'diesel-to-solar': {
    border: 'border-jetspan-teal/30',
    iconBg: 'bg-jetspan-teal/20',
    iconColor: 'text-jetspan-teal',
  },
  'solar-to-diesel': {
    border: 'border-jetspan-yellow/30',
    iconBg: 'bg-jetspan-yellow/20',
    iconColor: 'text-jetspan-yellow',
  },
  'gas-to-solar': {
    border: 'border-jetspan-teal/30',
    iconBg: 'bg-jetspan-teal/20',
    iconColor: 'text-jetspan-teal',
  },
  'default': {
    border: 'border-jetspan-yellow/30',
    iconBg: 'bg-jetspan-yellow/20',
    iconColor: 'text-jetspan-yellow',
  },
}
</script>

<template>
  <div
    class="group relative overflow-hidden rounded-xl border-2 bg-white p-6 transition-all duration-300 hover:shadow-lg dark:bg-jetspan-gray-dark md:p-8"
    :class="variantStyles[variant].border"
  >
    <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
      <!-- Icon -->
      <div
        class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
        :class="variantStyles[variant].iconBg"
      >
        <div class="i-carbon-solar-panel text-2xl" :class="variantStyles[variant].iconColor" />
      </div>

      <!-- Text -->
      <div class="flex-1">
        <h3 class="mb-1 text-lg font-bold text-jetspan-black dark:text-white">
          {{ title }}
        </h3>
        <p class="text-sm text-jetspan-gray dark:text-gray-400">
          {{ description }}
        </p>
      </div>

      <!-- CTA -->
      <NuxtLink
        :to="ctaLink"
        class="inline-flex flex-shrink-0 items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200"
        :class="`${variantStyles[variant].iconBg} ${variantStyles[variant].iconColor} hover:opacity-80`"
      >
        {{ ctaText }}
        <div :class="icon" />
      </NuxtLink>
    </div>
  </div>
</template>
