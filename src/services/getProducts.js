import axiosClient from './axiosClient';

const getSearchProductEndpoint = 'api/v1/product/list';
const getHotProductsEndpoint = 'api/v1/product/hot';

export const getSearchProduct = searchValue => {
  axiosClient
    .get(getSearchProductEndpoint, {
      params: {
        search: searchValue,
      },
    })
    .then(response => response.data)
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('Search Error:', error);
    });
};

export const getHotProducts = async limit => {
  await axiosClient
    .get(getHotProductsEndpoint, {
      params: { limit },
    })
    .then(response => response.data)
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('Search Error:', error);
    });
};
