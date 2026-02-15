<script setup lang="ts">
interface Props {
  title: string
  description: string
  documentUrl: string
  iconClass?: string
  iconColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  iconClass: 'i-carbon-document',
  iconColor: 'text-jetspan-yellow',
})

const showPreview = ref(false)
</script>

<template>
  <div class="mx-auto card max-w-4xl">
    <div class="flex flex-col gap-6 items-center md:flex-row">
      <div class="flex-shrink-0">
        <div class="text-6xl" :class="[iconClass, iconColor]" />
      </div>
      <div class="text-left flex-1">
        <h3 class="text-2xl text-jetspan-black font-bold mb-2 dark:text-white">
          {{ title }}
        </h3>
        <p class="text-jetspan-gray mb-4 dark:text-gray-400">
          {{ description }}
        </p>
        <button
          class="btn inline-flex gap-2 items-center"
          @click="showPreview = !showPreview"
        >
          <span :class="showPreview ? 'i-carbon-chevron-up' : 'i-carbon-view'" />
          {{ showPreview ? 'Hide Preview' : 'Show Preview' }}
        </button>
      </div>
    </div>

    <!-- PDF Preview -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 transform scale-95"
      enter-to-class="opacity-100 transform scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 transform scale-100"
      leave-to-class="opacity-0 transform scale-95"
    >
      <div v-show="showPreview" class="mt-6 pt-6 border-t border-gray-200 dark:border-jetspan-gray">
        <iframe
          :src="documentUrl"
          class="border-2 border-gray-200 rounded-lg w-full dark:border-jetspan-gray"
          style="height: 600px;"
          :title="`${title} Preview`"
        />
      </div>
    </Transition>
  </div>
</template>
