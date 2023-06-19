
import { Auth0Provider } from "@auth0/auth0-react";

const AUTH0_USER = process.env.REACT_APP_AUTH0_DOMAIN
const AUTH0_KEY = process.env.REACT_APP_AUTH0_CLIENT_ID

const providerConfig = {
  domain: AUTH0_USER,
  clientId: AUTH0_KEY,
  authorizationParams: {
     redirect_uri: window.location.origin
  }
 }

const AuthProvider = ({children}) => {
  return (
    <Auth0Provider {...providerConfig}>{children}</Auth0Provider>
  )
}

export default AuthProvider
