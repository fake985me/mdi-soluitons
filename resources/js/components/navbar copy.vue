<template>
  <Disclosure as="nav" class="bg-gray-800 sticky top-0 z-50" v-slot="{ open }">
    <!-- Desktop & Mobile Top Bar -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">

        <!-- Mobile Bottom -->
         <div class="fixed inset-x-0 bottom-0 z-40 border-t border-gray-700 bg-gray-800 md:hidden">
          <div class="flex h-16 items-center justify-around">
            <RouterLink v-for="item in navigation" :key="item.name" :to="item.href"
              class="flex flex-col items-center space-y-1">
              <component :is="getMobileIcon(item.name)" class="size-8"
                :class="item.current ? 'text-white' : 'text-gray-400'" />
              <span class="text-xs text-gray-400" :class="item.current ? 'text-white' : 'text-gray-400'">
                {{ item.name }}
              </span>
            </RouterLink>
          </div>
        </div>


        <!-- Logo -->
        <div class="flex items-center justify-center">
          <div class="stroke-[40px] mx-6 mb-2 drop-shadow-xl">
            <RouterLink to="/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" class="w-16 h-16"
                viewBox="0 0 2 2">
                <path fill="#3636e0"
                  d="M.892 1.548H.678v-.296q0-.034-.008-.047t-.027-.013q-.036 0-.036.061v.296H.394v-.296q0-.034-.008-.047t-.027-.014q-.036 0-.036.061v.296H.11V1.21q0-.092.064-.157T.331.988q.095 0 .17.077Q.585.988.669.988q.107 0 .172.075.051.058.051.17zM1.374.8h.214v.458q0 .126-.069.205-.04.046-.1.073t-.125.027q-.128 0-.215-.083t-.088-.202q0-.116.087-.201t.206-.085l.057.003v.227q-.026-.02-.053-.02-.033 0-.057.023t-.024.056q0 .032.024.055t.059.023q.082 0 .082-.11zm.578.199v.549h-.214V.999zM1.926.786q-.032-.03-.075-.03t-.075.03-.032.07q0 .014.003.026l.006.016q.007.016.021.028.03.028.077.028c.047 0 .057-.009.077-.028q.014-.013.021-.029l.002-.005q.006-.017.006-.037 0-.04-.032-.07m.065.016Q1.973.754 1.928.729T1.834.717q-.046.011-.068.048L1.763.77l-.001.002q.02-.036.066-.045.048-.01.092.014t.064.069q.017.042.001.077.021-.04.004-.087m.043-.02Q2.011.722 1.955.692c-.056-.03-.076-.025-.116-.015q-.056.014-.083.058l-.004.006-.001.002Q1.775.7 1.832.689q.058-.012.114.018t.078.085q.021.051.002.094.025-.049.004-.106" />
              </svg>
            </RouterLink>
          </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex md:items-center md:space-x-4">
          <template v-for="item in navigation" :key="item.name">
            <Menu v-if="item.children" as="div" class="relative">
              <MenuButton
                :class="[isActive(item.href) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1']"
                aria-haspopup="true" aria-expanded="false">
                <component :is="item.icon" class="h-4 w-4" aria-hidden="true" />
                <span>{{ item.name }}</span>
                <ChevronDownIcon class="h-4 w-4" aria-hidden="true" />
              </MenuButton>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
                leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                <MenuItems
                  class="absolute left-0 z-30 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-for="child in item.children" :key="child.name" v-slot="{ active }">
                    <RouterLink :to="child.href"
                      :class="[isActive(child.href) ? 'bg-gray-100 text-gray-900' : active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">
                      {{ child.name }}
                    </RouterLink>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
            <RouterLink v-else :to="item.href"
              :class="[isActive(item.href) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1']">
              <component :is="item.icon" class="h-4 w-4" aria-hidden="true" />
              <span>{{ item.name }}</span>
            </RouterLink>
          </template>
          </div>

          
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex md:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            aria-label="Open main menu">
            <span class="sr-only">Open main menu</span>
            <svg v-if="!open" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </DisclosureButton>
        </div>
      </div>
    </div>

    <!-- Mobile Panel (slide-down) -->
    <DisclosurePanel class="md:hidden bg-gray-800">
      <transition name="slide-down">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <template v-for="item in navigation" :key="item.name">
            <Disclosure v-if="item.children" as="div" class="" v-slot="{ open: childOpen }">
              <DisclosureButton
                class="flex w-full justify-between items-center rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700"
                aria-haspopup="true" :aria-expanded="childOpen">
                <div class="flex items-center gap-1">
                  <component :is="item.icon" class="h-4 w-4" aria-hidden="true" />
                  <span>{{ item.name }}</span>
                </div>
                <ChevronDownIcon :class="[childOpen ? 'rotate-180' : '', 'h-5 w-5 transform transition']" aria-hidden="true" />
              </DisclosureButton>
              <DisclosurePanel class="ml-4 space-y-1">
                <template v-for="child in item.children" :key="child.name">
                  <RouterLink :to="child.href"
                    class="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700"
                    :class="isActive(child.href) ? 'bg-gray-700 text-white' : ''">
                    <component :is="child.icon" v-if="child.icon" class="h-4 w-4" aria-hidden="true" />
                    <span>{{ child.name }}</span>
                  </RouterLink>
                </template>
              </DisclosurePanel>
            </Disclosure>
            <RouterLink v-else :to="item.href"
              class="flex items-center gap-1 rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700"
              :class="isActive(item.href) ? 'bg-gray-700 text-white' : ''">
              <component :is="item.icon" class="h-4 w-4" aria-hidden="true" />
              <span>{{ item.name }}</span>
            </RouterLink>
          </template>
        </div>
      </transition>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { HomeIcon, UserGroupIcon, FolderIcon, CalendarIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import { RouterLink } from 'vue-router';


const getMobileIcon = (name) => {
  switch (name.toLowerCase()) {
    case 'home': return HomeIcon;
    case 'product': return UserGroupIcon;
    case 'our projects': return FolderIcon;
    case 'contact': return CalendarIcon;
    default: return FolderIcon;
  }
};

// Data navigasi, sekarang include icon di setiap item
const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  {
    name: 'Product', href: '/product', icon: UserGroupIcon, children: [
      { name: 'Xgs-Pon', href: '/product/' },
      { name: 'G-Pon', href: '/product/' },
      { name: 'Switch', href: '/product/' }
    ]
  },
  {
    name: 'Solutions', href: '/solutions', icon: CalendarIcon, children: [
      { name: 'Broadband Access', href: '/solutions' },
      { name: 'Subscriber CPE', href: '/solutions' },
      { name: 'Mobile Transport', href: '/solutions' }
    ]
  },
  { name: 'Our Projects', href: '/projects', icon: FolderIcon },
  { name: 'Contact', href: '/contact', icon: CalendarIcon }
];

