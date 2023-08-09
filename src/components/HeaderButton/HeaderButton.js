import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import s from './HeaderButton.module.css';

const HeaderButton = props => {
  const { href, onClick, icon, style, children } = props;
  return (
    <Link to={href} className={s.button} onClick={onClick}>
      <Icon className={s.icon} icon={icon} style={style} />
      {children}
    </Link>
  );
};

export default HeaderButton;
