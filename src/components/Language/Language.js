import { useIntl } from 'react-intl';

import HeaderButton from "../HeaderButton/HeaderButton"

const Language = () => {
  const intl = useIntl();
  const iconFlag = intl.messages.flag

  const handleChange = () => {
    return (
      console.log(intl)
    )
  }

  return (
    <>
      <HeaderButton onClick={handleChange} icon={iconFlag} />
    </>
  );
}

export default Language
