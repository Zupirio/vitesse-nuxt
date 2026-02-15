<script setup lang="ts">
import type { Product } from '~/constants/products'
import { productColorMap } from '~/constants/products'
import { teamMembers } from '~/constants/team'

definePageMeta({
  layout: 'default',
})

useSeoMeta({
  title: 'About Us | Jetspan',
  ogTitle: 'About Jetspan — Powering Industrial Growth',
  description: 'Learn about Jetspan — your trusted partner in energy solutions, dedicated to powering industrial growth across South Africa.',
  ogDescription: 'Jetspan’s story, values, and the team behind quality diesel, solar, and gas solutions for South African industry.',
})

const values: Array<{ icon: string, title: string, description: string, color: Product['color'] }> = [
  {
    icon: 'i-carbon-scis-transparent-supply',
    title: 'Integrity',
    description: 'We conduct business with the highest ethical standards and transparency.',
    color: 'blue',
  },
  {
    icon: 'i-carbon-trophy',
    title: 'Excellence',
    description: 'We strive for excellence in every product and service we deliver.',
    color: 'amber',
  },
  {
    icon: 'i-carbon-earth',
    title: 'Sustainability',
    description: 'We are committed to environmental responsibility and sustainable practices.',
    color: 'green',
  },
  {
    icon: 'i-carbon-collaborate',
    title: 'Partnership',
    description: 'We build long-term relationships based on trust and mutual success.',
    color: 'teal',
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <SectionHero
      title="About Jetspan"
      subtitle="Your trusted partner in energy solutions, dedicated to powering industrial growth across South Africa."
      badge="Our Story"
      badge-icon="i-carbon-enterprise"
      bg-image="/assets/hero/pexels-rezwan-1216589.jpg"
      compact
    />

    <!-- Company Story -->
    <section class="section-padding bg-white dark:bg-jetspan-gray-dark">
      <div class="section-container">
        <div class="mx-auto max-w-4xl">
          <h2 class="heading-display text-4xl text-jetspan-black mb-6 dark:text-white">
            Our Story
          </h2>
          <div class="max-w-none prose prose-lg dark:prose-invert">
            <p class="text-jetspan-gray mb-4 dark:text-gray-400">
              Founded with a vision to revolutionize the energy sector in South Africa, Jetspan has grown to become a leading provider of premium petroleum products and sustainable energy solutions. Our journey began with a simple commitment: to deliver quality products with exceptional service.
            </p>
            <p class="text-jetspan-gray mb-4 dark:text-gray-400">
              Over the years, we've built strong relationships with industrial clients, distributors, and commercial partners across the region. Our success is rooted in understanding our clients' needs and consistently exceeding their expectations.
            </p>
            <p class="text-jetspan-gray dark:text-gray-400">
              Today, Jetspan stands at the forefront of the energy industry, combining traditional fuel expertise with innovative sustainable solutions. We're not just suppliers – we're partners in our clients' success, committed to powering their operations with reliability and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding bg-jetspan-light dark:bg-jetspan-black">
      <div class="section-container">
        <div class="mb-16 text-center">
          <h2 class="section-title">
            Our Core Values
          </h2>
          <p class="section-subtitle">
            The principles that guide everything we do
          </p>
        </div>

        <div class="gap-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
          <div
            v-for="(value, index) in values"
            :key="index"
            class="group card text-center transition-transform hover:scale-105"
          >
            <div
              class="mb-6 rounded-full inline-flex h-20 w-20 transition-colors items-center justify-center"
              :class="[productColorMap[value.color].bgLight, productColorMap[value.color].hoverBg]"
            >
              <div
                :class="[value.icon, productColorMap[value.color].iconText, productColorMap[value.color].hoverText]"
                class="text-4xl transition-colors"
              />
            </div>
            <h3 class="text-xl text-jetspan-black font-bold mb-3 dark:text-white">
              {{ value.title }}
            </h3>
            <p class="text-jetspan-gray dark:text-gray-400">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="section-padding bg-white dark:bg-jetspan-gray-dark">
      <div class="section-container">
        <div class="mb-16 text-center">
          <h2 class="section-title">
            Meet Our Team
          </h2>
          <p class="section-subtitle">
            The dedicated professionals driving Jetspan’s success
          </p>
        </div>

        <div class="mx-auto gap-8 grid grid-cols-1 max-w-6xl lg:grid-cols-3 sm:grid-cols-2">
          <TeamMember
            v-for="member in teamMembers"
            :key="member.id"
            :member="member"
          />
        </div>
      </div>
    </section>

    <!-- Certifications & Compliance -->
    <section class="section-padding bg-jetspan-light dark:bg-jetspan-black">
      <div class="section-container">
        <div class="mx-auto text-center max-w-4xl">
          <h2 class="section-title">
            Certifications & Compliance
          </h2>
          <p class="section-subtitle mb-8">
            We adhere to the highest industry standards and maintain all necessary certifications to ensure quality, safety, and environmental compliance.
          </p>
          <div class="mb-8 gap-4 grid grid-cols-2 md:grid-cols-4">
            <div class="card">
              <div class="i-carbon-certificate text-4xl text-jetspan-green mx-auto mb-2" />
              <p class="text-sm text-jetspan-gray font-semibold dark:text-gray-400">
                ISO Certified
              </p>
            </div>
            <div class="card">
              <div class="i-carbon-earth text-4xl text-jetspan-green mx-auto mb-2" />
              <p class="text-sm text-jetspan-gray font-semibold dark:text-gray-400">
                Environmental
              </p>
            </div>
            <div class="card">
              <div class="i-carbon-security text-4xl text-jetspan-green mx-auto mb-2" />
              <p class="text-sm text-jetspan-gray font-semibold dark:text-gray-400">
                Safety Standards
              </p>
            </div>
            <div class="card">
              <div class="i-carbon-checkmark-outline text-4xl text-jetspan-green mx-auto mb-2" />
              <p class="text-sm text-jetspan-gray font-semibold dark:text-gray-400">
                Quality Assured
              </p>
            </div>
          </div>

          <!-- Documents -->
          <!-- <DocumentViewer
            title="Official License Certificate"
            description="View our official licensing documentation and compliance certificates"
            document-url="/assets/documents/license-certificate.pdf"
            icon-class="i-carbon-document"
            icon-color="text-jetspan-yellow"
          /> -->
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CTASection />
  </div>
</template>
