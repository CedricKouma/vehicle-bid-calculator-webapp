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

<script>
import VehicleService from '../services/VehicleService'

export default {
  data () {
    return {
      basePrice: null,
      vehicleType: 'Common',
      totalPrice: null
    }
  },
  methods: {
    async calculateTotalPrice () {
      try {
        const response = await VehicleService.getTotalPrice(this.basePrice, this.vehicleType)
        this.totalPrice = response.data.totalPrice
      } catch (error) {
        console.error('There was an error calculating the price:', error)
      }
    }
  }
}
</script>
