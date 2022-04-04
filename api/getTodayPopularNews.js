import React from 'react';
import axios from 'axios';

let dataSent = {
  error: false,
  msg: '',
  data: [],
};

export const getTodayPopularNews = selectedId => {
  const getData = async selectedId => {
    try {
      // const options = {
      //   method: 'GET',
      //   url: 'https://newsapi.org/v2/everything?from=2022-03-28&to=2022-03-28&sortBy=popularity&apiKey=a989ea706a3f489ca7d8da67224428cf',
      // };
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&category=' +
          selectedId +
          '&apiKey=a989ea706a3f489ca7d8da67224428cf',
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
