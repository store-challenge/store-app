import axiosClient from './axiosClient';

const getBrandsEndpoint = 'api/v1/brand/bySubcategory';

export const getBrandsList = async subcategoryId => {
  const response = await axiosClient.get(getBrandsEndpoint, {
    params: { subcategoryId },
  });
  const { data } = response;
  // eslint-disable-next-line no-console
  return data && data.error ? (console.error('Помилка при отриманні даних:', data.error), null) : data;
};
