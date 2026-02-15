<script setup lang="ts">
import { companyInfo } from '~/constants'

definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: 'Contact Us | Jetspan',
  ogTitle: 'Get in Touch with Jetspan',
  description: 'Ready to discuss your energy requirements? Contact Jetspan for diesel, solar, gas and petroleum solutions.',
  ogDescription: 'Reach out to Jetspan for quotes, enquiries and support — email, phone, or WhatsApp.',
})

const form = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  product: '',
  message: '',
})

const submitted = ref(false)

const products = [
  'EN590 Diesel',
  'Crude Oil',
  'Petroleum Products',
  'Solar Solutions',
  'Gas (LPG)',
  'Other',
]

function handleSubmit() {
  // Build mailto body with form data
  const subject = `RFQ from ${form.value.name} — ${form.value.product}`
  const body = [
    `Name: ${form.value.name}`,
    `Company: ${form.value.company}`,
    `Email: ${form.value.email}`,
    `Phone: ${form.value.phone || 'N/A'}`,
    `Product: ${form.value.product}`,
    '',
    `Message:`,
    form.value.message,
  ].join('\n')

  window.open(
    `mailto:${companyInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    '_self',
  )

  submitted.value = true

  setTimeout(() => {
    form.value = {
      name: '',
      company: '',
      email: '',
      phone: '',
      product: '',
      message: '',
    }
    submitted.value = false
  }, 3000)
}

const contactMethods = [
  {
    icon: 'i-carbon-email',
    title: 'Email Us',
    value: companyInfo.email,
    link: `mailto:${companyInfo.email}`,
  },
  {
    icon: 'i-carbon-phone',
    title: 'Call Us',
    value: companyInfo.phone,
    link: `tel:${companyInfo.phone}`,
  },
  {
    icon: 'i-mdi-whatsapp',
    title: 'WhatsApp',
    value: companyInfo.whatsapp,
    link: `https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`,
  },
  // {
  //   icon: 'i-carbon-location',
  //   title: 'Visit Us',
  //   value: companyInfo.address,
  //   link: '#',
  // },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <SectionHero
      title="Get in Touch"
      subtitle="Ready to discuss your energy requirements? Our team is here to help you find the perfect solution for your business needs."
      badge="Let's Talk"
      badge-icon="i-carbon-chat"
      bg-image="/assets/hero/pexels-office-5467595.jpg"
      compact
    />

    <!-- Contact Content -->
    <section class="section-padding bg-jetspan-light dark:bg-jetspan-black">
      <div class="section-container">
        <div class="gap-12 grid lg:grid-cols-2">
          <!-- Contact Form -->
          <div class="card">
            <h2 class="heading-display text-3xl text-jetspan-black mb-6 dark:text-white">
              Send Us a Message
            </h2>

            <form v-if="!submitted" class="space-y-6" @submit.prevent="handleSubmit">
              <div>
                <label for="name" class="text-sm text-jetspan-gray font-semibold mb-2 block dark:text-gray-400">
                  Full Name *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="text-jetspan-black px-4 py-3 border-2 border-gray-300 rounded-lg bg-white w-full transition-colors dark:text-white focus:outline-none dark:border-jetspan-gray focus:border-jetspan-yellow dark:bg-jetspan-gray-dark"
                  placeholder="John Doe"
                >
              </div>

              <div>
                <label for="company" class="text-sm text-jetspan-gray font-semibold mb-2 block dark:text-gray-400">
                  Company Name *
                </label>
                <input
                  id="company"
                  v-model="form.company"
                  type="text"
                  required
                  class="text-jetspan-black px-4 py-3 border-2 border-gray-300 rounded-lg bg-white w-full transition-colors dark:text-white focus:outline-none dark:border-jetspan-gray focus:border-jetspan-yellow dark:bg-jetspan-gray-dark"
                  placeholder="Your Company Ltd"
                >
              </div>

              <div class="gap-6 grid md:grid-cols-2">
                <div>
                  <label for="email" class="text-sm text-jetspan-gray font-semibold mb-2 block dark:text-gray-400">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="text-jetspan-black px-4 py-3 border-2 border-gray-300 rounded-lg bg-white w-full transition-colors dark:text-white focus:outline-none dark:border-jetspan-gray focus:border-jetspan-yellow dark:bg-jetspan-gray-dark"
                    placeholder="john@company.com"
                  >
                </div>

                <div>
                  <label for="phone" class="text-sm text-jetspan-gray font-semibold mb-2 block dark:text-gray-400">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="text-jetspan-black px-4 py-3 border-2 border-gray-300 rounded-lg bg-white w-full transition-colors dark:text-white focus:outline-none dark:border-jetspan-gray focus:border-jetspan-yellow dark:bg-jetspan-gray-dark"
                    placeholder="+27 XX XXX XXXX"
                  >
                </div>
              </div>

              <div>
                <label for="product" class="text-sm text-jetspan-gray font-semibold mb-2 block dark:text-gray-400">
                  Product Interest *
                </label>
                <select
                  id="product"
                  v-model="form.product"
                  required
                  class="text-jetspan-black px-4 py-3 border-2 border-gray-300 rounded-lg bg-white w-full transition-colors dark:text-white focus:outline-none dark:border-jetspan-gray focus:border-jetspan-yellow dark:bg-jetspan-gray-dark"
                >
                  <option value="" disabled>
                    Select a product
                  </option>
                  <option v-for="product in products" :key="product" :value="product">
                    {{ product }}
                  </option>
                </select>
              </div>

              <div>
                <label for="message" class="text-sm text-jetspan-gray font-semibold mb-2 block dark:text-gray-400">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="text-jetspan-black px-4 py-3 border-2 border-gray-300 rounded-lg bg-white w-full resize-none transition-colors dark:text-white focus:outline-none dark:border-jetspan-gray focus:border-jetspan-yellow dark:bg-jetspan-gray-dark"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button type="submit" class="btn-primary w-full">
                <span class="i-carbon-send mr-2 inline-block" />
                Send Message
              </button>
            </form>

            <div v-else class="py-12 text-center">
              <div class="i-carbon-checkmark-filled text-6xl text-jetspan-green mx-auto mb-4" />
              <h3 class="heading-display text-2xl text-jetspan-black mb-2 dark:text-white">
                Message Sent!
              </h3>
              <p class="text-jetspan-gray dark:text-gray-400">
                Thank you for contacting us. We'll get back to you shortly.
              </p>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <div class="card">
              <h3 class="heading-display text-2xl text-jetspan-black mb-6 dark:text-white">
                Contact Information
              </h3>
              <div class="space-y-6">
                <a
                  v-for="method in contactMethods"
                  :key="method.title"
                  :href="method.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group flex items-start space-x-4"
                >
                  <div class="rounded-lg bg-jetspan-yellow/20 flex flex-shrink-0 h-12 w-12 transition-colors items-center justify-center group-hover:bg-jetspan-yellow">
                    <div :class="method.icon" class="text-2xl text-jetspan-yellow transition-colors group-hover:text-jetspan-black" />
                  </div>
                  <div>
                    <h4 class="text-jetspan-black font-semibold mb-1 dark:text-white">
                      {{ method.title }}
                    </h4>
                    <p class="text-jetspan-gray dark:text-gray-400">
                      {{ method.value }}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div class="card">
              <h3 class="heading-display text-2xl text-jetspan-black mb-4 dark:text-white">
                Business Hours
              </h3>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span class="text-jetspan-gray dark:text-gray-400">Monday - Friday</span>
                  <span class="text-jetspan-black font-semibold dark:text-white">8:00 AM - 5:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-jetspan-gray dark:text-gray-400">Saturday</span>
                  <span class="text-jetspan-black font-semibold dark:text-white">9:00 AM - 1:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-jetspan-gray dark:text-gray-400">Sunday</span>
                  <span class="text-jetspan-black font-semibold dark:text-white">Closed</span>
                </div>
                <div class="pt-3 border-t border-gray-200 dark:border-jetspan-gray">
                  <p class="text-sm text-jetspan-gray dark:text-gray-400">
                    <span class="i-carbon-time mr-2 inline-block" />
                    24/7 Emergency Support Available
                  </p>
                </div>
              </div>
            </div>

            <div class="card border-2 border-jetspan-yellow bg-jetspan-yellow/10">
              <div class="flex items-start space-x-4">
                <div class="i-carbon-information text-3xl text-jetspan-yellow flex-shrink-0" />
                <div>
                  <h4 class="text-jetspan-black font-semibold mb-2 dark:text-white">
                    Looking for a Quote?
                  </h4>
                  <p class="text-sm text-jetspan-gray dark:text-gray-400">
                    Fill out the contact form with your requirements, and our team will provide you with a detailed quote within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
