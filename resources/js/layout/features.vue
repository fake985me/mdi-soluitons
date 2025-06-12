<template>
  <section
    id="features"
    class="container relative mx-auto px-5 flex flex-col md:flex-row gap-10 py-10 h-full"
  >
    <!-- Title -->
    <div class="md:w-1/3 text-center md:text-left px-2 pt-8">
      <h2 class="text-3xl md:text-4xl font-bold font-theme-heading">
        Service
      </h2>
      <p class="text-theme-grayish-blue mt-2 font-theme-content text-lg">
        Provide Your Service Network Solutions
      </p>
    </div>

    <!-- Tabs and Content -->
    <div class="w-full md:w-2/3">
      <!-- Tabs -->
      <ul class="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
        <li
          v-for="feature in features"
          :key="feature.id"
          :class="[
            'px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition',
            isOpen === feature.id
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          <a @click.prevent="isOpen = feature.id">
            {{ feature.name }}
          </a>
        </li>
      </ul>

      <!-- Content Area -->
<div class="relative mb-16 min-h-[18rem] sm:min-h-[16rem]">
  <transition-group name="fade" tag="div">
    <div
      v-for="feature in features"
      :key="feature.id"
      v-show="isOpen === feature.id"
      class="absolute transition-transform duration-500 ease-in-out"
    >
      <div
        class="bg-white shadow-md rounded-xl flex flex-col sm:flex-row gap-4 p-4 items-center sm:items-start h-90 overflow-hidden"
      >
        <!-- Image -->
        <div class="w-full sm:w-40 md:w-56 h-40 sm:h-full flex-shrink-0">
          <img
            :src="feature.details.imageUrl"
            :alt="feature.details.title"
            class="object-cover w-full h-full rounded-lg"
          />
        </div>

        <!-- Text -->
        <div class="w-full flex-1 flex flex-col justify-center text-center sm:text-left">
          <h3 class="text-lg sm:text-xl font-semibold mb-2">
            {{ feature.details.title }}
          </h3>
          <p class="text-gray-600 text-sm mb-4">
            {{ feature.details.description }}
          </p>
          <button
            class="self-center sm:self-start px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-full transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </transition-group>
</div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import features from '@/modules/features.js'

const isOpen = ref(1)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.97);
}
</style>
