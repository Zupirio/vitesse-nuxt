<script setup lang="ts">
</script>

<template>
  <section class="section-padding relative overflow-hidden from-jetspan-black to-jetspan-gray bg-gradient-to-br">
    <!-- Background Pattern -->
    <div class="opacity-10 inset-0 absolute">
      <div class="inset-0 absolute" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;" />
    </div>

    <div class="section-container relative z-10">
      <div class="mx-auto text-center max-w-4xl">
        <h2 class="text-4xl text-white font-bold mb-6 md:text-5xl heading-display">
          Ready to Power Your Business?
        </h2>
        <p class="text-xl text-gray-300 mb-8">
          Get in touch with our team to discuss your energy requirements and discover how we can help your business thrive.
        </p>
        <div class="flex flex-col gap-4 justify-center sm:flex-row">
          <NuxtLink to="/contact" class="btn text-center">
            Request a Quote
          </NuxtLink>
          <NuxtLink to="/products" class="btn-outline text-center">
            Learn More
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="rounded-full bg-jetspan-yellow/10 h-1/3 w-1/3 bottom-0 left-0 absolute blur-3xl" />
  </section>
</template>
