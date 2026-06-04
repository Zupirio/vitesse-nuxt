<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: 'Fertilizer Markets | Jetspan',
  description: 'Jetspan facilitates structured access to global fertilizer markets — including Urea, NPK, DAP, Ammonia, and Phosphate — for verified buyers and sellers across Africa and international supply chains.',
})

// Per-item accent colours, mapped to the Jetspan brand palette.
// All classes here are safelisted in uno.config.ts (dynamic :class bindings).
const colorMap = {
  yellow: { bg: 'bg-jetspan-yellow/10', text: 'text-jetspan-yellow', solid: 'bg-jetspan-yellow' },
  green: { bg: 'bg-jetspan-green/10', text: 'text-jetspan-green', solid: 'bg-jetspan-green' },
  blue: { bg: 'bg-jetspan-blue/10', text: 'text-jetspan-blue', solid: 'bg-jetspan-blue' },
  teal: { bg: 'bg-jetspan-teal/10', text: 'text-jetspan-teal', solid: 'bg-jetspan-teal' },
  amber: { bg: 'bg-jetspan-amber/10', text: 'text-jetspan-amber', solid: 'bg-jetspan-amber' },
  orange: { bg: 'bg-jetspan-orange/10', text: 'text-jetspan-orange', solid: 'bg-jetspan-orange' },
} as const
type ColorKey = keyof typeof colorMap

interface IconItem {
  icon: string
  color: ColorKey
}

// Section 2 — Products we facilitate (distinct, relevant icon + accent per product)
interface ProductItem extends IconItem { name: string, note: string }
const products: ProductItem[] = [
  { name: 'Urea', note: 'Granular & prilled — the high-nitrogen staple for broad-acre crops.', icon: 'i-carbon-chemistry', color: 'blue' },
  { name: 'NPK Fertilizer', note: 'Balanced nitrogen-phosphorus-potassium blends across multiple grades.', icon: 'i-carbon-crop-growth', color: 'green' },
  { name: 'DAP', note: 'Diammonium Phosphate — phosphate-rich starter nutrition.', icon: 'i-carbon-chemistry-reference', color: 'orange' },
  { name: 'MAP', note: 'Monoammonium Phosphate — efficient phosphorus for early growth.', icon: 'i-carbon-soil-moisture', color: 'amber' },
  { name: 'Ammonia', note: 'Anhydrous & aqueous — direct nitrogen and chemical feedstock.', icon: 'i-carbon-smoke', color: 'teal' },
  { name: 'Potash', note: 'MOP & SOP — potassium for yield, quality and stress tolerance.', icon: 'i-carbon-soil-temperature', color: 'orange' },
  { name: 'Phosphate Products', note: 'Rock and processed phosphates for blending and production.', icon: 'i-carbon-cube', color: 'blue' },
  { name: 'Ammonium Sulphate', note: 'Nitrogen plus sulphur for soils that need both nutrients.', icon: 'i-carbon-test-tool', color: 'yellow' },
  { name: 'UAN Solution', note: 'Urea Ammonium Nitrate — liquid nitrogen for fertigation and spraying.', icon: 'i-carbon-rain-drop', color: 'teal' },
  { name: 'Calcium Ammonium Nitrate', note: 'CAN — gentle, fast-acting field nitrogen with calcium.', icon: 'i-carbon-sprout', color: 'green' },
  { name: 'Bulk Agricultural Inputs', note: 'Complementary commodity inputs for large-scale procurement.', icon: 'i-carbon-delivery', color: 'amber' },
]

// Section 4 — Engagement requirements
const buyerReqs = [
  'Proof of funds or confirmed banking capability',
  'Company profile & KYC documentation',
  'Defined product, target volume, and destination market',
  'Clear purchasing mandate & transaction readiness',
  'Confirmed import/logistics capability (port, clearing agent)',
]
const sellerReqs = [
  'Authority to sell or formal right to represent available product',
  'Full product specification sheet (grade, nutrient analysis, origin)',
  'Indicative availability & lead time',
  'Delivery capability (CIF / FOB / CFR)',
  'Supporting quality & compliance documentation',
  'Commercial terms, pricing basis & verifiable supply-chain references',
]

