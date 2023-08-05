import axiosClient from './axiosClient';

const getAllCategoriesEndpoint = 'api/v1/category/list';
const getSelectedCategoryEndpoint = 'api/v1/category';

export const getAllCategories = async () => {
  const response = await axiosClient.get(getAllCategoriesEndpoint);
  const { data } = response.data;
  return data && data.error ? (console.error('Помилка:', data.error), null) : data;
};

export const getSelectedCategory = async categoryId => {
  const response = await axiosClient.get(`${getSelectedCategoryEndpoint}/${categoryId}`);
  const { data } = response;
  return data && data.error ? (console.error('Помилка:', data.error), null) : data;
};
