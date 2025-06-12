import { createRouter, createWebHistory } from "vue-router";

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/views/pages/Home.vue"),
        },
        {
            path: "/product",
            name: "product",
            component: () => import("@/views/pages/Product.vue"),
        },
        {
            path: "/product/:id",
            name: "productDetail",
            component: () => import("@/views/pages/product/ProductDetail.vue"),
            props: true,
        },
        {
            path: "/product/olt:slug?",
            name: "olt",
            component: () => import("@/views/pages/product/olt/Olt.vue"),
        },
        {
            path: "/product/switch:slug?",
            name: "switch",
            component: () => import("@/views/pages/product/switch/Switch.vue"),
        },
        {
            path: "/product/ont:slug?",
            name: "ont",
            component: () => import("@/views/pages/product/ont/Ont.vue"),
        },
        {
            path: "/solutions",
            name: "solutions",
            component: () => import("@/views/pages/product/Category.vue"),
        },
    ],
});
export default routes;
