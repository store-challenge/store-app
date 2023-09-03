import { useAuth0 } from '@auth0/auth0-react';
import HeaderButton from '../HeaderButton/HeaderButton';

const AUTH0_CALLBACK_URL = process.env.REACT_APP_AUTH0_CALLBACK_URL;

const Authentication = ({ style }) => {
  const { error, isLoading, isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <div>...</div>;
  }

  const handleClick = () => {
    if (isAuthenticated) {
      logout({ logoutParams: { returnTo: AUTH0_CALLBACK_URL } });
    } else {
      loginWithRedirect({ returnTo: '/profile' });
    }
  };

  return (
    <div>
      <HeaderButton
        onClick={handleClick}
        icon={isAuthenticated ? 'iconamoon:exit-light' : 'line-md:account'}
        style={style}></HeaderButton>
    </div>
  );
};

export default Authentication;
