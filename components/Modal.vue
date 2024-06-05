<template>
  <div class="modal" @click.self="close">
    <div class="modal-content">
      <h3>{{ car.make }} {{ car.model }}</h3>
      <img :src="car.image" alt="Car image"/>
      <p>{{ car.year }} - ${{ car.price }}</p>
      <button @click="close">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['car'], methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  text-align: center;
}
</style>
