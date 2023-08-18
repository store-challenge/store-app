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

export const getAllHotProducts = async limit => {
  const response = await axiosClient.get(getHotProductsEndpoint, {
    params: { limit },
  });
  const { data } = response;
  // eslint-disable-next-line no-console
  return data && data.error ? (console.error('Помилка при отриманні даних:', data.error), null) : data;
};

export const getHotProductsById = async (limit, catId) => {
  const response = await axiosClient.get(getHotProductsEndpoint, {
    params: {
      limit,
      catId,
    },
  });
  const { data } = response;
  // eslint-disable-next-line no-console
  return data && data.error ? (console.error('Помилка при отриманні даних:', data.error), null) : data;
};
