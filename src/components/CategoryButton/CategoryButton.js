import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import s from './CategoryButton.module.css';

const CategoryButton = props => {
  const { item, href, icon, text } = props;

  return (
    <div className={s.button}>
      <Link to={`${href}/${item}`} className={s.link}>
        <Icon className={s.icon} icon={icon} />
        <div className={s.popup}>
          <p className={s.text}>{text}</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryButton;
