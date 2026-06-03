<script setup lang="ts">
import { companyInfo } from '~/constants'

const props = defineProps<{ price: string, productName?: string }>()

const mailtoHref = computed(() => {
  const subject = encodeURIComponent(`Order enquiry: ${props.productName ?? 'product'}`)
  return `mailto:${companyInfo.email}?subject=${subject}`
})
</script>

<template>
  <div>
    <div class="flex gap-1 items-baseline">
      <span class="text-2xl text-jetspan-black font-bold dark:text-white">{{ price }}</span>
      <a
        :href="mailtoHref"
        class="text-jetspan-green font-bold hover:underline"
        aria-label="How to order this product"
      >*</a>
    </div>
    <p class="text-xs text-jetspan-gray mt-1 dark:text-gray-400">
      *&nbsp;To order,
      <a :href="mailtoHref" class="underline hover:text-jetspan-green">email us</a>
      or <a :href="`tel:${companyInfo.phone}`" class="underline hover:text-jetspan-green">call {{ companyInfo.phone }}</a>.
    </p>
  </div>
</template>
