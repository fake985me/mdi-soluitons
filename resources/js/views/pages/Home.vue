<template>
    <Navbar />
    <Carousel />
    <products />
    <features />
    <Project/>
    <Customer />
    
    <div class="container mt-5">
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of your application.</p>
        <router-link to="/about" class="btn btn-primary">Go to About Page</router-link>
    </div>
    <foo />
</template>

<script setup>
import Navbar from '@/components/navbar copy.vue';
import Carousel from '../../components/carousel.vue';
import products from '../../layout/ProductView.vue';
import Foo from '@/components/footer.vue';
import features from '../../layout/features.vue';
import Project from '@/layout/ProjectView.vue';
import Customer from '../../components/customer.vue';

</script>