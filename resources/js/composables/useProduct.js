import { ref } from 'vue';
import axios from 'axios';

export function useProducts() {
  const products = ref([]);

  async function fetchProducts() {
    try {
      const response = await axios.get('/api/products');
      products.value = response.data;
    } catch (error) {
      console.error('Gagal memuat produk:', error);
    }
  }

  return { products, fetchProducts };
}
