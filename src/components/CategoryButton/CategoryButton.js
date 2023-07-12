import s from './CategoryButton.module.css';

import { Icon } from '@iconify/react';

const CategoryButton = (props) => {
  const { href, onClick, icon, style, text } = props;

  return (
    <div className={s.button}>
      <a href={href} className={s.link} onClick={onClick}>
        <Icon className={s.icon} icon={icon} style={style} />
        <div className={s.popup}>
          <p className={s.text}>{text}</p>
        </div>
      </a>
    </div>
  );
};

export default CategoryButton;
