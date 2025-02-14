import axios from 'axios';

const API_BASE_URL = 'https://api.bettercar.com'; // Example URL

export const fetchFuelData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/fuel-status`);
    return response.data; // Example: { fuelLevel: 80, mileage: 1200 }
  } catch (error) {
    console.error('Error fetching fuel data:', error);
    return null;
  }
};
