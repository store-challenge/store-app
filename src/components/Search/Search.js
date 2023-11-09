import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { InputBase, InputAdornment } from '@mui/material';
import { Icon } from '@iconify/react';

import s from './Search.module.css';

import { RoutesLinks } from '../../constant/constant';

import ButtonCustom from '../Button/ButtonCustom';

const Search = props => {
  const { breakpoint, isVisible, onClick } = props;
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const storedSearchValue = urlParams.get('query') || '';

    const sessionStorageSearchValue = sessionStorage.getItem('searchValue') || '';

    setSearchValue(sessionStorageSearchValue || storedSearchValue);
  }, []);

  const handleInputChange = event => {
    const { value } = event.target;

    if (value === '') {
      setSearchValue('');
      return;
    }

    sessionStorage.setItem('searchValue', value);
    setSearchValue(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const trimmedValue = searchValue.trim();

    if (trimmedValue === '') {
      // eslint-disable-next-line no-alert
      alert('Будь ласка, введіть дані для пошуку.');
      return;
    }

    if (!/^[\d\sA-Za-zА-я]+$/.test(trimmedValue)) {
      // eslint-disable-next-line no-alert
      alert('Будь ласка, введіть правильний запит для пошуку із літер або цифр.');
      return;
    }

    navigate(`${RoutesLinks.SEARCH}?query=${encodeURIComponent(trimmedValue)}`);
  };

  const searchForm = () => (
    <form className={s.form} onSubmit={handleFormSubmit}>
      <InputBase
        sx={{
          flex: 1,
          marginLeft: breakpoint ? '15px' : '7px',
          fontFamily: 'Montserrat',
          fontSize: breakpoint ? '16px' : '10px',
          fontWeight: '300',
          lineHeight: '130%',
          animation: !breakpoint && searchValue === '' ? `${s.blink} 2s infinite` : 'none',
        }}
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Пошук товару"
        startAdornment={
          <InputAdornment
            position="start"
            sx={{
              color: '#6b4c7d80',
              marginRight: breakpoint ? '7px' : '6px',
            }}>
            <Icon icon="carbon:search" />
          </InputAdornment>
        }
      />
      {breakpoint && (
        <ButtonCustom
          text="Пошук"
          variant="contained"
          type="submit"
          onClick={handleFormSubmit}
          sx={{
            marginRight: '10px',
            backgroundColor: 'var(--mainColor)',
            color: 'var(--secondColor)',
            '&:hover': {
              border: 'inherit',
              backgroundColor: 'var(--buttonHoverColor)',
            },
          }}
        />
      )}
    </form>
  );

  return breakpoint ? (
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
