import { shallowMount } from '@vue/test-utils';
import CalculateTotalPrice from '@/components/CalculateTotalPrice.vue';
import VehicleService from '@/services/VehicleService';
import VehicleTotalPriceResponse from '@/models/VehicleTotalPriceResponse';

// Mock the VehicleService
jest.mock('@/services/VehicleService', () => ({
  getTotalPrice: jest.fn()
}));

describe('CalculateTotalPrice.vue', () => {
  it('renders a form', () => {
    const wrapper = shallowMount(CalculateTotalPrice);
    expect(wrapper.find('form').exists()).toBe(true);
  });

  it('initializes with correct elements', () => {
    const wrapper = shallowMount(CalculateTotalPrice);
    expect(wrapper.find('input[type="number"]').exists()).toBe(true);
    expect(wrapper.find('select').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('calculates the total price correctly for a common vehicle', async () => {
    // Arrange
    const mockResponse = new VehicleTotalPriceResponse(1500);
    VehicleService.getTotalPrice.mockResolvedValue(mockResponse);

    const wrapper = shallowMount(CalculateTotalPrice);

    // Set initial data
    wrapper.vm.basePrice = 1000;
    wrapper.vm.vehicleType = 'Common';

    // Act
    await wrapper.find('form').trigger('submit.prevent');

    // Assert
    expect(wrapper.vm.totalPrice).toBe(1500);
  });

  it('calculates the total price correctly for a luxury vehicle', async () => {
    // Arrange
    const mockResponse = new VehicleTotalPriceResponse(2500);
    VehicleService.getTotalPrice.mockResolvedValue(mockResponse);

    const wrapper = shallowMount(CalculateTotalPrice);

    // Set initial data
    wrapper.vm.basePrice = 2000;
    wrapper.vm.vehicleType = 'Luxury';

    // Act
    await wrapper.find('form').trigger('submit.prevent');

    // Assert
    expect(wrapper.vm.totalPrice).toBe(2500);
  });
});
