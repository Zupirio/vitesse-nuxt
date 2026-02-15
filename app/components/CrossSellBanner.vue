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
    class="group p-6 border-2 rounded-xl bg-white transition-all duration-300 relative overflow-hidden md:p-8 dark:bg-jetspan-gray-dark hover:shadow-lg"
    :class="variantStyles[variant].border"
  >
    <div class="flex flex-col gap-4 items-start sm:flex-row sm:items-center">
      <!-- Icon -->
      <div
        class="rounded-full flex flex-shrink-0 h-14 w-14 transition-transform duration-300 items-center justify-center group-hover:scale-110"
        :class="variantStyles[variant].iconBg"
      >
        <div class="i-carbon-solar-panel text-2xl" :class="variantStyles[variant].iconColor" />
      </div>

      <!-- Text -->
      <div class="flex-1">
        <h3 class="text-lg text-jetspan-black font-bold mb-1 dark:text-white">
          {{ title }}
        </h3>
        <p class="text-sm text-jetspan-gray dark:text-gray-400">
          {{ description }}
        </p>
      </div>

      <!-- CTA -->
      <NuxtLink
        :to="ctaLink"
        class="text-sm font-semibold px-5 py-2.5 rounded-lg inline-flex flex-shrink-0 gap-2 transition-all duration-200 items-center"
        :class="`${variantStyles[variant].iconBg} ${variantStyles[variant].iconColor} hover:opacity-80`"
      >
        {{ ctaText }}
        <div :class="icon" />
      </NuxtLink>
    </div>
  </div>
</template>
