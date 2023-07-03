import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import HeaderButton from '../HeaderButton/HeaderButton';

const AUTH0_USER_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;

const Authentication = ({ style }) => {
  const {
    error,
    isLoading,
    isAuthenticated,
    user,
    getAccessTokenSilently,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const [userMetaData, setUserMetaData] = useState(null);

  useEffect(() => {
      const getUserMetaData = async () => {
        const domain = AUTH0_USER_DOMAIN;
        try {
          const accessToken = await getAccessTokenSilently({
            authorizationParams: {
               audience: `https://${domain}/api/v2/`,
               scope: 'read:current_user',
            },
           });

          const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

          const dataResponse = await fetch(userDetailsByIdUrl, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              },
            });

          const { user_metadata } = await dataResponse.json();

          setUserMetaData(user_metadata);
        } catch (error) {
          console.log(error.message);
        }
      };
      getUserMetaData();
    }, [getAccessTokenSilently, user?.sub]);

  if (userMetaData) {
    return <div>Loading data...</div>;
  }
  
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeaderButton
        onClick={() => {
          !isAuthenticated
            ? loginWithRedirect({ returnTo: "/profile" })
            : logout({ returnTo: window.location.origin });
        }}
        icon="line-md:account"
        style={style}
      />
    </div>
  );
};

export default Authentication;
