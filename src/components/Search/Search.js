import { useState } from 'react';

import { styled } from '@mui/material/styles';
import { InputBase, InputAdornment, Button, useMediaQuery } from '@mui/material';
import { Icon } from '@iconify/react';

import s from './Search.module.css';

import { getSearchProduct } from '../../services/searchProduct';

const StyledButton = styled(Button)(() => ({
  marginRight: '10px',
  width: '177px',
  height: '42px',
  fontFamily: 'Montserrat',
  fontSize: '15px',
  lineHeight: '26px',
  textTransform: 'capitalize',
  color: 'var(--secondColor)',
  backgroundColor: 'var(--mainColor)',
  borderRadius: '15px',
  '&:hover': {
    backgroundColor: 'var(--buttonHoverColor)',
    boxShadow:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
  },
  '&:active': {
    backgroundColor: 'var(--buttonClickColor)',
  },
}));

const Search = props => {
  const { isVisible, onClick } = props;
  const desktop = useMediaQuery(theme => theme.breakpoints.up('xl'));
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = event => {
    setSearchValue(event.target.value);
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    getSearchProduct(searchValue);
  };

  const searchForm = () => (
    <form className={s.form} onSubmit={handleFormSubmit}>
      <InputBase
        sx={{
          flex: 1,
          marginLeft: desktop ? '15px' : '7px',
          fontFamily: 'Montserrat',
          fontSize: desktop ? '16px' : '10px',
          fontWeight: '300',
          lineHeight: '130%',
          animation: !desktop && searchValue === '' ? `${s.blink} 2s infinite` : 'none',
        }}
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Пошук товару"
        startAdornment={
          <InputAdornment
            position="start"
            sx={{
              color: '#6b4c7d80',
              marginRight: desktop ? '7px' : '6px',
            }}>
            <Icon icon="carbon:search" />
          </InputAdornment>
        }
      />
      {desktop && (
        <StyledButton type="submit" variant="contained" disableElevation onClick={handleFormSubmit}>
          Пошук
        </StyledButton>
      )}
    </form>
  );

  return desktop ? (
    searchForm()
  ) : (
    <div className={s.container}>
      <Icon
        onClick={onClick}
        icon={isVisible ? 'ri:close-line' : 'carbon:search'}
        style={{
          fontSize: isVisible ? '20px' : '16px',
          color: 'var(--secondColor)',
        }}
      />
      {isVisible && searchForm()}
    </div>
  );
};

export default Search;
