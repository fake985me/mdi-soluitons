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
              <div v-for="card in filteredCards" :key="card.id"
                class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <RouterLink :to="`/product/${card.id}`">
                  <img :src="card.image" :alt="card.title" class="w-fit h-46 place-items-center rounded-t-lg p-5" />
                </RouterLink>
                <div class="px-4 py-3 w-72">
                  <h3 class="text-lg font-semibold text-gray-900 truncate">
                    <RouterLink :to="`/product/${card.id}`" class="hover:underline">
                      {{ card.title }}
                    </RouterLink>
                  </h3>
                  <p class="text-sm text-gray-500">{{ card.texta }}</p>
                  <p class="text-sm text-gray-500">{{ card.textb }}</p>
                  <p class="text-sm text-gray-500">{{ card.textc }}</p>
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

import xgsa from '@/assets/img/product/gpon/olt/olt-v8208.png';
import xgsb from '@/assets/img/product/gpon/olt/olt-v5832xg.png';
import xgsc from "@/assets/img/product/gpon/onu/onu-v2724xt.png";
import xgsd from "@/assets/img/product/gpon/ont/ont-h840c.png";

import ga from "@/assets/img/product/gpon/onu/onu-d2008gpe.png";
import gb from "@/assets/img/product/gpon/olt/v-8106.png";
import gc from "@/assets/img/product/gpon/olt/olt-v8102.png";
import gd from "@/assets/img/product/gpon/olt/olt-V5816.png";
import ge from "@/assets/img/product/gpon/olt/olt-V5808.png";
import gf from "@/assets/img/product/gpon/olt/olt-V5804.png";
import gg from "@/assets/img/product/gpon/ont/ont-h660-gma.png";
import gh from "@/assets/img/product/gpon/ont/ont-h660nb.png";
import gi from "@/assets/img/product/gpon/ont/ont-h665.png";
import gj from "@/assets/img/product/gpon/onu/onu-d2224gp.png";
import gk from "@/assets/img/product/gpon/onu/D2224g.png";
import gl from "@/assets/img/product/gpon/onu/onu-v2724gg.png";

import sa from "@/assets/img/product/switch/switch-v-8610.png";
import sb from "@/assets/img/product/switch/switch-v-8607.png";
import sc from "@/assets/img/product/switch/switch-v-8605.png";
import sd from "@/assets/img/product/switch/l2-c2100.png";
import se from "@/assets/img/product/switch/l2-c2300.png";
import sf from "@/assets/img/product/switch/l3-m4000.png";
import sg from "@/assets/img/product/switch/l3-m3500.png";


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
  0: ['XGS-PON OLT', 'XGS-PON ONU', 'XGS-PON ONT'],
  1: ['G-PON OLT', 'G-PON ONT', 'G-PON ONU/PoE'],
  2: ['Core Switch', 'L2 Switch', 'L3 Switch']
}

const currentCategories = computed(() => categories[activeTab.value] || [])

