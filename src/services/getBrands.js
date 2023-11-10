import axiosClient from './axiosClient';

const getBrandsEndpoint = 'api/v1/brand/byProducts';

export const getBrandsList = async ({ configBrands }) => {
  const { data } = await axiosClient.get(getBrandsEndpoint, {
    params: configBrands,
  });
  // eslint-disable-next-line no-console
  return data && data.error ? (console.error('Помилка при отриманні даних:', data.error), null) : data;
};
