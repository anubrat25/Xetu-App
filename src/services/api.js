// src/services/api.js

import axios from 'axios';

const API_URL = 'https://your-backend-api-url.com';

export const fetchRickshaws = async () => {
  try {
    const response = await axios.get(`${API_URL}/rickshaws`);
    return response.data;
  } catch (error) {
    console.error('Error fetching rickshaws', error);
    throw error;
  }
};