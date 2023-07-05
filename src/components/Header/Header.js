import logo from '../../logo.svg';
import s from './Header.module.css';

import useMediaQuery from '@mui/material/useMediaQuery';

import HeaderButton from '../HeaderButton/HeaderButton';
import Language from '../Language/Language'
import Authentication from '../Authentication/Authentication';

const Header = () => {
  const mobile = useMediaQuery('(min-width: 320px)');

  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt="MegaStore" />
      <div className={s.navBar}>

        {/* Search component */}
        {!mobile && (
          <HeaderButton
            onClick={() => {}}
            icon="iconoir:search"
            style={{ fontSize: '16px' }}
          />
        )}

        <div className={s.appBar}>
          <Language style={mobile && { fontSize: '28px' }} />

          <HeaderButton
            onClick={() => {}}
            icon="ion:cart-outline"
            style={mobile && { fontSize: '32px' }}
          />

          <Authentication style={mobile && { fontSize: '30px' }} />
        </div>
      </div>
    </header>
  );
}

export default Header
