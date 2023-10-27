import axiosClient from './axiosClient';

const getSearchProductsEndpoint = 'api/v1/search';

export const getSearchProducts = async query => {
  const response = await axiosClient.get(getSearchProductsEndpoint, {
    params: { query },
  });
  const { data } = response.data;
  // eslint-disable-next-line no-console
  return data && data.error ? (console.error('Помилка при отриманні даних:', data.error), null) : data;
};
