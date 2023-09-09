import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import axiosClient from '../services/axiosClient';

const AUTH0_USER_AUDIENCE = process.env.REACT_APP_AUTH0_AUDIENCE;

const AuthProvider = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    getAccessTokenSilently({
      authorizationParams: {
        audience: AUTH0_USER_AUDIENCE,
      },
    })
      .then(token =>
        axiosClient.interceptors.request.use(config => {
          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `Bearer ${token}`;
        }),
      )
      // eslint-disable-next-line no-console
      .catch(error => console.error(error));
  }, [getAccessTokenSilently]);

  return <div>{children}</div>;
};
export default AuthProvider;
