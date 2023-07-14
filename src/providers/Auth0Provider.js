import { Auth0Provider as Auth0 } from '@auth0/auth0-react';

const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const AUTH0_KEY = process.env.REACT_APP_AUTH0_CLIENT_ID;

const providerConfig = {
  domain: AUTH0_DOMAIN,
  clientId: AUTH0_KEY,
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
};

const Auth0Provider = ({ children }) => <Auth0 {...providerConfig}>{children}</Auth0>;

export default Auth0Provider;
