import logo from '../../logo.svg';

import Language from '../Language/Language';
import Authentication from '../Authentication/Authentication';
import AuthProvider from '../AuthProvider/AuthProvider';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="MegaStore" />
      <div>
        {/* Search component */}
        <div>
          <Language />
          {/* Basket component */}
          <AuthProvider>
            <Authentication />
          </AuthProvider>
        </div>
      </div>
    </header>
  );
}

export default Header