// Section 5 — Who we work with
interface PartnerItem extends IconItem { label: string }
const partners: PartnerItem[] = [
  { icon: 'i-carbon-industry', label: 'Fertilizer producers & chemical plants', color: 'blue' },
  { icon: 'i-carbon-license', label: 'Authorised mandates & licensed representatives', color: 'teal' },
  { icon: 'i-carbon-building', label: 'National & institutional procurement bodies', color: 'amber' },
  { icon: 'i-carbon-chart-line', label: 'Commodity trading houses & distributors', color: 'orange' },
  { icon: 'i-carbon-delivery-truck', label: 'Bulk importers & clearing agents', color: 'green' },
  { icon: 'i-carbon-collaborate', label: 'Agricultural co-operatives & procurement groups', color: 'teal' },
  { icon: 'i-carbon-harbor', label: 'Port logistics & warehousing operators', color: 'blue' },
  { icon: 'i-carbon-enterprise', label: 'Government & development-sector buyers', color: 'amber' },
]

// Section 7 — Market considerations
interface ConsiderationItem { text: string, color: ColorKey }
const considerations: ConsiderationItem[] = [
  { text: 'Seasonal agricultural demand and crop cycles', color: 'green' },
  { text: 'Natural gas and sulphur feedstock costs', color: 'green' },
  { text: 'Export controls and producer-country trade policy', color: 'green' },
  { text: 'Port access, vessel availability, and bulk shipping constraints', color: 'green' },
  { text: 'Currency volatility — particularly ZAR vs USD', color: 'green' },
  { text: 'Product specification and nutrient composition requirements', color: 'green' },
  { text: 'Regional food security and government procurement priorities', color: 'green' },
  { text: 'Regional import regulations and phytosanitary compliance', color: 'green' },
]

// Section 8 — Frequently asked questions
const faqs = [
  {
    q: 'What fertilizer products does Jetspan facilitate?',
    a: 'Jetspan supports transactions across urea, NPK, DAP, MAP, ammonia, potash, phosphate products, ammonium sulphate, UAN, CAN, and related bulk agricultural inputs within structured international trade frameworks.',
  },
  {
    q: 'Who does Jetspan engage with in fertilizer markets?',
    a: 'Engagement is open to verified buyers, authorised sellers, licensed mandates, commodity distributors, agricultural co-operatives, and institutional procurement bodies with clear commercial intent and demonstrable transaction capability.',
  },
  {
    q: 'What documentation is required to progress a transaction?',
    a: 'Progress depends on counterparty verification, product alignment, commercial clarity, and supporting documentation — including proof of funds or supply authority, KYC compliance, product specifications, and confirmed logistics capability.',
  },
  {
    q: 'Do you work with mandates and intermediaries?',
    a: 'Yes, where authority is clear, verifiable, and commercially legitimate. Unverified intermediaries and non-performing mandates are not considered.',
  },
  {
    q: 'Are transactions structured in line with international standards?',
    a: 'Yes. All transactions are approached with alignment on product specifications, delivery terms, inspection procedures, documentation, and recognised international trade practices including Incoterms 2020 where applicable.',
  },
  {
    q: 'What regions does Jetspan serve for fertilizer supply?',
    a: 'Jetspan supports buyers and sellers operating across East, West, and Southern Africa, and the broader continent, with international counterparty engagement on a case-by-case basis.',
  },
]

// Section 10 — Other markets (each card carries its own brand colour)
interface MarketItem extends IconItem { title: string, desc: string, to: string }
const otherMarkets: MarketItem[] = [
  { icon: 'i-carbon-gas-station', title: 'EN590 Diesel', desc: 'Verified ultra-low-sulphur diesel trading under Incoterms 2020.', to: '/en590-diesel', color: 'yellow' },
  { icon: 'i-carbon-solar-panel', title: 'Solar Solutions', desc: 'Commercial & industrial solar, storage and microgrid systems.', to: '/solar-solutions', color: 'teal' },
  { icon: 'i-carbon-fire', title: 'Gas (LPG)', desc: 'Bulk LPG supply for industry, hospitality and agriculture.', to: '/gas-lpg', color: 'amber' },
]

// FAQ accordion state
const openFaq = ref<number | null>(0)
function toggleFaq(i: number) {
  openFaq.value = openFaq.value === i ? null : i
}
</script>

