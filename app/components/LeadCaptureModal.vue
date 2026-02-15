<script setup lang="ts">
import { companyInfo } from '~/constants'
import { productNames } from '~/constants/products'

const isOpen = ref(false)
const hasShown = ref(false)

const form = ref({
  name: '',
  email: '',
  company: '',
  interest: '',
})

// Auto-show after 30s (once per session)
onMounted(() => {
  if (typeof window !== 'undefined' && !sessionStorage.getItem('leadModalShown')) {
    setTimeout(() => {
      if (!hasShown.value) {
        isOpen.value = true
        hasShown.value = true
        sessionStorage.setItem('leadModalShown', 'true')
      }
    }, 30000)
  }
  else {
    hasShown.value = true
  }
})

function open() {
  isOpen.value = true
}

function close() {
  isOpen.value = false
}

function handleSubmit() {
  const subject = encodeURIComponent(`Energy Cost Guide Request - ${form.value.company || 'New Lead'}`)
  const body = encodeURIComponent(
    `Name: ${form.value.name}\nEmail: ${form.value.email}\nCompany: ${form.value.company}\nInterest: ${form.value.interest}\n\nRequested the Industrial Energy Cost Guide.`,
  )
  window.open(`mailto:${companyInfo.email}?subject=${subject}&body=${body}`, '_blank')
  close()
}

// Expose open method for parent components
defineExpose({ open })
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="close" />

        <!-- Modal -->
        <div class="relative z-10 w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl dark:bg-jetspan-gray-dark">
          <!-- Close button -->
          <button
            class="absolute right-4 top-4 rounded-lg p-2 text-jetspan-gray transition-colors hover:bg-gray-100 dark:hover:bg-jetspan-black"
            @click="close"
          >
            <div class="i-carbon-close text-xl" />
          </button>

          <!-- Header icon -->
          <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-jetspan-yellow/20">
            <div class="i-carbon-calculator text-3xl text-jetspan-yellow" />
          </div>

          <h2 class="mb-2 text-2xl font-bold text-jetspan-black dark:text-white">
            Free Industrial Energy Cost Guide
          </h2>
          <p class="mb-6 text-jetspan-gray dark:text-gray-400">
            Compare diesel, solar, and gas running costs for your operation. Get the numbers that matter.
          </p>

          <form class="space-y-4" @submit.prevent="handleSubmit">
            <div>
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="Your name"
                class="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-jetspan-black transition-colors focus:border-jetspan-yellow focus:outline-none dark:border-jetspan-gray dark:bg-jetspan-black dark:text-white"
              >
            </div>
            <div>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="Email address"
                class="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-jetspan-black transition-colors focus:border-jetspan-yellow focus:outline-none dark:border-jetspan-gray dark:bg-jetspan-black dark:text-white"
              >
            </div>
            <div>
              <input
                v-model="form.company"
                type="text"
                placeholder="Company name (optional)"
                class="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-jetspan-black transition-colors focus:border-jetspan-yellow focus:outline-none dark:border-jetspan-gray dark:bg-jetspan-black dark:text-white"
              >
            </div>
            <div>
              <select
                v-model="form.interest"
                required
                class="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-jetspan-black transition-colors focus:border-jetspan-yellow focus:outline-none dark:border-jetspan-gray dark:bg-jetspan-black dark:text-white"
              >
                <option value="" disabled>
                  Primary energy need
                </option>
                <option v-for="product in productNames" :key="product" :value="product">
                  {{ product }}
                </option>
              </select>
            </div>

            <button type="submit" class="btn w-full text-center">
              <span class="i-carbon-download mr-2 inline-block" />
              Get My Free Guide
            </button>
          </form>

          <p class="mt-4 text-center text-xs text-jetspan-gray dark:text-gray-500">
            No spam. Your data stays between us.
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
