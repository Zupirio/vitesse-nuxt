<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  badge?: string
  badgeIcon?: string
  bgImage?: string
  compact?: boolean
}

withDefaults(defineProps<Props>(), {
  subtitle: undefined,
  badge: undefined,
  badgeIcon: undefined,
  bgImage: undefined,
  compact: false,
})
</script>

<template>
  <section
    class="relative overflow-hidden"
    :class="compact ? 'section-padding' : 'flex min-h-[60vh] items-center py-24'"
  >
    <!-- Background Image (when provided) -->
    <template v-if="bgImage">
      <div class="absolute inset-0">
        <NuxtImg
          :src="bgImage"
          :alt="title"
          class="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
      </div>
      <div class="hero-overlay" />
    </template>
    <!-- Gradient fallback (no image) -->
    <template v-else>
      <div class="absolute inset-0 hero-gradient" />
      <!-- Dot pattern -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute inset-0"
          style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"
        />
      </div>
    </template>

    <!-- Content -->
    <div class="section-container relative z-10">
      <div class="max-w-4xl" :class="{ 'mx-auto text-center': !$slots.default }">
        <!-- Badge -->
        <div v-if="badge" class="mb-6 inline-flex items-center gap-2 rounded-full bg-jetspan-yellow/20 px-4 py-2">
          <span v-if="badgeIcon" :class="badgeIcon" class="text-jetspan-yellow" />
          <span class="text-sm font-semibold uppercase tracking-wider text-jetspan-yellow">
            {{ badge }}
          </span>
        </div>

        <!-- Title -->
        <h1 class="heading-display mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
          <slot name="title">
            {{ title }}
          </slot>
        </h1>

        <!-- Subtitle -->
        <p v-if="subtitle" class="mb-8 max-w-2xl text-xl leading-relaxed text-gray-300 md:text-2xl">
          {{ subtitle }}
        </p>

        <!-- CTA Slot -->
        <slot name="actions" />
      </div>

      <!-- Default slot for extra content below heading (e.g., stats) -->
      <slot />
    </div>

    <!-- Decorative blurs -->
    <div class="absolute bottom-0 right-0 h-1/3 w-1/3 rounded-full bg-jetspan-yellow/10 blur-3xl" />
    <div class="absolute right-1/4 top-1/4 h-1/4 w-1/4 rounded-full bg-jetspan-green/10 blur-3xl" />
  </section>
</template>
