import { Icon } from '@iconify/react';

const HeaderButton = ({ onClick, icon }) => {
  return (
      <button onClick={onClick}>
        <Icon icon={icon} />
      </button>
  );
};

export default HeaderButton;
