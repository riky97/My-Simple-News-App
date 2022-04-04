import React from 'react';
import axios from 'axios';

export const getCategory = () => {
  const getCategory = async () => {
    try {
      const request = {
        method: 'GET',
        url: '../category.json',
      };
      const response = await axios.request(request);
      const data = response.data;
      console.log('data', response);
      return data;
    } catch (error) {
      console.log('error', error);
    }
  };
  return getCategory();
};
