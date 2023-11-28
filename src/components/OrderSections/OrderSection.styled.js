import { styled } from '@mui/material/styles';
import { Paper, FormControl, TextField, Typography, FormControlLabel } from '@mui/material';

const styles = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '130%',
};

export const CustomPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  maxWidth: '248px',
  padding: '20px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'stretch',
  gap: '20px',
  borderRadius: '30px',
  border: '1px solid var(--mainColor)',
  backgroundColor: 'var(--secondColor)',
  boxShadow: 'none',
  [theme.breakpoints.between('640', 'xl')]: {
    maxWidth: '461px',
    padding: '30px',
    gap: '30px',
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '654px',
    padding: '50px',
    gap: '50px',
    alignItems: 'flex-start',
  },
}));

export const CustomFormControl = styled(FormControl)(({ theme }) => ({
  rowGap: '20px',
  '& .MuiOutlinedInput-input': {
    padding: '9.5px 20px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  [theme.breakpoints.between('640', 'xl')]: {
    rowGap: '30px',
    '& .MuiOutlinedInput-input': {
      padding: '15px 30px',
    },
  },
  [theme.breakpoints.up('xl')]: {
    rowGap: '50px',
    '& .MuiOutlinedInput-input': {
      padding: '15px 50px',
    },
  },
}));

export const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    ...styles,
    color: 'var(--mainColor)',
    gap: '10px',
    padding: 0,
  },
  borderRadius: '15.456px',
  border: '0.773px solid var(--mainColor)',
  backgroundColor: 'var(--secondColor)',
  boxShadow: '0px 3.86398px 7.72795px 0px rgba(119, 52, 165, 0.25) inset',
  [theme.breakpoints.between('640', 'xl')]: {
    minWidth: '285px',
  },
  [theme.breakpoints.up('xl')]: {
    '&  .MuiInputBase-root': {
      fontSize: '20px',
      fontWeight: 300,
    },
    minWidth: '322px',
    borderRadius: '20px',
    border: '1px solid var(--mainColor)',
    boxShadow: '0px 5px 10px 0px rgba(119, 52, 165, 0.25) inset',
  },
}));

export const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  gap: '10px',
  margin: 0,
  [theme.breakpoints.between('640', 'xl')]: {
    gap: '20px',
  },
  [theme.breakpoints.up('xl')]: {
    gap: '22px',
  },
}));

export const CustomTypography = styled(Typography)(({ theme }) => ({
  ...styles,
  fontSize: '13px',
  display: 'flex',
  gap: '10px',
  color: 'var(--mainColor)',
  alignItems: 'center',
  opacity: '50%',
  '&.Mui-checked': {
    opacity: 0,
  },
  [theme.breakpoints.between('640', 'xl')]: {
    gap: '20px',
  },
  [theme.breakpoints.up('xl')]: {
    gap: '20px',
    fontSize: '22px',
    fontWeight: 300,
  },
}));
