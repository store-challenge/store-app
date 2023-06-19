import logo from '../../logo.svg';
import Authentication from '../Authentication/Authentication';
import AuthProvider from '../AuthProvider/AuthProvider';

const Header = () => {
  return (
    <header>
        <img src={logo} alt="MegaStore"  />

      {/* Search component */}

        <AuthProvider>
          <Authentication />
        </AuthProvider>
    </header>
  );
}

export default Header
