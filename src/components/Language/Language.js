import { useIntl } from 'react-intl';

import HeaderButton from "../HeaderButton/HeaderButton"

const Language = ({ style }) => {
  const intl = useIntl();
  const iconFlag = intl.messages.flag;

  const handleChange = () => {
    return
  };

  return (
    <>
      <HeaderButton onClick={handleChange} icon={iconFlag} style={style} />
    </>
  );
};

export default Language
