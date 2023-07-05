import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import axiosClient from '../services/axiosClient'

const AUTH0_USER_AUDIENCE = process.env.REACT_APP_AUTH0_AUDIENCE;
const AUTH0_USER_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;

const AuthProvider = ({ children }) => {
  const { user, getAccessTokenSilently } = useAuth0();
  useEffect(() => {
     const domain = AUTH0_USER_DOMAIN;
     getAccessTokenSilently({
       authorizationParams: {
         audience: `https://${domain}/api/v2/`,
       },
     })
       .then((token) =>
         axiosClient.interceptors.request.use((config) => {
           config.headers.Authorization = `Bearer ${token}`;
           console.log(token);
         })
       )
       .catch((error) => console.log(error));
   }, [getAccessTokenSilently]);

   return <div>{children}</div>;
};
export default AuthProvider;
