import { styled, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const CustomTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontSize: '13px',
  fontWeight: '500',
  fontStyle: 'normal',
  lineHeight: '130%',
  color: 'var(--mainColor)',
  [theme.breakpoints.up('xl')]: {
    fontSize: '20px',
    fontWeight: '300',
  },
}));

const InfoSection = props => {
  const { array, columnGap, sx, breakpoint } = props;

  return (
    <Box>
      <Grid container rowGap={3} columnGap={columnGap} sx={sx} maxWidth={'100%'}>
        <Grid container direction={'column'} rowGap={breakpoint ? 6.25 : 2.5}>
          {array.map((option, index) => (
            <Grid key={index}>
              <CustomTypography variant="paragraph">{option.name}</CustomTypography>
            </Grid>
          ))}
        </Grid>
        <Grid container direction={'column'} rowGap={breakpoint ? 6.25 : 2.5} maxWidth={breakpoint ? '170px' : '90px'}>
          {array.map((option, index) => (
            <Grid key={index}>
              <Typography
                variant="paragraph"
                color={'var(--mainColor)'}
                fontWeight={'500'}
                sx={sx}
                fontSize={breakpoint ? '20px' : '13px'}>
                {option.value}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default InfoSection;
