import { useAuth0 } from '@auth0/auth0-react';

import HeaderButton from '../HeaderButton/HeaderButton';


const Authentication = ({ style }) => {
  const {
    error,
    isLoading,
    isAuthenticated,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

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
            ? loginWithRedirect(
              { returnTo: "/profile" }
            )
            : logout({ returnTo: window.location.origin });
        }}
        icon={!isAuthenticated ? "line-md:account" : "iconamoon:exit-light"}
        style={style}
      />
    </div>
  );
};

export default Authentication;
