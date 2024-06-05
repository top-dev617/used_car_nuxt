<template>
  <div class="cars">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="car in cars" :key="car.id" class="car-card" @click="showDetails(car)">
        <img :src="car.image" alt="Car image" />
        <h3>{{ car.make }} {{ car.model }}</h3>
        <p>{{ car.year }} - ${{ car.price }}</p>
      </div>
      <modal v-if="selectedCar" :car="selectedCar" @close="selectedCar = null" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Modal from '@/components/Modal.vue'

export default {
  components: {
    Modal
  },
  data() {
    return {
      selectedCar: null,
      loading: true
    }
  },
  computed: {
    ...mapState(['cars'])
  },
  methods: {
    showDetails(car) {
      this.selectedCar = car
    }
  },
  async mounted() {
    await this.$store.dispatch('fetchCars')
    this.loading = false
  }
}
</script>

<style scoped>
.cars {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.car-card {
  width: calc(33.333% - 20px);
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s;
}
.car-card:hover {
  transform: scale(1.05);
}
</style>
