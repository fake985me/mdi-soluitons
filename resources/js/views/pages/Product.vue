<template>
  <Navbar />
  <div>
    <!-- Mobile filter dialog -->
    <TransitionRoot as="template" :show="mobileFiltersOpen">
      <Dialog class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>
        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
            enter-from="translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0" leave-to="translate-x-full">
            <DialogPanel
              class="relative ml-auto w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div class="flex items-center justify-between px-4">
                <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                <button type="button" class="-mr-2 p-2 text-gray-400" @click="mobileFiltersOpen = false">
                  <XMarkIcon class="h-6 w-6" />
                </button>
              </div>
              <form class="mt-4 border-t border-gray-200">
                <ul role="list" class="px-2 py-3 font-medium text-gray-900">
                  <li v-for="(category, index) in currentCategories" :key="index" @click="activeCategoryTab = index"
                    :class="[
                      'px-2 py-2 rounded cursor-pointer',
                      activeCategoryTab === index ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-gray-100'
                    ]">
                    {{ category }}
                  </li>
                </ul>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24 flex-wrap">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
        <div class="flex space-x-2 mt-4 sm:mt-0">
          <button v-for="(tab, index) in tabs" :key="index" @click="switchTab(index)" :class="[
            'px-4 py-2 rounded text-sm font-medium',
            activeTab === index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]">
            {{ tab.title }}
          </button>
          <button @click="mobileFiltersOpen = true" class="lg:hidden px-4 py-2 bg-gray-100 text-gray-800 rounded">
            Filter
          </button>
        </div>
      </div>

      <!-- Filters & Product grid -->
      <section aria-labelledby="products-heading" class="pb-24 pt-6">
        <h2 id="products-heading" class="sr-only">Products</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          <!-- Sidebar filters -->
          <form class="hidden lg:block">
            <ul role="list" class="space-y-3 text-sm font-medium text-gray-900">
              <li v-for="(category, index) in currentCategories" :key="index" @click="activeCategoryTab = index" :class="[
                'cursor-pointer rounded px-2 py-2',
                activeCategoryTab === index ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-gray-100'
              ]">
                {{ category }}
              </li>
            </ul>
          </form>

          <!-- Products -->
          <div class="lg:col-span-3">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="card in paginatedCards" :key="card.id" class="bg-white rounded-lg shadow hover:shadow-md">
                <RouterLink :to="`/product/${card.id}`">
                  <img :src="card.image" :alt="card.title" class="w-full h-48 object-cover rounded-t-lg" />
                </RouterLink>
                <div class="p-4">
                  <h3 class="text-lg font-semibold text-gray-900 truncate">
                    <RouterLink :to="`/product/${card.id}`" class="hover:underline">
                      {{ card.title }}
                    </RouterLink>
                  </h3>
                  <p class="text-sm text-gray-500">{{ card.date }}</p>
                  <p class="text-sm mt-1 text-gray-700">{{ card.author }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  <Foo />
</template>

<script setup>
import { ref, computed } from 'vue'
import Navbar from '@/components/navbar copy.vue'
import Foo from '@/components/footer.vue'
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'

// State
const mobileFiltersOpen = ref(false)
const activeTab = ref(0)
const activeCategoryTab = ref(0)

const tabs = [
  { title: 'XGS-PON' },
  { title: 'G-PON' },
  { title: 'SWITCH' }
]

// Kategori berdasarkan tab
const categories = {
  0: ['XGS-PON OLT', 'XGS-PON ONU/PoE', 'XGS-PON ONT'],
  1: ['G-PON OLT', 'G-PON ONT', 'G-PON ONU'],
  2: ['L2 Switch', 'L3 Switch', 'PoE Switch']
}

const currentCategories = computed(() => categories[activeTab.value] || [])

// Data dummy produk
const cards = ref([
  {
    id: 1,
    title: 'OLT GPON-16X',
    image: 'https://via.placeholder.com/400x300',
    date: 'June 2025',
    author: 'ZTE',
    category: 'XGS-PON OLT'
  },
  {
    id: 2,
    title: 'L2 Switch 24 Port',
    image: 'https://via.placeholder.com/400x300',
    date: 'June 2025',
    author: 'Cisco',
    category: 'L2 Switch'
  },
  {
    id: 3,
    title: 'G-PON ONT Dual Band',
    image: 'https://via.placeholder.com/400x300',
    date: 'June 2025',
    author: 'Huawei',
    category: 'G-PON ONT'
  },
])

// Filter produk berdasarkan tab dan kategori aktif
const filteredCards = computed(() => {
  const selectedCategory = currentCategories.value[activeCategoryTab.value]
  return cards.value.filter(card => card.category === selectedCategory)
})

// Fungsi ganti tab
function switchTab(index) {
  activeTab.value = index
  activeCategoryTab.value = 0 // reset kategori saat ganti tab
}

const currentPage = ref(1)
const itemsPerPage = ref(6) // Ubah sesuai keinginan

const totalPages = computed(() => {
  return Math.ceil(filteredCards.value.length / itemsPerPage.value)
})

const paginatedCards = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredCards.value.slice(start, end)
})

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

</script>
