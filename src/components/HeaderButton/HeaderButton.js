import s from './HeaderButton.module.css';

import { Icon } from '@iconify/react';

const HeaderButton = ({ onClick, icon }) => {
  return (
      <button className={s.button} onClick={onClick}>
        <Icon className={s.icon} icon={icon} />
      </button>
  );
};

export default HeaderButton;
