import { Auth0Provider } from "@auth0/auth0-react";

const AUTH0_USER = "dev-xsron5cxoe45bn57.us.auth0.com"
const AUTH0_KEY = "zmgQ6uO27tIDiDuJjGC4ZF0M3l0OySlv"
// const AUTH0_USER = process.env.DOMAIN
// const AUTH0_KEY = process.env.CLIENT_ID
// const AUTH0_SECRET = process.env.CLIENT_SECRET

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
