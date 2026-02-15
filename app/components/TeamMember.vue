<script setup lang="ts">
import type { TeamMember } from '~/constants/team'

const props = defineProps<{
  member: TeamMember
}>()

const hasImage = computed(() => !!props.member.image)

// Generate initials for the placeholder
const initials = computed(() => {
  const names = props.member.name.split(' ').filter(n => n.length > 0)
  if (names.length >= 2) {
    const first = names[0]?.[0] ?? ''
    const last = names[names.length - 1]?.[0] ?? ''
    return `${first}${last}`.toUpperCase()
  }
  return (names[0]?.substring(0, 2) ?? '??').toUpperCase()
})
</script>

<template>
  <div class="group card text-center transition-transform overflow-hidden !p-0 hover:scale-[1.02]">
    <!-- Profile Image or Placeholder -->
    <div class="bg-jetspan-light w-full aspect-[3/4] relative overflow-hidden dark:bg-jetspan-gray">
      <NuxtImg
        v-if="hasImage"
        :src="member.image!"
        :alt="`${member.name} - ${member.role}`"
        class="h-full w-full object-cover object-top"
        loading="lazy"
        width="300"
        height="400"
      />
      <!-- Placeholder with initials -->
      <div
        v-else
        class="flex h-full w-full items-center justify-center from-jetspan-yellow/20 to-jetspan-green/20 bg-gradient-to-br"
      >
        <span class="text-5xl text-jetspan-gray font-bold dark:text-gray-300">
          {{ initials }}
        </span>
      </div>
      <!-- Decorative overlay on hover -->
      <div class="bg-jetspan-yellow/0 transition-colors inset-0 absolute group-hover:bg-jetspan-yellow/10" />
    </div>

    <!-- Content -->
    <div class="p-6">
      <!-- Name -->
      <h3 class="text-xl text-jetspan-black font-bold mb-1 dark:text-white">
        {{ member.name }}
      </h3>

      <!-- Role -->
      <p class="text-sm text-jetspan-yellow font-semibold mb-3">
        {{ member.role }}
      </p>

      <!-- Bio -->
      <p class="text-m text-jetspan-gray leading-relaxed dark:text-gray-400">
        {{ member.bio }}
      </p>
    </div>
  </div>
</template>