// Data dummy produk
const cards = ref([
  {
    id: 1,
    title: 'V8208 XGS-PON OLT',
    image: xgsa,
    texta: '48 port XGSPON',
    textb: '96 port GPON',
    textc: null,
    category: 'XGS-PON OLT'
  },
  {
    id: 2,
    title: 'V5832XG XGS-PON OLT',
    image: xgsb,
    texta: '16 port XGSPON',
    textb: '32 port GPON',
    textc: null,
    category: 'XGS-PON OLT'
  },
  {
    id: 3,
    title: 'V2724XT XGS-PON ONU',
    image: xgsc,
    texta: '24 port 10G RJ45',
    textb: '4 port 1/10G SFP28',
    textc: null,
    category: 'XGS-PON ONU'
  },
  {
    id: 4,
    title: 'H840C XGS-PON ONT',
    image: xgsd,
    texta: '4xGE RJ45',
    textb: '1x10GE RJ45',
    textc: null,
    category: 'XGS-PON ONT'
  },
  {
    id: 5,
    title: 'D2008GPE G-PON ONU/PoE',
    image: ga,
    texta: '8 port PoE',
    textb: null,
    textc: null,
    category: 'G-PON ONU/PoE'
  },
  {
    id: 6,
    title: 'V-8106 G-PON OLT',
    image: gb,
    texta: '96 port GPON',
    textb: null,
    textc: null,
    category: 'G-PON OLT'
  },
  {
    id: 7,
    title: 'V-8102 G-PON OLT',
    image: gc,
    texta: '32 port GPON',
    textb: null,
    textc: null,
    category: 'G-PON OLT'
  },
  {
    id: 8,
    title: 'V5816 G-PON OLT',
    image: gd,
    texta: '16 port GPON',
    textb: null,
    textc: null,
    category: 'G-PON OLT'
  },
  {
    id: 9,
    title: 'V5808 G-PON OLT',
    image: ge,
    texta: '8 port GPON',
    textb: null,
    textc: null,
    category: 'G-PON OLT'
  },
  {
    id: 10,
    title: 'V5804 G-PON OLT',
    image: gf,
    texta: '4 port GPON',
    textb: null,
    textc: null,
    category: 'G-PON OLT'
  },
  {
    id: 11,
    title: 'H660-GMA G-PON ONT',
    image: gg,
    texta: '4xGE RJ45',
    textb: '1xPOTS RJ11',
    textc: null,
    category: 'G-PON ONT'
  },
  {
    id: 12,
    title: 'H660NB G-PON ONT',
    image: gh,
    texta: '4xGE RJ45',
    textb: null,
    textc: null,
    category: 'G-PON ONT'
  },
  {
    id: 13,
    title: 'H665 G-PON ONT',
    image: gi,
    texta: '1xGE RJ45',
    textb: null,
    textc: null,
    category: 'G-PON ONT'
  },
  {
    id: 14,
    title: 'D2224GP G-PON ONU/PoE',
    image: gj,
    texta: '24 port PoE',
    textb: null,
    textc: null,
    category: 'G-PON ONU/PoE'
  },
  {
    id: 15,
    title: 'D2224G G-PON ONU',
    image: gk,
    texta: '24 port RJ45',
    textb: '4x SFP',
    textc: null,
    category: 'G-PON ONU/PoE'
  },
  {
    id: 16,
    title: 'V2724GG G-PON ONU',
    image: gl,
    texta: '24 port 1G SFP',
    textb: '4 port 10G SFP/SFP+',
    textc: null,
    category: 'G-PON ONU/PoE'
  },
  {
    id: 17,
    title: 'V-8610 Core Switch',
    image: sa,
    texta: '96x40G/100G',
    textb: '384x1G/10G',
    textc: '18u 19" Rack',
    category: 'Core Switch'
  },
  {
    id: 18,
    title: 'V-8607 Core Switch',
    image: sb,
    texta: '60x40G/100G',
    textb: '240x1G/10G',
    textc: '8u 19" Rack',
    category: 'Core Switch'
  },
  {
    id: 19,
    title: 'V-8605 Core Switch',
    image: sc,
    texta: '36x40G',
    textb: '144x1G/10G',
    textc: '5u 19" Rack',
    category: 'Core Switch'
  },
  {
    id: 20,
    title: 'L2-C2100 L2 Switch',
    image: sd,
    texta: '2 x 1/10GBase-R (SFP/SFP+) 8 x 10/25GBase-R (SFP+/SFP28) 2 x 100GBase-R (QSFP28) or 1 x 100GBase-R (QSFP-DD)',
    textb: null,
    textc: null,
    category: 'L2 Switch'
  },
  {
    id: 21,
    title: 'L2-C2300 L2 Switch',
    image: se,
    texta: '4 x 1/10GBase-R (SFP/SFP+) 16 x 10/25GBase-R (SFP+/SFP28) 6 x 100GBase-R (QSFP28/QSFP-DD)',
    textb: null,
    textc: null,
    category: 'L2 Switch'
  },
  {
    id: 22,
    title: 'L3-M4000 L3 Switch',
    image: sf,
    texta: '32 port 1/10/25GBase-R (SFP28)',
    textb: '2 port 100GBase-R (SFP+)',
    textc: null,
    category: 'L3 Switch'
  },
  {
    id: 23,
    title: 'L3-M3500 L3 Switch',
    image: sg,
    texta: '48-port - 1GBase-R (SFP) or 10GBase-R (SFP+) or 25GBase-R (SFP28)',
    textb: '6-port - 40GBase-R (QSFP+) or 100GBase-R (QSFP28)',
    textc: null,
    category: 'L3 Switch'
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
