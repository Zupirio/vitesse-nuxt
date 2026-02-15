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
      <div class="inset-0 absolute">
        <NuxtImg
          :src="bgImage"
          :alt="title"
          class="h-full w-full inset-0 absolute object-cover"
          loading="eager"
        />
      </div>
      <div class="hero-overlay" />
    </template>
    <!-- Gradient fallback (no image) -->
    <template v-else>
      <div class="hero-gradient inset-0 absolute" />
      <!-- Dot pattern -->
      <div class="opacity-10 inset-0 absolute">
        <div
          class="inset-0 absolute"
          style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"
        />
      </div>
    </template>

    <!-- Content -->
    <div class="section-container relative z-10">
      <div class="max-w-4xl" :class="{ 'mx-auto text-center': !$slots.default }">
        <!-- Badge -->
        <div v-if="badge" class="mb-6 px-4 py-2 rounded-full bg-jetspan-yellow/20 inline-flex gap-2 items-center">
          <span v-if="badgeIcon" :class="badgeIcon" class="text-jetspan-yellow" />
          <span class="text-sm text-jetspan-yellow tracking-wider font-semibold uppercase">
            {{ badge }}
          </span>
        </div>

        <!-- Title -->
        <h1 class="heading-display text-5xl text-white leading-tight font-bold mb-6 lg:text-7xl md:text-6xl">
          <slot name="title">
            {{ title }}
          </slot>
        </h1>

        <!-- Subtitle -->
        <p v-if="subtitle" class="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl md:text-2xl">
          {{ subtitle }}
        </p>

        <!-- CTA Slot -->
        <slot name="actions" />
      </div>

      <!-- Default slot for extra content below heading (e.g., stats) -->
      <slot />
    </div>

    <!-- Decorative blurs -->
    <div class="rounded-full bg-jetspan-yellow/10 h-1/3 w-1/3 bottom-0 right-0 absolute blur-3xl" />
    <div class="rounded-full bg-jetspan-green/10 h-1/4 w-1/4 right-1/4 top-1/4 absolute blur-3xl" />
  </section>
</template>
