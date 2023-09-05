import { useState } from 'react';

import { InputBase, InputAdornment } from '@mui/material';
import { Icon } from '@iconify/react';

import ButtonCustom from '../Button/ButtonCustom';
import s from './Search.module.css';

import { getSearchProduct } from '../../services/getProducts';

const Search = props => {
  const { breakpoint, isVisible, onClick } = props;
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
          text={'Пошук'}
          type={'submit'}
          onClick={handleFormSubmit}
          sx={{
            backgroundColor: breakpoint ? 'var(--mainColor)' : 'var(--secondColor)',
            color: breakpoint ? 'var(--secondColor)' : 'var(--mainColor)',
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
