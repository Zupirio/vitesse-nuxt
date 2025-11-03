<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const values = [
  {
    icon: 'i-carbon-integrity',
    title: 'Integrity',
    description: 'We conduct business with the highest ethical standards and transparency.',
  },
  {
    icon: 'i-carbon-trophy',
    title: 'Excellence',
    description: 'We strive for excellence in every product and service we deliver.',
  },
  {
    icon: 'i-carbon-earth',
    title: 'Sustainability',
    description: 'We are committed to environmental responsibility and sustainable practices.',
  },
  {
    icon: 'i-carbon-collaborate',
    title: 'Partnership',
    description: 'We build long-term relationships based on trust and mutual success.',
  },
]

const team = [
  {
    role: 'Leadership Team',
    description: 'Experienced executives with deep industry knowledge and strategic vision.',
  },
  {
    role: 'Technical Experts',
    description: 'Qualified engineers and technical specialists ensuring product quality.',
  },
  {
    role: 'Account Managers',
    description: 'Dedicated professionals managing client relationships and requirements.',
  },
  {
    role: 'Logistics Team',
    description: 'Efficient supply chain experts ensuring reliable delivery.',
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="section-padding from-jetspan-black to-jetspan-gray bg-gradient-to-br">
      <div class="section-container">
        <div class="max-w-3xl">
          <h1 class="text-5xl text-white font-bold mb-6 md:text-6xl">
            About Jetspan
          </h1>
          <p class="text-xl text-gray-300">
            Your trusted partner in energy solutions, dedicated to powering industrial growth across South Africa.
          </p>
        </div>
      </div>
    </section>

    <!-- Company Story -->
    <section class="section-padding bg-white dark:bg-jetspan-gray-dark">
      <div class="section-container">
        <div class="mx-auto max-w-4xl">
          <h2 class="text-4xl text-jetspan-black font-bold mb-6 dark:text-white">
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
          <h2 class="text-4xl text-jetspan-black font-bold mb-4 md:text-5xl dark:text-white">
            Our Core Values
          </h2>
          <p class="text-xl text-jetspan-gray mx-auto max-w-3xl dark:text-gray-400">
            The principles that guide everything we do
          </p>
        </div>

        <div class="gap-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
          <div
            v-for="(value, index) in values"
            :key="index"
            class="group card text-center transition-transform hover:scale-105"
          >
            <div class="mb-6 rounded-full bg-jetspan-yellow/20 inline-flex h-20 w-20 transition-colors items-center justify-center group-hover:bg-jetspan-yellow">
              <div :class="value.icon" class="text-4xl text-jetspan-yellow transition-colors group-hover:text-jetspan-black" />
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
          <h2 class="text-4xl text-jetspan-black font-bold mb-4 md:text-5xl dark:text-white">
            Our Team
          </h2>
          <p class="text-xl text-jetspan-gray mx-auto max-w-3xl dark:text-gray-400">
            Expert professionals dedicated to your success
          </p>
        </div>

        <div class="mx-auto gap-8 grid grid-cols-1 max-w-4xl md:grid-cols-2">
          <div
            v-for="(member, index) in team"
            :key="index"
            class="card"
          >
            <h3 class="text-2xl text-jetspan-black font-bold mb-3 dark:text-white">
              {{ member.role }}
            </h3>
            <p class="text-jetspan-gray dark:text-gray-400">
              {{ member.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications & Compliance -->
    <section class="section-padding bg-jetspan-light dark:bg-jetspan-black">
      <div class="section-container">
        <div class="mx-auto text-center max-w-4xl">
          <h2 class="text-4xl text-jetspan-black font-bold mb-6 md:text-5xl dark:text-white">
            Certifications & Compliance
          </h2>
          <p class="text-xl text-jetspan-gray mb-8 dark:text-gray-400">
            We adhere to the highest industry standards and maintain all necessary certifications to ensure quality, safety, and environmental compliance.
          </p>
          <div class="gap-4 grid grid-cols-2 md:grid-cols-4">
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
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CTASection />
  </div>
</template>
