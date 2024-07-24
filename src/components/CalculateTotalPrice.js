import { ref } from 'vue'
import VehicleService from '../services/VehicleService'

export default function useCalculateTotalPrice () {
  const basePrice = ref(null)
  const vehicleType = ref('Common')
  const totalPrice = ref(null)

  const calculateTotalPrice = async () => {
    try {
      const response = await VehicleService.getTotalPrice(basePrice.value, vehicleType.value)
      totalPrice.value = response.totalPrice
    } catch (error) {
      console.error('There was an error calculating the price:', error)
    }
  }

  return {
    basePrice,
    vehicleType,
    totalPrice,
    calculateTotalPrice
  }
}
