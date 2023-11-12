import { CustomTypography } from './Info.styled';

export const Info = props => {
  const { variant, sx, children } = props;

  return (
    <CustomTypography variant={variant} sx={sx}>
      {children}
    </CustomTypography>
  );
};
