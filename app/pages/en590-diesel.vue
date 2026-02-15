<script setup lang="ts">
import { companyInfo } from '~/constants'

definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: 'EN590 10PPM Diesel Trading | Jetspan',
  ogTitle: 'EN590 10PPM Ultra-Low Sulfur Diesel | Jetspan',
  description: 'Secure, verified EN590 10PPM diesel transactions with direct 1-layer access to refineries under UCP600 and Incoterms 2020.',
  ogDescription: 'Jetspan specialises in EN590 ULSD international trading — CIF & FOB procedures, SWIFT instruments, fraud prevention.',
})

// Transaction procedures
const cifProcedure = [
  { step: 1, title: 'Buyer Issues ICPO', desc: 'End Buyer submits Irrevocable Corporate Purchase Order' },
  { step: 2, title: 'SPA Signed', desc: 'Sale and Purchase Agreement executed under UCP600 and Incoterms 2020' },
  { step: 3, title: 'Seller Issues 2% PB (MT760)', desc: 'Performance Bond via SWIFT MT760 as commitment guarantee' },
  { step: 4, title: 'Buyer Issues DLC/SBLC (MT700)', desc: 'Documentary Letter of Credit activated' },
  { step: 5, title: 'Shipment & Documentation', desc: 'Product shipped with Bill of Lading, Certificate of Origin' },
  { step: 6, title: 'SGS Inspection', desc: 'Independent inspection confirms quality and quantity at discharge' },
  { step: 7, title: 'Final Payment (MT103)', desc: 'Payment released via SWIFT MT103 wire transfer' },
]

const fobProcedure = [
  { step: 1, title: 'Vessel Nomination', desc: 'Buyer nominates vessel and provides Q88 questionnaire' },
  { step: 2, title: 'NOR Issued', desc: 'Notice of Readiness issued when vessel arrives at loading port' },
  { step: 3, title: 'Dip Test & Inspection', desc: 'Physical dip test with SGS/Intertek verification' },
  { step: 4, title: 'Quality Verification', desc: 'Fresh SGS report confirms EN590 10PPM standards' },
  { step: 5, title: 'Payment (MT103)', desc: 'Buyer pays via SWIFT MT103 upon successful verification' },
  { step: 6, title: 'Product Loading', desc: 'Product loaded onto vessel with Bill of Lading issued' },
  { step: 7, title: 'Departure', desc: 'Vessel departs with shipping documentation' },
]

// SWIFT codes
const swiftCodes = [
  { code: 'MT 700', name: 'Documentary Letter of Credit', desc: 'Operative L/C guaranteeing payment upon compliant documents', risk: 'low' },
  { code: 'MT 760', name: 'Performance Bond / Bank Guarantee', desc: 'Typically 2% guarantee - major companies seldom issue PBs', risk: 'medium' },
  { code: 'MT 799', name: 'Pre-Advice / Soft Probe', desc: 'NOT a payment instrument or guarantee', risk: 'high' },
  { code: 'MT 103', name: 'Wire Transfer / Payment', desc: 'Actual payment message for fund transfer', risk: 'low' },
]

// Fraud warnings
const fraudWarnings = [
  { title: 'FOB Jurong Red Flag', icon: 'i-carbon-warning-alt', color: 'red', desc: 'Well-known scam - Jurong Island (Singapore) frequently misused. Exercise extreme caution.' },
  { title: 'TSA/TSR Documents', icon: 'i-carbon-security', color: 'orange', desc: 'NEVER exchange Tank Storage Agreement/Report before financial instruments are in place.' },
  { title: 'SGS ≠ Ownership', icon: 'i-carbon-document', color: 'yellow', desc: 'SGS reports confirm quality ONLY - they DO NOT establish product ownership.' },
  { title: 'Pre-Advice Transferable L/C', icon: 'i-carbon-close-filled', color: 'red', desc: 'Fraudulent request - MT799 is NOT a payment instrument.' },
  { title: 'POP Before Financial Commitment', icon: 'i-carbon-money', color: 'orange', desc: 'Legitimate suppliers provide POP only AFTER SBLC/DLC activation.' },
  { title: 'Broker Chain Risks', icon: 'i-carbon-user-multiple', color: 'yellow', desc: 'Multiple layers increase fraud risk - Jetspan offers 1-layer direct access.' },
]

