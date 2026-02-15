<script setup lang="ts">
import { companyInfo } from '~/constants'

const litres = ref<number>(10000)

const pricePerLitre = 22.50 // placeholder ZAR/l
const bulkDiscount = computed(() => {
  if (litres.value >= 100_000)
    return 0.08
  if (litres.value >= 50_000)
    return 0.05
  if (litres.value >= 20_000)
    return 0.03
  return 0
})

const estimatedSaving = computed(() => {
  return litres.value * pricePerLitre * bulkDiscount.value
})

const formatZAR = (n: number) =>
  new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 }).format(n)

const whatsappLink = computed(() => {
  const msg = `Hi Jetspan, I'd like a bulk diesel quote for ${litres.value.toLocaleString()} litres.`
  return `https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`
})
</script>

<template>
  <section class="section-padding bg-gray-50 dark:bg-jetspan-gray/10">
    <div class="section-container">
      <div class="mx-auto max-w-4xl">
        <div class="text-center mb-10">
          <h2 class="section-title">
            Calculate Your Bulk Diesel Savings
          </h2>
          <p class="section-subtitle">
            Larger orders unlock better pricing — see your estimated savings
          </p>
        </div>

        <div class="card border-2 border-jetspan-yellow/40">
          <div class="gap-8 grid md:grid-cols-2">
            <!-- Input side -->
            <div>
              <label for="litres" class="text-sm font-semibold mb-3 block">
                Monthly Volume (litres)
              </label>
              <input
                id="litres"
                v-model.number="litres"
                type="range"
                min="1000"
                max="500000"
                step="1000"
                class="w-full accent-jetspan-yellow"
              >
              <div class="mt-2 flex justify-between text-sm text-gray-500">
                <span>1,000 L</span>
                <span class="heading-display text-xl text-jetspan-black dark:text-white">
                  {{ litres.toLocaleString() }} L
                </span>
                <span>500,000 L</span>
              </div>

              <div class="mt-6 space-y-3">
                <div class="flex justify-between rounded-lg bg-gray-100 px-4 py-3 dark:bg-jetspan-gray/30">
                  <span class="text-sm text-gray-500">Reference Price</span>
                  <span class="font-semibold">{{ formatZAR(pricePerLitre) }}/L</span>
                </div>
                <div class="flex justify-between rounded-lg bg-gray-100 px-4 py-3 dark:bg-jetspan-gray/30">
                  <span class="text-sm text-gray-500">Bulk Discount</span>
                  <span class="font-semibold text-jetspan-green">{{ (bulkDiscount * 100).toFixed(0) }}%</span>
                </div>
              </div>
            </div>

            <!-- Result side -->
            <div class="flex flex-col items-center justify-center rounded-xl bg-jetspan-yellow/10 p-8 text-center">
              <p class="text-sm text-gray-500 font-medium mb-2">
                Estimated Monthly Saving
              </p>
              <p class="heading-display text-4xl text-jetspan-green mb-4">
                {{ formatZAR(estimatedSaving) }}
              </p>
              <p class="text-xs text-gray-400 mb-6">
                *Indicative only — actual pricing depends on volume, delivery terms and market conditions
              </p>

              <a
                :href="whatsappLink"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-whatsapp inline-flex gap-2 items-center"
              >
                <span class="i-mdi-whatsapp text-lg" />
                Request a Bulk Quote
              </a>
              <NuxtLink to="/contact" class="mt-3 text-sm text-jetspan-blue underline hover:no-underline">
                or fill in our RFQ form
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
