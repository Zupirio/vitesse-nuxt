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
      <div v-if="isOpen" class="p-4 flex items-center inset-0 justify-center fixed z-[100]">
        <!-- Backdrop -->
        <div class="bg-black/60 inset-0 absolute backdrop-blur-sm" @click="close" />

        <!-- Modal -->
        <div class="p-8 rounded-2xl bg-white max-w-lg w-full shadow-2xl relative z-10 dark:bg-jetspan-gray-dark">
          <!-- Close button -->
          <button
            class="text-jetspan-gray p-2 rounded-lg transition-colors right-4 top-4 absolute hover:bg-gray-100 dark:hover:bg-jetspan-black"
            @click="close"
          >
            <div class="i-carbon-close text-xl" />
          </button>

          <!-- Header icon -->
          <div class="mb-4 rounded-full bg-jetspan-yellow/20 flex h-16 w-16 items-center justify-center">
            <div class="i-carbon-calculator text-3xl text-jetspan-yellow" />
          </div>

          <h2 class="text-2xl text-jetspan-black font-bold mb-2 dark:text-white">
            Free Industrial Energy Cost Guide
          </h2>
          <p class="text-jetspan-gray mb-6 dark:text-gray-400">
            Compare diesel, solar, and gas running costs for your operation. Get the numbers that matter.
          </p>

          <form class="space-y-4" @submit.prevent="handleSubmit">
            <div>
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="Your name"
                class="text-jetspan-black px-4 py-3 border-2 border-gray-300 rounded-lg bg-white w-full transition-colors dark:text-white focus:outline-none dark:border-jetspan-gray focus:border-jetspan-yellow dark:bg-jetspan-black"
              >
            </div>
            <div>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="Email address"
                class="text-jetspan-black px-4 py-3 border-2 border-gray-300 rounded-lg bg-white w-full transition-colors dark:text-white focus:outline-none dark:border-jetspan-gray focus:border-jetspan-yellow dark:bg-jetspan-black"
              >
            </div>
            <div>
              <input
                v-model="form.company"
                type="text"
                placeholder="Company name (optional)"
                class="text-jetspan-black px-4 py-3 border-2 border-gray-300 rounded-lg bg-white w-full transition-colors dark:text-white focus:outline-none dark:border-jetspan-gray focus:border-jetspan-yellow dark:bg-jetspan-black"
              >
            </div>
            <div>
              <select
                v-model="form.interest"
                required
                class="text-jetspan-black px-4 py-3 border-2 border-gray-300 rounded-lg bg-white w-full transition-colors dark:text-white focus:outline-none dark:border-jetspan-gray focus:border-jetspan-yellow dark:bg-jetspan-black"
              >
                <option value="" disabled>
                  Primary energy need
                </option>
                <option v-for="product in productNames" :key="product" :value="product">
                  {{ product }}
                </option>
              </select>
            </div>

            <button type="submit" class="btn text-center w-full">
              <span class="i-carbon-download mr-2 inline-block" />
              Get My Free Guide
            </button>
          </form>

          <p class="text-xs text-jetspan-gray mt-4 text-center dark:text-gray-500">
            No spam. Your data stays between us.
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