// Technical specifications
const specs = [
  { param: 'Sulfur Content', value: 'Maximum 10 ppm', standard: 'EN 590:2013' },
  { param: 'Cetane Number', value: 'Minimum 51', standard: 'EN 590:2013' },
  { param: 'Density at 15°C', value: '820-845 kg/m³', standard: 'ISO 3675' },
  { param: 'Flash Point', value: 'Minimum 55°C', standard: 'ISO 2719' },
  { param: 'Distillation 95% v/v', value: 'Maximum 360°C', standard: 'ISO 3405' },
  { param: 'Polycyclic Aromatics', value: 'Maximum 8% m/m', standard: 'EN 12916' },
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <SectionHero
      title="EN590 10PPM Diesel"
      subtitle="Ultra-Low Sulfur Diesel (ULSD) International Trading"
      badge="Verified · Direct · Compliant"
      badge-icon="i-carbon-security"
      bg-image="/assets/hero/pexels-umaraffan499-87236.jpg"
    >
      <p class="text-lg text-gray-400 mx-auto mb-12 max-w-2xl">
        {{ companyInfo.name }} specialises in secure, verified EN590 10PPM diesel transactions with direct 1-layer access to refineries and title holders under UCP600 and Incoterms 2020.
      </p>
      <template #actions>
        <a href="#procedures" class="btn-primary inline-flex gap-2 items-center">
          <span class="i-carbon-document" />
          View Procedures
        </a>
        <a href="#contact" class="btn-outline-white inline-flex gap-2 items-center">
          <span class="i-carbon-email" />
          Request Quote
        </a>
      </template>
    </SectionHero>

    <!-- Product Specifications -->
    <section id="specifications" class="section-padding bg-white dark:bg-jetspan-black">
      <div class="section-container">
        <div class="mb-16 text-center">
          <h2 class="section-title">
            Technical Specifications
          </h2>
          <p class="section-subtitle">
            EN590 10PPM Ultra-Low Sulfur Diesel meets stringent European standards
          </p>
        </div>

        <div class="mx-auto max-w-5xl">
          <div class="card overflow-hidden">
            <div class="bg-jetspan-navy p-6">
              <h3 class="text-2xl text-white font-bold">
                EN590:2013 Standard Compliance
              </h3>
              <p class="text-gray-200">
                Ultra-Low Sulfur Diesel for automotive applications
              </p>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-gray-50 dark:bg-jetspan-gray/20">
                  <tr>
                    <th class="text-sm font-semibold px-6 py-4 text-left">
                      Parameter
                    </th>
                    <th class="text-sm font-semibold px-6 py-4 text-left">
                      Value
                    </th>
                    <th class="text-sm font-semibold px-6 py-4 text-left">
                      Test Method
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-gray-200 divide-y dark:divide-jetspan-gray">
                  <tr v-for="spec in specs" :key="spec.param" class="hover:bg-gray-50 dark:hover:bg-jetspan-gray/10">
                    <td class="font-medium px-6 py-4">
                      {{ spec.param }}
                    </td>
                    <td class="text-jetspan-gray px-6 py-4 dark:text-gray-300">
                      {{ spec.value }}
                    </td>
                    <td class="text-sm text-jetspan-gray px-6 py-4 dark:text-gray-400">
                      {{ spec.standard }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="mt-8 gap-6 grid md:grid-cols-3">
            <div class="card text-center">
              <div class="i-carbon-chemistry text-jetspan-blue text-5xl mx-auto mb-4" />
              <h4 class="text-lg font-bold mb-2">
                Ultra-Low Sulfur
              </h4>
              <p class="text-sm text-jetspan-gray dark:text-gray-400">
                Maximum 10 ppm sulfur for environmental compliance
              </p>
            </div>
            <div class="card text-center">
              <div class="i-carbon-flash text-5xl text-jetspan-yellow mx-auto mb-4" />
              <h4 class="text-lg font-bold mb-2">
                High Cetane Number
              </h4>
              <p class="text-sm text-jetspan-gray dark:text-gray-400">
                Minimum 51 cetane ensures optimal combustion
              </p>
            </div>
            <div class="card text-center">
              <div class="i-carbon-temperature text-5xl text-jetspan-green mx-auto mb-4" />
              <h4 class="text-lg font-bold mb-2">
                Climate Adaptable
              </h4>
              <p class="text-sm text-jetspan-gray dark:text-gray-400">
                Multiple grades for various climatic conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality Promise -->
    <LazyDieselQualityPromise />

    <!-- Bulk Savings Calculator -->
    <LazyDieselBulkCalculator />

    <!-- Transaction Procedures -->
    <section id="procedures" class="section-padding bg-gray-50 dark:bg-jetspan-gray/10">
      <div class="section-container">
        <div class="mb-16 text-center">
          <h2 class="section-title">
            Transaction Procedures
          </h2>
          <p class="section-subtitle">
            Step-by-step procedures under Incoterms 2020 compliance
          </p>
        </div>

        <!-- Incoterms Overview -->
        <div class="mx-auto mb-12 gap-6 grid max-w-5xl md:grid-cols-2">
          <div class="card border-2 border-jetspan-green">
            <div class="mb-4 flex gap-4 items-start">
              <div class="i-carbon-checkmark-filled text-4xl text-jetspan-green" />
              <div>
                <h3 class="text-2xl font-bold mb-2">
                  CIF (Recommended)
                </h3>
                <p class="text-sm text-jetspan-green font-semibold mb-2">
                  Cost, Insurance, Freight
                </p>
                <p class="text-jetspan-gray dark:text-gray-400">
                  Seller handles all logistics, insurance, and shipping. Safest method for End Buyers as risk transfers upon delivery.
                </p>
              </div>
            </div>
            <div class="mt-4 p-4 rounded-lg bg-jetspan-green/10">
              <p class="text-sm font-medium">
                ✓ Lower risk for buyer<br>
                ✓ Seller manages logistics<br>
                ✓ Clear delivery point
              </p>
            </div>
          </div>

          <div class="card border-2 border-jetspan-yellow">
            <div class="mb-4 flex gap-4 items-start">
              <div class="i-carbon-warning text-4xl text-jetspan-yellow" />
              <div>
                <h3 class="text-2xl font-bold mb-2">
                  FOB (Higher Risk)
                </h3>
                <p class="text-sm text-jetspan-yellow font-semibold mb-2">
                  Free On Board
                </p>
                <p class="text-jetspan-gray dark:text-gray-400">
                  Buyer provides vessel and handles shipping. Risk transfers when product crosses ship's rail. Requires "Dip and Pay" for security.
                </p>
              </div>
            </div>
            <div class="mt-4 p-4 rounded-lg bg-jetspan-yellow/10">
              <p class="text-sm font-medium">
                ⚠ Higher risk for buyer<br>
                ⚠ Buyer manages logistics<br>
                ⚠ Requires vessel nomination
              </p>
            </div>
          </div>
        </div>

        <!-- CIF Procedure -->
        <div class="mx-auto mb-12 max-w-5xl">
          <div class="card">
            <h3 class="text-2xl font-bold mb-6">
              CIF Transaction Procedure
            </h3>
            <div class="space-y-6">
              <div v-for="proc in cifProcedure" :key="proc.step" class="flex gap-4">
                <div class="flex-shrink-0">
                  <div class="text-xl text-white font-bold rounded-full bg-jetspan-green flex h-12 w-12 items-center justify-center">
                    {{ proc.step }}
                  </div>
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-bold mb-1">
                    {{ proc.title }}
                  </h4>
                  <p class="text-jetspan-gray dark:text-gray-400">
                    {{ proc.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- FOB / Dip & Pay Procedure -->
        <div class="mx-auto max-w-5xl">
          <div class="card border-2 border-jetspan-yellow/30">
            <div class="mb-6 flex gap-4 items-start">
              <div class="i-carbon-warning text-4xl text-jetspan-yellow" />
              <div>
                <h3 class="text-2xl font-bold">
                  FOB / Dip & Pay Procedure
                </h3>
                <p class="text-sm text-jetspan-yellow">
                  Recommended secure method for FOB transactions
                </p>
              </div>
            </div>
            <div class="space-y-6">
              <div v-for="proc in fobProcedure" :key="proc.step" class="flex gap-4">
                <div class="flex-shrink-0">
                  <div class="text-xl text-jetspan-black font-bold rounded-full bg-jetspan-yellow flex h-12 w-12 items-center justify-center">
                    {{ proc.step }}
                  </div>
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-bold mb-1">
                    {{ proc.title }}
                  </h4>
                  <p class="text-jetspan-gray dark:text-gray-400">
                    {{ proc.desc }}
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-6 p-4 rounded-lg bg-jetspan-yellow/10">
              <p class="text-sm font-semibold">
                <span class="i-carbon-checkmark-filled text-jetspan-green" />
                "Dip and Pay" is the MOST SECURE FOB method - Physical verification before payment
              </p>
            </div>
          </div>
        </div>

        <!-- TTO and TTT -->
        <div class="mx-auto mt-8 max-w-5xl">
          <div class="card bg-gray-100 dark:bg-jetspan-gray/20">
            <h4 class="text-lg font-bold mb-4">
              Alternative Delivery Methods
            </h4>
            <div class="gap-4 grid md:grid-cols-2">
              <div class="p-4 rounded-lg bg-white dark:bg-jetspan-black">
                <h5 class="font-bold mb-2">
                  TTO - Tanker Take Over
                </h5>
                <p class="text-sm text-jetspan-gray dark:text-gray-400">
                  Buyer takes over supplier's vessel, offloads product, and returns vessel.
                </p>
              </div>
              <div class="p-4 rounded-lg bg-white dark:bg-jetspan-black">
                <h5 class="font-bold mb-2">
                  TTT - Tanker To Tanker
                </h5>
                <p class="text-sm text-jetspan-gray dark:text-gray-400">
                  Product transshipped from seller's to buyer's vessel after settlement.
                </p>
              </div>
            </div>
            <p class="text-sm text-jetspan-gray mt-4 dark:text-gray-400">
              Note: {{ companyInfo.name }} is flexible with any procedure that makes business sense.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Banking & Financial Instruments -->
    <section id="banking" class="section-padding bg-white dark:bg-jetspan-black">
      <div class="section-container">
        <div class="mb-16 text-center">
          <h2 class="section-title">
            Banking & Financial Instruments
          </h2>
          <p class="section-subtitle">
            Understanding SWIFT codes and payment security
          </p>
        </div>

        <div class="mx-auto max-w-5xl space-y-6">
          <div v-for="swift in swiftCodes" :key="swift.code" class="card">
            <div class="flex flex-col gap-6 md:flex-row md:items-start">
              <div class="flex-shrink-0">
                <div
                  class="text-2xl rounded-full flex h-16 w-16 items-center justify-center"
                  :class="{
                    'bg-jetspan-green/20 text-jetspan-green': swift.risk === 'low',
                    'bg-jetspan-yellow/20 text-jetspan-yellow': swift.risk === 'medium',
                    'bg-red-100 text-red-600 dark:bg-red-900/20': swift.risk === 'high',
                  }"
                >
                  <span
                    :class="{
                      'i-carbon-checkmark-filled': swift.risk === 'low',
                      'i-carbon-warning': swift.risk === 'medium',
                      'i-carbon-close-filled': swift.risk === 'high',
                    }"
                  />
                </div>
              </div>
              <div class="flex-1">
                <div class="mb-2 flex flex-wrap gap-3 items-center">
                  <h3 class="text-2xl font-bold">
                    {{ swift.code }}
                  </h3>
                  <span
                    class="text-xs font-semibold px-3 py-1 rounded-full"
                    :class="{
                      'bg-jetspan-green/20 text-jetspan-green': swift.risk === 'low',
                      'bg-jetspan-yellow/20 text-jetspan-yellow': swift.risk === 'medium',
                      'bg-red-100 text-red-600 dark:bg-red-900/20': swift.risk === 'high',
                    }"
                  >
                    {{ swift.risk === 'low' ? 'Secure' : swift.risk === 'medium' ? 'Moderate' : 'High Risk' }}
                  </span>
                </div>
                <p class="text-lg text-jetspan-gray font-semibold mb-3 dark:text-gray-300">
                  {{ swift.name }}
                </p>
                <p class="text-jetspan-gray dark:text-gray-400">
                  {{ swift.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mx-auto mt-12 max-w-5xl">
          <div class="card border-2 border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-900/10">
            <div class="flex gap-4 items-start">
              <div class="i-carbon-warning-alt text-4xl text-red-600" />
              <div>
                <h4 class="text-xl text-red-600 font-bold mb-3">
                  Critical Warning: Pre-Advice Transferable L/C Scam
                </h4>
                <p class="mb-3">
                  <strong>NEVER issue a "Pre-Advice Transferable Letter of Credit".</strong> This is fraudulent.
                </p>
                <ul class="text-sm space-y-2">
                  <li class="flex gap-2 items-start">
                    <span class="i-carbon-close-filled text-red-600 mt-1" />
                    <span>MT799 is NOT a payment instrument or financial commitment</span>
                  </li>
                  <li class="flex gap-2 items-start">
                    <span class="i-carbon-close-filled text-red-600 mt-1" />
                    <span>Legitimate sellers don't request Pre-Advice before SPA execution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Risk Management & Fraud Warnings -->
    <section id="risk-management" class="section-padding bg-gray-50 dark:bg-jetspan-gray/10">
      <div class="section-container">
        <div class="mb-16 text-center">
          <h2 class="section-title">
            Risk Management & Fraud Awareness
          </h2>
          <p class="section-subtitle">
            Protect your business from common petroleum trading scams
          </p>
        </div>

        <div class="mx-auto max-w-6xl">
          <div class="gap-6 grid lg:grid-cols-3 md:grid-cols-2">
            <div v-for="warning in fraudWarnings" :key="warning.title" class="card border-l-4" :class="`border-l-${warning.color}-600`">
              <div class="mb-4 flex gap-4 items-start">
                <div class="text-4xl" :class="[warning.icon, `text-${warning.color}-600`]" />
                <div class="flex-1">
                  <h4 class="text-lg font-bold mb-2">
                    {{ warning.title }}
                  </h4>
                  <p class="text-sm text-jetspan-gray dark:text-gray-400">
                    {{ warning.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mx-auto mt-12 max-w-5xl">
          <div class="card bg-jetspan-green/10">
            <h4 class="text-xl font-bold mb-4 flex gap-3 items-center">
              <span class="i-carbon-shield text-2xl text-jetspan-green" />
              {{ companyInfo.name }} Security Measures
            </h4>
            <ul class="space-y-3">
              <li class="flex gap-3 items-start">
                <span class="i-carbon-checkmark-filled text-jetspan-green mt-1" />
                <span><strong>1-Layer Direct Access:</strong> Direct connection with verified title holders</span>
              </li>
              <li class="flex gap-3 items-start">
                <span class="i-carbon-checkmark-filled text-jetspan-green mt-1" />
                <span><strong>UCP600 Compliance:</strong> ICC Uniform Customs and Practice standards</span>
              </li>
              <li class="flex gap-3 items-start">
                <span class="i-carbon-checkmark-filled text-jetspan-green mt-1" />
                <span><strong>Incoterms 2020:</strong> Clear risk allocation and delivery terms</span>
              </li>
              <li class="flex gap-3 items-start">
                <span class="i-carbon-checkmark-filled text-jetspan-green mt-1" />
                <span><strong>No Broker Chains:</strong> Eliminate unnecessary intermediaries</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Documentation Guide -->
    <section id="documentation" class="section-padding bg-white dark:bg-jetspan-black">
      <div class="section-container">
        <div class="mb-16 text-center">
          <h2 class="section-title">
            Essential Documentation
          </h2>
          <p class="section-subtitle">
            Key documents in petroleum trading transactions
          </p>
        </div>

        <div class="mx-auto max-w-5xl">
          <div class="gap-6 grid md:grid-cols-2">
            <div class="card">
              <h3 class="text-xl font-bold mb-4">
                Buyer Documents
              </h3>
              <ul class="text-sm space-y-3">
                <li><strong>ICPO:</strong> Irrevocable Corporate Purchase Order</li>
                <li><strong>OTP:</strong> Offer To Purchase</li>
                <li><strong>CP:</strong> Company Profile</li>
                <li><strong>RFQ:</strong> Request For Quote</li>
              </ul>
            </div>

            <div class="card">
              <h3 class="text-xl font-bold mb-4">
                Proof Documents
              </h3>
              <ul class="text-sm space-y-3">
                <li><strong>POP:</strong> Proof Of Product (after financial commitment)</li>
                <li><strong>POF:</strong> Proof Of Fund (exchanged with POP)</li>
              </ul>
            </div>

            <div class="card">
              <h3 class="text-xl font-bold mb-4">
                Inspection & Shipping
              </h3>
              <ul class="text-sm space-y-3">
                <li><strong>SGS Report:</strong> Quality verification (NOT ownership)</li>
                <li><strong>B/L:</strong> Bill of Lading</li>
                <li><strong>Q88:</strong> Vessel Questionnaire</li>
                <li><strong>NOR:</strong> Notice of Readiness</li>
              </ul>
            </div>

            <div class="card bg-jetspan-yellow/10">
              <h3 class="text-xl font-bold mb-4 flex gap-2 items-center">
                <span class="i-carbon-information text-jetspan-yellow" />
                Important Timing
              </h3>
              <ul class="text-sm space-y-2">
                <li>✓ POP provided AFTER financial commitment</li>
                <li>✓ POP and POF exchanged simultaneously</li>
                <li>✓ Fresh SGS at loading/discharge time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cross-Sell Banner -->
    <CrossSellBanner
      title="Why burn money while the sun shines?"
      description="Diesel costs R8–12/kWh. Solar delivers power at R0.80/kWh. Let Jetspan help you switch and save up to 90% on daytime energy."
      cta-text="Explore Solar Solutions"
      cta-link="/solar-solutions"
      icon="i-carbon-sun"
      variant="diesel-to-solar"
    />

    <!-- Contact Section -->
    <section id="contact" class="from-jetspan-navy text-white section-padding to-jetspan-black bg-gradient-to-br">
      <div class="section-container">
        <div class="mx-auto text-center max-w-4xl">
          <h2 class="text-4xl font-bold mb-6">
            Ready for Secure Petroleum Trading?
          </h2>
          <p class="text-xl text-gray-300 mb-12">
            {{ companyInfo.name }} provides direct access to verified EN590 10PPM diesel suppliers
          </p>

          <div class="gap-8 grid md:grid-cols-3">
            <div class="p-6 rounded-xl bg-white/10 backdrop-blur">
              <div class="i-carbon-location text-4xl text-jetspan-yellow mx-auto mb-4" />
              <h4 class="font-bold mb-2">
                Location
              </h4>
              <p class="text-sm text-gray-300">
                {{ companyInfo.address }}
              </p>
            </div>
            <div class="p-6 rounded-xl bg-white/10 backdrop-blur">
              <div class="i-carbon-email text-4xl text-jetspan-yellow mx-auto mb-4" />
              <h4 class="font-bold mb-2">
                Email
              </h4>
              <a :href="`mailto:${companyInfo.email}`" class="text-sm text-jetspan-yellow hover:underline">
                {{ companyInfo.email }}
              </a>
            </div>
            <div class="p-6 rounded-xl bg-white/10 backdrop-blur">
              <div class="i-carbon-phone text-4xl text-jetspan-yellow mx-auto mb-4" />
              <h4 class="font-bold mb-2">
                Phone
              </h4>
              <a :href="`tel:${companyInfo.phone}`" class="text-sm text-jetspan-yellow hover:underline">
                {{ companyInfo.phone }}
              </a>
            </div>
          </div>

          <div class="mt-12">
            <NuxtLink to="/contact" class="btn-primary text-lg inline-flex gap-2 items-center">
              <span class="i-carbon-send" />
              Submit RFQ
            </NuxtLink>
          </div>

          <div class="mt-12 p-6 border border-jetspan-yellow/30 rounded-xl bg-jetspan-yellow/10">
            <p class="text-sm text-gray-300">
              <strong class="text-white">Due Diligence:</strong> All parties must provide corporate documentation and undergo verification before transaction initiation.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CTASection />
  </div>
</template>
