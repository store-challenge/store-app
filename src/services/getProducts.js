import axiosClient from './axiosClient';

const getProductEndpoint = 'api/v1/product';
const getProductListEndpoint = `${getProductEndpoint}/list`;
const getHotProductsEndpoint = `${getProductEndpoint}/hot`;

export const getProductById = async id => {
  const response = await axiosClient.get(`${getProductEndpoint}/${id}`);
  const { data } = response;
  // eslint-disable-next-line no-console
  return data && data.error ? (console.error('Помилка при отриманні даних:', data.error), null) : data;
};

export const getAllImages = async (id, images) => {
  const response = await axiosClient.get(`${getProductEndpoint}/${id}/`, {
    params: { images },
  });
  const { data } = response;
  // eslint-disable-next-line no-console
  return data && data.error ? (console.error('Помилка при отриманні даних:', data.error), null) : data;
};

export const getSearchProduct = searchValue => {
  axiosClient
    .get(getProductListEndpoint, {
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

export const getHotProductsById = async (limit, categoryId) => {
  const response = await axiosClient.get(getHotProductsEndpoint, {
    params: { limit, categoryId },
  });
  const { data } = response;
  // eslint-disable-next-line no-console
  return data && data.error ? (console.error('Помилка при отриманні даних:', data.error), null) : data;
};