<template>
  <div class="min-h-screen">
    <!-- 1. Hero -->
    <SectionHero
      title="Fertilizer Markets"
      subtitle="Structured access to global fertilizer supply — connecting verified buyers, producers, and distributors across Africa and international markets."
      badge="Global Supply"
      badge-icon="i-carbon-crop-growth"
      bg-image="/assets/hero/fertilizer-farmland.jpg"
      bg-image-position="object-center"
    >
      <template #actions>
        <div class="flex flex-col gap-4 sm:flex-row">
          <NuxtLink to="/contact" class="btn text-center inline-flex gap-2 items-center justify-center">
            <span class="i-carbon-send-alt" />
            Submit an Enquiry
          </NuxtLink>
        </div>
      </template>
    </SectionHero>

    <!-- 2. Products We Facilitate -->
    <section class="section-padding bg-white dark:bg-jetspan-black">
      <div class="section-container">
        <div class="mx-auto mb-16 text-center max-w-3xl">
          <h2 class="section-title">
            Products We Facilitate
          </h2>
          <p class="section-subtitle mt-4">
            Jetspan supports transactions across key fertilizer products essential to agricultural production, crop planning, and food supply across Africa and beyond.
          </p>
        </div>

        <div class="gap-6 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
          <div
            v-for="product in products"
            :key="product.name"
            class="group card"
          >
            <div
              class="mb-4 rounded-lg flex h-12 w-12 transition-transform duration-300 items-center justify-center group-hover:scale-110"
              :class="colorMap[product.color].bg"
            >
              <div class="text-2xl" :class="[product.icon, colorMap[product.color].text]" />
            </div>
            <h3 class="text-lg text-jetspan-black font-bold mb-2 dark:text-white">
              {{ product.name }}
            </h3>
            <p class="text-m text-jetspan-gray leading-relaxed dark:text-gray-400">
              {{ product.note }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Market Overview -->
    <section class="section-padding bg-jetspan-light dark:bg-jetspan-gray-dark">
      <div class="section-container">
        <div class="mx-auto max-w-4xl">
          <div class="mb-10 text-center">
            <h2 class="section-title">
              Market Overview
            </h2>
          </div>
          <div class="text-lg text-jetspan-gray leading-relaxed space-y-6 dark:text-gray-400">
            <p>
              Global fertilizer markets play a critical role in agricultural production, crop planning, and long-term food security. Pricing and availability are shaped by seasonal agricultural demand, feedstock costs — particularly natural gas and sulphur — export controls, shipping logistics, and regional procurement requirements.
            </p>
            <p>
              Africa represents one of the world's most significant growth markets for fertilizer consumption, driven by rising food demand, soil depletion, and the ongoing expansion of commercial agriculture. Markets across East, West, and Southern Africa — from Tanzania and Kenya to Nigeria and beyond — rely heavily on imported fertilizer supply, creating sustained demand for structured procurement channels.
            </p>
            <p>
              Successful fertilizer transactions require alignment between product availability, technical specification, shipment timing, logistics planning, port access, and commercial structure. Access alone is not sufficient — execution depends on verified counterparties, clear documentation, and disciplined commercial readiness.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Engagement Requirements -->
    <section class="section-padding bg-white dark:bg-jetspan-black">
      <div class="section-container">
        <div class="mx-auto mb-16 text-center max-w-3xl">
          <h2 class="section-title">
            Engagement Requirements
          </h2>
          <p class="section-subtitle mt-4">
            What we need from each side before a transaction can progress.
          </p>
        </div>

        <div class="mx-auto gap-8 grid max-w-5xl md:grid-cols-2">
          <!-- Buyers -->
          <div class="card">
            <div class="mb-6 flex gap-3 items-center">
              <div class="rounded-full bg-jetspan-blue/10 flex flex-shrink-0 h-12 w-12 items-center justify-center">
                <span class="i-carbon-money text-2xl text-jetspan-blue" />
              </div>
              <h3 class="heading-display text-2xl text-jetspan-black dark:text-white">
                Buyers
              </h3>
            </div>
            <ul class="space-y-3">
              <li
                v-for="req in buyerReqs"
                :key="req"
                class="text-jetspan-gray flex gap-3 items-start dark:text-gray-400"
              >
                <span class="i-carbon-checkmark-filled text-jetspan-blue mt-1 flex-shrink-0" />
                <span>{{ req }}</span>
              </li>
            </ul>
          </div>

          <!-- Sellers -->
          <div class="card">
            <div class="mb-6 flex gap-3 items-center">
              <div class="rounded-full bg-jetspan-teal/10 flex flex-shrink-0 h-12 w-12 items-center justify-center">
                <span class="i-carbon-delivery text-2xl text-jetspan-teal" />
              </div>
              <h3 class="heading-display text-2xl text-jetspan-black dark:text-white">
                Sellers
              </h3>
            </div>
            <ul class="space-y-3">
              <li
                v-for="req in sellerReqs"
                :key="req"
                class="text-jetspan-gray flex gap-3 items-start dark:text-gray-400"
              >
                <span class="i-carbon-checkmark-filled text-jetspan-teal mt-1 flex-shrink-0" />
                <span>{{ req }}</span>
              </li>
            </ul>
          </div>
        </div>

        <p class="text-sm text-jetspan-gray mx-auto mt-8 text-center max-w-5xl dark:text-gray-400">
          All engagements are subject to counterparty verification prior to progression.
        </p>
      </div>
    </section>

    <!-- 5. Who We Work With -->
    <section class="section-padding bg-jetspan-light dark:bg-jetspan-gray-dark">
      <div class="section-container">
        <div class="mx-auto mb-16 text-center max-w-3xl">
          <h2 class="section-title">
            Who We Work With
          </h2>
          <p class="section-subtitle mt-4">
            Verified counterparties from across the fertilizer value chain.
          </p>
        </div>

        <div class="gap-6 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2">
          <div
            v-for="partner in partners"
            :key="partner.label"
            class="group card text-center"
          >
            <div
              class="mx-auto mb-4 rounded-full flex h-16 w-16 transition-transform duration-300 items-center justify-center group-hover:scale-110"
              :class="colorMap[partner.color].bg"
            >
              <div class="text-2xl" :class="[partner.icon, colorMap[partner.color].text]" />
            </div>
            <h3 class="text-base text-jetspan-black font-semibold dark:text-white">
              {{ partner.label }}
            </h3>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. How Transactions Are Structured -->
    <section class="section-padding bg-white dark:bg-jetspan-black">
      <div class="section-container">
        <div class="mx-auto max-w-4xl">
          <div class="mb-10 text-center">
            <h2 class="section-title">
              How Transactions Are Structured
            </h2>
          </div>
          <div class="text-lg text-jetspan-gray leading-relaxed space-y-6 dark:text-gray-400">
            <p>
              Fertilizer transactions facilitated by Jetspan are structured in accordance with recognised international trade practices, including Incoterms 2020. Transactions involve clear agreement on product grade and nutrient composition, volume, packaging or bulk terms, delivery conditions, inspection procedures, documentation, and payment instruments.
            </p>
            <p>
              Counterparty verification and due diligence are conducted prior to progression to confirm commercial credibility, operational capability, and transaction integrity. This reduces execution risk and supports structured deal flow across seasonal and bulk agricultural markets.
            </p>
          </div>

          <div class="mt-8 p-6 border-l-4 border-jetspan-amber rounded-r-xl bg-jetspan-amber/10">
            <div class="flex gap-4 items-start">
              <span class="i-carbon-time text-2xl text-jetspan-amber mt-0.5 flex-shrink-0" />
              <p class="text-jetspan-black dark:text-gray-200">
                <strong>In fertilizer markets, timing matters.</strong> Planting windows, agricultural cycles, and regional procurement schedules shape the urgency and operational structure of transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Market Considerations -->
    <section class="section-padding bg-jetspan-light dark:bg-jetspan-gray-dark">
      <div class="section-container">
        <div class="mx-auto mb-12 text-center max-w-3xl">
          <h2 class="section-title">
            Market Considerations
          </h2>
          <p class="section-subtitle mt-4">
            Fertilizer markets operate within a dynamic environment influenced by:
          </p>
        </div>

        <div class="mx-auto gap-x-8 gap-y-4 grid max-w-4xl sm:grid-cols-2">
          <div
            v-for="item in considerations"
            :key="item.text"
            class="flex gap-3 items-start"
          >
            <span class="mt-2 rounded-full flex-shrink-0 h-2.5 w-2.5" :class="colorMap[item.color].solid" />
            <span class="text-jetspan-gray dark:text-gray-400">{{ item.text }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. Key Questions (FAQ) -->
    <section class="section-padding bg-white dark:bg-jetspan-black">
      <div class="section-container">
        <div class="mx-auto mb-12 text-center max-w-3xl">
          <h2 class="section-title">
            Key Questions
          </h2>
        </div>

        <div class="mx-auto max-w-3xl space-y-4">
          <div
            v-for="(faq, i) in faqs"
            :key="faq.q"
            class="border border-gray-200 rounded-xl bg-white overflow-hidden dark:border-jetspan-gray dark:bg-jetspan-gray-dark"
          >
            <button
              type="button"
              class="px-6 py-5 text-left flex gap-4 w-full transition-colors items-center justify-between hover:bg-jetspan-light dark:hover:bg-jetspan-gray/20"
              :aria-expanded="openFaq === i"
              @click="toggleFaq(i)"
            >
              <span class="text-lg text-jetspan-black font-semibold dark:text-white">
                {{ faq.q }}
              </span>
              <span
                class="i-carbon-chevron-down text-xl text-jetspan-green flex-shrink-0 transition-transform duration-300"
                :class="openFaq === i ? 'rotate-180' : ''"
              />
            </button>
            <div v-show="openFaq === i" class="px-6 pb-5">
              <p class="text-jetspan-gray leading-relaxed dark:text-gray-400">
                {{ faq.a }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. Discuss a Fertilizer Transaction (CTA) -->
    <section class="section-padding relative overflow-hidden from-jetspan-black to-jetspan-gray bg-gradient-to-br">
      <div class="opacity-10 inset-0 absolute">
        <div
          class="inset-0 absolute"
          style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"
        />
      </div>

      <div class="section-container relative z-10">
        <div class="mx-auto text-center max-w-4xl">
          <span class="text-sm text-jetspan-green font-semibold mb-4 px-4 py-1.5 rounded-full bg-jetspan-green/10 inline-flex gap-2 items-center">
            <span class="i-carbon-collaborate" />
            Transaction Desk
          </span>
          <h2 class="heading-display text-4xl text-white font-bold mb-4 md:text-5xl">
            Discuss a Fertilizer Transaction
          </h2>
          <p class="text-xl text-jetspan-green font-semibold mb-6">
            For verified buyers, authorised sellers, and qualified counterparties.
          </p>
          <p class="text-lg text-gray-300 mb-8">
            Jetspan engages with counterparties who have genuine supply, confirmed purchasing capability, or formal authority to represent either side of a transaction. Enquiries are reviewed on the basis of demonstrated authority, clear commercial intent, and financial capability.
          </p>
          <div class="flex flex-col gap-4 justify-center sm:flex-row">
            <NuxtLink to="/contact" class="btn text-center inline-flex gap-2 items-center justify-center">
              <span class="i-carbon-send-alt" />
              Submit an Enquiry
            </NuxtLink>
            <NuxtLink to="/products" class="btn-outline-white text-center">
              View Other Products
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="rounded-full bg-jetspan-green/10 h-1/3 w-1/3 bottom-0 right-0 absolute blur-3xl" />
      <div class="rounded-full bg-jetspan-yellow/10 h-1/4 w-1/4 right-1/4 top-1/4 absolute blur-3xl" />
    </section>

    <!-- 10. Other Markets -->
    <section class="section-padding bg-jetspan-light dark:bg-jetspan-black">
      <div class="section-container">
        <div class="mx-auto mb-12 text-center max-w-3xl">
          <h2 class="section-title">
            Other Markets
          </h2>
          <p class="section-subtitle mt-4">
            Explore the rest of the Jetspan commodity and energy portfolio.
          </p>
        </div>

        <div class="gap-6 grid grid-cols-1 md:grid-cols-3">
          <NuxtLink
            v-for="market in otherMarkets"
            :key="market.to"
            :to="market.to"
            class="group card flex flex-col"
          >
            <div
              class="mb-4 rounded-lg flex h-14 w-14 transition-transform duration-300 items-center justify-center group-hover:scale-110"
              :class="colorMap[market.color].bg"
            >
              <div class="text-2xl" :class="[market.icon, colorMap[market.color].text]" />
            </div>
            <h3 class="text-xl text-jetspan-black font-bold mb-2 dark:text-white">
              {{ market.title }}
            </h3>
            <p class="text-sm text-jetspan-gray mb-4 flex-1 dark:text-gray-400">
              {{ market.desc }}
            </p>
            <span class="text-sm font-semibold inline-flex gap-1 items-center" :class="colorMap[market.color].text">
              Learn more
              <span class="i-carbon-arrow-right transition-transform group-hover:translate-x-1" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
