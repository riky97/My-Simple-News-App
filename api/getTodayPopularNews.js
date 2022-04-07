import React from 'react';
import axios from 'axios';
import {API_KEY} from '@env';

let dataSent = {
  error: false,
  msg: '',
  data: [],
};

export const getTodayPopularNews = selectedId => {
  const getData = async selectedId => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${selectedId}&apiKey=${API_KEY}`,
      );
      const data = response.data;
      dataSent = {
        error: false,
        msg: data.status,
        data: data.articles,
      };
      return dataSent;
    } catch (error) {
      console.log('error', error);
      dataSent = {
        error: true,
        msg: error.message,
        data: [],
      };
      return dataSent;
    }
  };
  return getData(selectedId);
};
