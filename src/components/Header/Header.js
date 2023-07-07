import logo from '../../logo.svg';
import s from './Header.module.css';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import HeaderButton from '../HeaderButton/HeaderButton';
import Language from '../Language/Language'
import Authentication from '../Authentication/Authentication';

const Header = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt="MegaStore" />
      <div className={s.navBar}>
        {/* Search component */}
        {!desktop && (
          <HeaderButton
            onClick={() => {}}
            icon="iconoir:search"
            style={{ fontSize: '16px' }}
          />
        )}

        <div className={s.appBar}>
          <Language style={desktop && { fontSize: '28px' }} />

          <HeaderButton
            onClick={() => {}}
            icon="ion:cart-outline"
            style={desktop && { fontSize: '32px' }}
          />

          <Authentication style={desktop && { fontSize: '30px' }} />
        </div>
      </div>
    </header>
  );
}

export default Header
