import { useAuth0 } from '@auth0/auth0-react';

import HeaderButton from '../HeaderButton/HeaderButton';

const Authentication = ({ style }) => {
  const { error, isLoading, isAuthenticated, user, loginWithRedirect, logout } =
    useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(user);

  return (
    <div>
      <HeaderButton
        onClick={() => {
          !isAuthenticated
            ? loginWithRedirect()
            : logout({ returnTo: window.location.origin });
        }}
        icon="line-md:account"
        style={style}
      />
    </div>
  );
};

export default Authentication;
