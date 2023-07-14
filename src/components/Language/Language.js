import { useIntl } from 'react-intl';

import HeaderButton from '../HeaderButton/HeaderButton';

const Language = ({ style }) => {
  const intl = useIntl();
  const iconFlag = intl.messages.flag;

  return (
    <>
      <HeaderButton onClick={() => {}} icon={iconFlag} style={style} />
    </>
  );
};

export default Language;
