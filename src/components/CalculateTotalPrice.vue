<template>
  <div>
    <h1>Vehicle Bid Calculator</h1>
    <form @submit.prevent="calculateTotalPrice">
      <div>
        <label for="basePrice">Base Price:</label>
        <input type="number" v-model="basePrice" required />
      </div>
      <div>
        <label for="vehicleType">Vehicle Type:</label>
        <select v-model="vehicleType" required>
          <option value="Common">Common</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>
      <button type="submit">Calculate Total Price</button>
    </form>
    <div v-if="totalPrice !== null">
      <h2>Total Price: {{ totalPrice }}</h2>
    </div>
  </div>
</template>

<script setup>
import useCalculateTotalPrice from './CalculateTotalPrice'

const { basePrice, vehicleType, totalPrice, calculateTotalPrice } = useCalculateTotalPrice()
</script>

<style src="../styles/CalculateTotalPrice.css"></style>
