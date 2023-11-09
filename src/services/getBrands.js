import axiosClient from './axiosClient';

const getBrandsEndpoint = 'api/v1/brand/byProducts';
// const getBrandsEndpoint = 'api/v1/brand/bySubcategory';

export const getBrandsList = async ({ configBrands }) => {
  const { data } = await axiosClient.get(getBrandsEndpoint, {
    params: configBrands,
  });
  // eslint-disable-next-line no-console
  return data && data.error ? (console.error('Помилка при отриманні даних:', data.error), null) : data;
};