// Untuk menandai link aktif berdasarkan path
const route = useRoute();
function isActive(href) {
  return route.path === href;
}

</script>

<style scoped>
/* Animasi slide-down untuk panel mobile */
.slide-down-enter-from {
  max-height: 0;
  opacity: 0;
  transform: scaleY(0.95);
}
.slide-down-enter-to {
  max-height: 100vh;
  opacity: 1;
  transform: scaleY(1);
}
.slide-down-enter-active {
  transition: max-height 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
}
.slide-down-leave-from {
  max-height: 100vh;
  opacity: 1;
  transform: scaleY(1);
}
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
  transform: scaleY(0.95);
}
.slide-down-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
}

/* Dark mode styling: override bg/text for dark theme */
:root.dark .bg-gray-800 { background-color: #1f2937 !important; }
:root.dark .text-gray-300 { color: #d1d5db !important; }
:root.dark .text-gray-700 { color: #9ca3af !important; }
:root.dark .text-gray-900 { color: #111827 !important; }
:root.dark .bg-white { background-color: #374151 !important; }
:root.dark .bg-gray-100 { background-color: #4b5563 !important; }
:root.dark .hover\:bg-gray-700:hover { background-color: #374151 !important; }
:root.dark .hover\:text-white:hover { color: #fff !important; }
</style>
