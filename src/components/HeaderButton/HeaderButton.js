import s from './HeaderButton.module.css';

import { Icon } from '@iconify/react';

const HeaderButton = (props) => {
  const { href, onClick, icon, style } = props;
  return (
    <a href={href} className={s.button} onClick={onClick}>
      <Icon className={s.icon} icon={icon} style={style} />
    </a>
  );
};

export default HeaderButton;
