import s from './CategoryButton.module.css';

import { Icon } from '@iconify/react';

const CategoryButton = (props) => {
  const { onClick, icon, style, text } = props;

  return (
      <button className={s.button} onClick={onClick}>
        <Icon className={s.icon} icon={icon} style={style} />
        <div className={s.popup}>
          <p className={s.text}>{text}</p>
        </div>
      </button>
  );
};

export default CategoryButton;
