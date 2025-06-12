<template>
  <div class="border rounded-xl p-3 shadow hover:shadow-md transition">
    <img :src="product.image" alt="Product" class="w-full h-40 object-cover rounded-md" />
    <h2 class="text-lg font-semibold mt-2">{{ product.name }}</h2>
    <p class="text-sm text-gray-500">{{ product.category }}</p>
    <p class="text-indigo-600 font-bold mt-1">Rp{{ product.price.toLocaleString() }}</p>
  </div>
</template>

<script setup>
defineProps({ product: Object });
</script>
