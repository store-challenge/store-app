import { useAuth0 } from '@auth0/auth0-react';

import HeaderButton from '../HeaderButton/HeaderButton';

const Authentication = ({ style }) => {
  const { error, isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleClick = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else {
      loginWithRedirect({ returnTo: '/profile' });
    }
  };

  return (
    <div>
      <HeaderButton
        onClick={handleClick}
        icon={isAuthenticated ? 'iconamoon:exit-light' : 'line-md:account'}
        style={style}
      />
    </div>
  );
};

export default Authentication;
