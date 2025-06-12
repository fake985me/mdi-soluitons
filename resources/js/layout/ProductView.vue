<template>
  <section class="py-8 px-4 relative" id="Product">
    <div class="text-center mb-6">
      <h2 class="text-3xl font-bold">Our Products</h2>
      <p class="text-gray-500">choose what you need</p>
    </div>

    <!-- Tabs -->
    <div class="flex justify-center flex-wrap gap-2 mb-6">
      <div v-for="(tab, tabName) in tabs" :key="tabName" @click="setTabActive(tabName)"
        class="cursor-pointer px-4 py-2 border rounded-md text-sm font-medium" :class="{
          'bg-gray-900 text-white': tabName === activeTab,
          'bg-gray-100 text-gray-700': tabName !== activeTab
        }">
        {{ tabName }}
      </div>
    </div>

    <!-- Card container -->
    <div class="relative overflow-hidden max-w-7xl mx-auto">
      <div class="flex justify-center gap-6 transition-all duration-500 ease-in-out">
        <div v-for="(card, index) in groupedCards[currentIndex]" :key="index"
          class="bg-white shadow-md rounded-lg w-full max-w-xs p-4 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
          <img :src="card.logo" alt="logo" class="h-8 object-contain mb-2" />
          <RouterLink :to="`/product/${card.slug}`" class="w-full flex flex-col items-center">
            <img :src="card.image" :alt="card.title" class="h-28 object-contain mb-2" />
            <h4 class="text-base font-semibold">{{ card.title }}</h4>
            <p class="text-sm text-gray-600 mt-1">{{ card.body }}</p>
          </RouterLink>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button @click="prevSlide"
        class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700 text-white p-2 rounded-full z-10">
        ❮
      </button>
      <button @click="nextSlide"
        class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700 text-white p-2 rounded-full z-10">
        ❯
      </button>

      <!-- Dots -->
      <div class="flex justify-center mt-6 gap-2 relative z-10">
        <button v-for="(group, idx) in groupedCards" :key="idx"
          class="w-3 h-3 rounded-full bg-gray-300 transition-colors duration-300"
          :class="{ 'bg-blue-600': idx === currentIndex }" @click="goToSlide(idx)"></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import useTabs from '@/modules/tabs'

const { tabs } = useTabs()

const activeTab = ref('XGS-PON')
const currentIndex = ref(0)
const cardsPerSlide = ref(3)

function setTabActive(tab) {
  activeTab.value = tab
  currentIndex.value = 0
}

function nextSlide() {
  const total = groupedCards.value.length
  currentIndex.value = (currentIndex.value + 1) % total
}

function prevSlide() {
  const total = groupedCards.value.length
  currentIndex.value = (currentIndex.value - 1 + total) % total
}

function goToSlide(index) {
  currentIndex.value = index
}

function updateCardsPerSlide() {
  const width = window.innerWidth
  if (width < 640) {
    cardsPerSlide.value = 1
  } else if (width < 1024) {
    cardsPerSlide.value = 2
  } else {
    cardsPerSlide.value = 4
  }
}

onMounted(() => {
  updateCardsPerSlide()
  window.addEventListener('resize', updateCardsPerSlide)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateCardsPerSlide)
})

const groupedCards = computed(() => {
  const cards = tabs.value[activeTab.value]?.cards || []
  const result = []
  for (let i = 0; i < cards.length; i += cardsPerSlide.value) {
    result.push(cards.slice(i, i + cardsPerSlide.value))
  }
  return result
})
</script>