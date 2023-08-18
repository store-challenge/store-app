import axiosClient from './axiosClient';

const getAllCategoriesEndpoint = 'api/v1/category/list';

export const getAllCategories = async () => {
  const response = await axiosClient.get(getAllCategoriesEndpoint);
  const { data } = response.data;
  // eslint-disable-next-line no-console
  return data && data.error ? (console.error('Помилка:', data.error), null) : data;
};
