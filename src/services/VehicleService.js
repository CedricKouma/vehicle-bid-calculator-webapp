import apiClient from './api'

export default {
  getTotalPrice (basePrice, vehicleType) {
    return apiClient.get('/VehiculeCalculation/getTotalPrice', {
      params: {
        basePrice: basePrice,
        vehicleType: vehicleType
      }
    })
  }
}
