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
// import useTabs from '@/modules/tabs'

// const { tabs } = ()

const activeTab = ref('XGS-PON')
const currentIndex = ref(0)
const cardsPerSlide = ref(4)

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


// import { ref, computed, onMounted, onBeforeUnmount } from "vue";

import bg from "@/assets/img/bg_a.png";
import a from "@/assets/img/product/gpon/olt/olt-v8208.png"; // Import your CSS file
import b from "@/assets/img/product/gpon/olt/olt-v5832xg.png";
import c from "@/assets/img/product/gpon/ont/ont-h840c.png"; // Import your CSS file
import d from "@/assets/img/product/gpon/onu/onu-v2724xt.png"; // Import your CSS file
import e from "@/assets/img/product/gpon/olt/olt-V5816.png"; // Import your CSS file
import f from "@/assets/img/product/gpon/ont/ont-h660-gma.png";
import g from "@/assets/img/product/gpon/onu/onu-v2724gg.png";
import h from "@/assets/img/product/gpon/onu/onu-d2224gp.png";
import i from "@/assets/img/product/switch/l3-switch-v5648g.png";
import j from "@/assets/img/product/switch/l3-switch-v5624g.png";

// const activeTab = ref('XGS/G-PON')
// const currentIndex = ref(0)
// const cardsPerSlide = ref(3)
// function useTabs() {
const tabs = ref({
  "XGS-PON": {
    cards: [
      {
        id: 1,
        slug: "V8208",
        title: "V8208",
        body: "The V8208 is a 6RU height chassis PON Optical Line Termination (OLT) supporting XGS-PON, GPON as well as 10GE Active Ethernet service. It is designed for large-scale deployment in FTTH/FTTO networks.",
        image: a,
        logo: bg,
      },
      {
        id: 2,
        slug: "V5832XG",
        title: "V5832XG",
        body: "The V5832XG is a multi-platform system designed to allow the use of a mix of Gigabit Ethernet (SFP, Gigabit Copper) and EPON OLT interfaces, taking network flexibility into consideration.",
        image: b,
        logo: bg,
      },
      {
        id: 3,
        slug: "H840C",
        title: "H840C",
        body: "The H840C optical network terminal (ONT) is targeted for all subscribers requiring multiple POTS and high-speed data interfaces in a cost-effective indoor housing. H840C support a standalone device and with fan-less design.",
        image: c,
        logo: bg,
      },
      {
        id: 4,
        slug: "V2724XT",
        title: "V2724XT",
        body: "The V2724XT is a cost effective single-board 10 Gigabit Ethernet switch. It has been designed as ultra-compact customer premise equipment with the reliable Layer 2 functionalities.",
        image: d,
        logo: bg,
      },
    ],
  },
  "G-PON": {
    cards: [
      {
        id: 1,
        slug: "V5816",
        title: "V5816",
        body: "V5816F can be used as a GPON Optical Line Termination (OLT) supporting 16-Port GPON interfaces as well as L3 switch of supporting 4-Port 10GBase-R (SFP+)and 4-Port 10/100/1000Base-T(RJ45) service. It terminates the traffic coming from the subscriber lines and consolidates it on one or more Gigabit Ethernet interfaces towards the metropolitan area.",
        image: e,
        logo: bg,
      },
      {
        id: 2,
        slug: "H660GMA",
        title: "H660GMA",
        body: "H660GM-A optical network terminal (ONT) is targeted for all subscribers requiring high-speed data interfaces in a cost-effective indoor housing. Fully compliant with ITU-T G.984 standards, the H660GM-A supports data rates of 1.25Gbps upstream and 2.5Gbps downstream. The H660GM-A provides 1 GPON uplink port, 4 Gigabit Ethernet (10/100/1000Base-T) ports, Wireless LAN interface, and 1 FXS voice port that enhance the ability to deliver demanding data/Wi-Fi/VoIP services.",
        image: f,
        logo: bg,
      },
      {
        id: 3,
        slug: "V2724GG",
        title: "V2724GG",
        body: "The V2724GG is a cost effective single-board Gigabit Ethernet switch. It has been designed as ultra-compact customer premise equipment with the reliable Layer 2 functionalities. The V2724GG is comprised of 24-port 1000Base-X(SFP) and 4-port 10GBase-R(SFP/SFP+).",
        image: g,
        logo: bg,
      },
    ],
  },
  "SWITCH": {
    cards: [
      {
        id: 1,
        slug: "D2224GP",
        title: "D2224GP",
        body: "Dasan Networks' D2224GP is a gigabit Ethernet switch that supports Power over Ethernet (PoE) function for 24 subscriber ports.",
        image: h,
        logo: bg,
      },
      {
        id: 2,
        slug: "V5648G",
        title: "V5648G",
        body: "The V5648G is a 1U high-performance stand-alone enterprise L3 switch designed for data center, campus, and branch office environments.",
        image: i,
        logo: bg,
      },
      {
        id: 3,
        slug: "V5624G",
        title: "V5624G",
        body: "V5624G is an enterprise-class standalone switch with 1U form factor for data center, campus and branch office environments. This switch offers 24 1Gigabit Ethernet ports (RJ-45/SFP) and provides high-bandwidth switching, filtering, and traffic management without delaying data",
        image: j,
        logo: bg,
      },
    ],
  },
});

// return { tabs };
// }

// export default useTabs; // ✅ ekspor default

</script>