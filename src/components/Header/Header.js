import logo from '../../logo.svg';
import s from './Header.module.css';
import Authentication from '../Authentication/Authentication';
import AuthProvider from '../AuthProvider/AuthProvider';

const Header = () => {
  return (
    <header className={s.header}>
        <img className={s.header__logo} src={logo} alt="MegaStore" />

      {/* Search component */}

        <AuthProvider>
          <Authentication />
        </AuthProvider>
    </header>
  );
}

export default Header
