import logo from '../../logo.svg';
import s from './Header.module.css';

import Authentication from '../Authentication/Authentication';
import AuthProvider from '../AuthProvider/AuthProvider';
import HeaderButton from '../HeaderButton/HeaderButton';

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt="MegaStore" />
      <div className={s.navBar}>
        {/* Search component */}
        <div className={s.appBar}>
          {/* <Language /> */}
          <HeaderButton onClick={() => {}} icon="ion:cart-outline" />
          <AuthProvider>
            <Authentication />
          </AuthProvider>
        </div>
      </div>
    </header>
  );
}

export default Header
