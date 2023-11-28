import { Avatar, Typography } from '@mui/material';

const NumberCircle = props => {
  const { number, breakpoint } = props;
  return (
    <Avatar
      sx={{
        backgroundColor: 'var(--mainColor)',
        width: breakpoint ? '30px' : '20px',
        height: breakpoint ? '30px' : '20px',
      }}>
      <Typography
        variant="h6"
        sx={{
          fontFamily: 'Montserrat',
          fontSize: breakpoint ? '20px' : '15px',
          fontWeight: '500',
          fontStyle: 'normal',
          lineHeight: '130%',
          color: 'var(--secondColor)',
        }}>
        {number}
      </Typography>
    </Avatar>
  );
};

export default NumberCircle;
