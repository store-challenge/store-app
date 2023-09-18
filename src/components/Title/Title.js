import { Box } from '@mui/material';
import { CustomTypography } from './Title.styled';

const Title = props => {
  const { text, variant, sx } = props;
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <CustomTypography variant={variant} gutterBottom sx={sx}>
        {text}
      </CustomTypography>
    </Box>
  );
};

export default Title;
