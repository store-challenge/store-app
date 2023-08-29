import { useAuth0 } from '@auth0/auth0-react';
import { Icon } from '@iconify/react';

import HeaderButton from '../HeaderButton/HeaderButton';

const AUTH0_CALLBACK_URL = process.env.REACT_APP_AUTH0_CALLBACK_URL;

const Authentication = ({ style, breakpoint }) => {
  const { error, isLoading, isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <div>...</div>;
  }

  const handleClick = () => {
    if (isAuthenticated) {
      logout({ returnTo: AUTH0_CALLBACK_URL });
    } else {
      loginWithRedirect({ returnTo: '/profile' });
    }
  };

  return (
    <div>
      <HeaderButton onClick={handleClick} icon={'line-md:account'} style={style}>
        {isAuthenticated && (
          <Icon
            icon="iconamoon:exit-light"
            style={{
              fontSize: breakpoint ? '12px' : '5px',
              marginLeft: breakpoint ? '-8px' : '-4px',
              marginBottom: breakpoint ? '11px' : '7px',
              color: 'var(--secondColor)',
            }}
          />
        )}
      </HeaderButton>
    </div>
  );
};

export default Authentication;
