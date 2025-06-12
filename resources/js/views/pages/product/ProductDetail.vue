<template>
    <Navbar />
    <main class="flex-1 h-screen overflow-y-auto">
        <section>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 class="text-3xl font-bold text-gray-900 mb-6">Product Detail</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <img src="https://via.placeholder.com/400x300" alt="Product Image"
                            class="w-full h-auto rounded-lg shadow-md">
                    </div>
                    <div>
                        <h2 class="text-xl font-semibold mb-2">Product Title</h2>
                        <p class="text-gray-700 mb-4">Product description goes here. It provides details about the
                            product features and specifications.</p>
                        <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
</template>
<script setup>
import Navbar from '@/components/navbar copy.vue'
import Footer from '@/components/footer.vue'
</script>