import { Box } from '@mui/material';
import { CustomTypographyTitle, CustomTypographySubTitle } from './Title.styled';

const Title = ({ text, sx }) => (
  <Box sx={{ width: '100%' }}>
    <CustomTypographyTitle variant={'h3'} gutterBottom sx={sx}>
      {text}
    </CustomTypographyTitle>
  </Box>
);

const SubTitle = ({ text, sx }) => (
  <Box sx={{ width: '100%' }}>
    <CustomTypographySubTitle variant={'h4'} gutterBottom sx={sx}>
      {text}
    </CustomTypographySubTitle>
  </Box>
);

export { Title, SubTitle };
