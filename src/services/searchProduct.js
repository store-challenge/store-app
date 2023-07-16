import axiosClient from './axiosClient';

const getSearchProductEndpoint = 'api/v1/product/list';

export const getSearchProduct = searchValue => {
  axiosClient
    .get(getSearchProductEndpoint, {
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
