import axiosClient from './axiosClient';

const getAllSubCategoriesEndpoint = 'api/v1/sub-category/list';

export const getAllSubCategories = async categoryId => {
  const response = await axiosClient.get(getAllSubCategoriesEndpoint, {
    params: { categoryId },
  });
  const { data } = response.data;
  // eslint-disable-next-line no-console
  return data && data.error ? (console.error('Помилка:', data.error), null) : data;
};
