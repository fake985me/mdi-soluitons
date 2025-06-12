<template>
    <Navbar />
  <section class="section">
    <div class="container">
      <!-- Outer Tab -->
      <div>
        <div class="flex space-x-4 mb-4">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            :class="[
              'px-4 py-2 rounded',
              activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200'
            ]"
            @click="activeTab = index"
          >
            {{ tab.title }}
          </button>
        </div>

        <section aria-labelledby="products-heading" class="pb-24 pt-6">
          <h2 id="products-heading" class="sr-only">Products</h2>
        <!-- Tab Content -->
        <div v-if="activeTab === 0">
          <!-- Branding (Nested Tab) -->
          <div>
            <div class="flex space-x-4 mb-2">
              <button
                v-for="(label, index) in brandingTabs"
                :key="index"
                :class="[
                  'px-3 py-1 rounded text-sm',
                  activeBrandingTab === index ? 'bg-blue-400 text-white' : 'bg-gray-100'
                ]"
                @click="activeBrandingTab = index"
              >
                {{ label }}
              </button>
            </div>
            <div class="p-4 bg-gray-100 rounded">
              <p>{{ brandingContent[activeBrandingTab] }}</p>
            </div>
          </div>
        </div>

        <div v-else-if="activeTab === 1">
          <!-- Organizing -->
          <div class="p-4 bg-gray-100 rounded">
            <h3 class="text-lg font-semibold mb-2">What can be done with organizing</h3>
            <p>
              The organizing of information could be seen since humans began to write...
            </p>
          </div>
        </div>

        <div v-else-if="activeTab === 2">
          <!-- Analysing (Nested Tab) -->
          <div>
            <div class="flex space-x-4 mb-2">
              <button
                v-for="(label, index) in analysingTabs"
                :key="index"
                :class="[
                  'px-3 py-1 rounded text-sm',
                  activeAnalysingTab === index ? 'bg-blue-400 text-white' : 'bg-gray-100'
                ]"
                @click="activeAnalysingTab = index"
              >
                {{ label }}
              </button>
            </div>
            <div class="p-4 bg-gray-100 rounded">
              <p>{{ analysingContent[activeAnalysingTab] }}</p>
            </div>
          </div>
        </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
import Navbar from '@/components/navbar copy.vue'
import { ref } from 'vue'

const activeTab = ref(0)

// Branding Nested Tabs
const activeBrandingTab = ref(0)
const brandingTabs = ['Research', 'Findings', 'Implementation']
const brandingContent = [
  `The word, brand, derives from its original and current meaning...`,
  `The marks themselves took on the term and came to be closely associated...`,
  `Branding and labeling have an ancient history...`
]

// Analysing Nested Tabs
const activeAnalysingTab = ref(0)
const analysingTabs = ['Market', 'Value']
const analysingContent = [
  `A market analysis studies the attractiveness and dynamics...`,
  `Analysis is the process of breaking a complex topic into smaller parts...`
]

// Top-level Tabs
const tabs = [
  { title: 'Branding' },
  { title: 'Organizing' },
  { title: 'Analysing' }
]
</script> 

<style scoped>
button {
  transition: all 0.3s ease;
}
</style>
