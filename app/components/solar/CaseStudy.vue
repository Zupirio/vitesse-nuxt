<script setup lang="ts">
const steps = [
  {
    number: 1,
    label: 'THE PROBLEM',
    icon: 'i-carbon-warning-alt',
    accent: 'text-red-500',
    accentBg: 'bg-red-500/20',
    borderColor: 'border-red-500/30',
    numberBg: 'bg-red-500',
    description: 'A Gauteng manufacturing plant was losing R180,000/month to load shedding. Two diesel generators running 6+ hours daily. Fuel costs climbing. Production schedules in chaos.',
  },
  {
    number: 2,
    label: 'THE SOLUTION',
    icon: 'i-carbon-tools',
    accent: 'text-jetspan-teal',
    accentBg: 'bg-jetspan-teal/20',
    borderColor: 'border-jetspan-teal/30',
    numberBg: 'bg-jetspan-teal',
    description: 'Jetspan engineered a solar-plus-storage microgrid — Astronergy N-type bifacial panels, a KNYEE LiFePO4 bank sized to the load, and a hybrid inverter juggling grid, solar, battery and diesel backup. Zero production interruption during a Stage 6 week.',
  },
  {
    number: 3,
    label: 'THE RESULT',
    icon: 'i-carbon-checkmark-filled',
    accent: 'text-green-500',
    accentBg: 'bg-green-500/20',
    borderColor: 'border-green-500/30',
    numberBg: 'bg-green-500',
    description: 'Generator runtime dropped 78%. Monthly energy costs cut by R112,000. System payback period: 3.2 years. The client now exports surplus power back to the grid on sunny days.',
  },
]
</script>

<template>
  <section class="section-padding bg-white dark:bg-jetspan-gray-dark">
    <div class="section-container">
      <!-- Heading -->
      <div class="mb-16 text-center">
        <h2 class="section-title">
          The Stage 6 Survival Story
        </h2>
        <p class="section-subtitle">
          How one Gauteng factory cut R112,000/month from their energy bill.
        </p>
      </div>

      <!-- Timeline -->
      <div class="mx-auto max-w-5xl relative">
        <!-- Connecting line (desktop only) -->
        <div class="bg-gray-200 h-0.5 hidden left-0 right-0 top-10 absolute dark:bg-jetspan-gray md:block" />

        <div class="gap-8 grid md:grid-cols-3">
          <div
            v-for="step in steps"
            :key="step.number"
            class="relative"
          >
            <!-- Numbered Circle -->
            <div class="mx-auto mb-6 border-4 border-white rounded-full bg-white flex h-20 w-20 shadow-lg items-center justify-center relative z-10 dark:border-jetspan-gray-dark dark:bg-jetspan-gray-dark">
              <div
                class="text-xl text-white font-bold rounded-full flex h-14 w-14 items-center justify-center"
                :class="step.numberBg"
              >
                {{ step.number }}
              </div>
            </div>

            <!-- Card -->
            <div
              class="p-6 text-center border-2 rounded-xl bg-white shadow-md transition-shadow duration-300 dark:bg-jetspan-gray-dark hover:shadow-lg"
              :class="step.borderColor"
            >
              <!-- Icon -->
              <div
                class="mx-auto mb-4 rounded-full flex h-12 w-12 items-center justify-center"
                :class="step.accentBg"
              >
                <div :class="[step.icon, step.accent]" class="text-xl" />
              </div>

              <!-- Label -->
              <h3
                class="text-sm tracking-wider font-bold mb-3 uppercase"
                :class="step.accent"
              >
                {{ step.label }}
              </h3>

              <!-- Description -->
              <p class="text-base text-jetspan-gray leading-relaxed dark:text-gray-400">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
