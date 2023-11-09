import { CustomTypography } from './Info.styled';

export const Info = props => {
  const { variant, text, desktop } = props;

  return <CustomTypography variant={variant}>{text}</CustomTypography>;
};
