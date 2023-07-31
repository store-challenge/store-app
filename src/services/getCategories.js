import axiosClient from './axiosClient';

const getAllCategoriesEndpoint = 'api/v1/category/list';

export const getAllCategories = async () => {
  await axiosClient
    .get(getAllCategoriesEndpoint)
    .then(response => response.data)
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('Search Error:', error);
    });
};
