import s from './HeaderButton.module.css';

import { Icon } from '@iconify/react';

const HeaderButton = (props) => {
  const { onClick, icon, style } = props;
  return (
    <button className={s.button} onClick={onClick}>
      <Icon className={s.icon} icon={icon} style={style} />
    </button>
  );
};

export default HeaderButton;
