import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import axiosClient from '../services/axiosClient'

const AUTH0_USER_AUDIENCE = process.env.REACT_APP_AUTH0_AUDIENCE;

const AuthProvider = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();
  useEffect(() => {
     getAccessTokenSilently({
       authorizationParams: {
         audience: AUTH0_USER_AUDIENCE,
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
