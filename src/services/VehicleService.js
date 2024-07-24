import apiClient from './api'
import VehicleTotalPriceResponse from '@/models/VehicleTotalPriceResponse'

export default {
  async getTotalPrice (basePrice, vehicleType) {
    const response = await apiClient.get('VehiculeCalculation/getTotalPrice', {
      params: {
        basePrice: basePrice,
        vehicleType: vehicleType
      }
    })
    return new VehicleTotalPriceResponse(response.data.totalPrice)
  }
}
