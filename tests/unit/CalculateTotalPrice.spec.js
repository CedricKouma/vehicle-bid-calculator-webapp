import { shallowMount } from '@vue/test-utils';
import CalculateTotalPrice from '@/components/CalculateTotalPrice.vue';
import VehicleService from '@/services/VehicleService';

// Mock the VehicleService
jest.mock('@/services/VehicleService', () => ({
  getTotalPrice: jest.fn()
}));

describe('CalculateTotalPrice.vue', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

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
    const mockResponse = { data: { totalPrice: 1500 } };
    VehicleService.getTotalPrice.mockResolvedValue(mockResponse);

    const wrapper = shallowMount(CalculateTotalPrice);
    await wrapper.setData({ basePrice: 1000, vehicleType: 'Common' });
    await wrapper.find('form').trigger('submit.prevent');

    expect(wrapper.vm.totalPrice).toBe(1500);
    expect(VehicleService.getTotalPrice).toHaveBeenCalledWith(1000, 'Common');
  });

  it('calculates the total price correctly for a luxury vehicle', async () => {
    const mockResponse = { data: { totalPrice: 2500 } };
    VehicleService.getTotalPrice.mockResolvedValue(mockResponse);

    const wrapper = shallowMount(CalculateTotalPrice);
    await wrapper.setData({ basePrice: 2000, vehicleType: 'Luxury' });
    await wrapper.find('form').trigger('submit.prevent');

    expect(wrapper.vm.totalPrice).toBe(2500);
    expect(VehicleService.getTotalPrice).toHaveBeenCalledWith(2000, 'Luxury');
  });
});
