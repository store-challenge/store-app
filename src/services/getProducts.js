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

export const getProductList = async ({ configProducts }) => {
  const { data } = await axiosClient.get(getProductListEndpoint, {
    params: configProducts,
  });
  // eslint-disable-next-line no-console
  return data && data.error ? (console.error('Помилка при отриманні даних:', data.error), null) : data;
};
