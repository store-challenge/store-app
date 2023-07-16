import React, { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Box, Link, Container, IconButton, useMediaQuery } from '@mui/material';
import { ReactComponent as Logo } from '../../logo.svg';

import Search from '../Search/Search';
import Language from '../Language/Language';
import HeaderButton from '../HeaderButton/HeaderButton';
import Authentication from '../Authentication/Authentication';

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.between('xs', 'xl'));
  const desktop = useMediaQuery(theme.breakpoints.up('xl'));
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchField = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const pages = [
    <Search isVisible={isSearchVisible} onClick={toggleSearchField} key="search" />,
    !isSearchVisible && <Language style={{ fontSize: desktop ? '28px' : undefined }} key="language" />,
    !isSearchVisible && (
      <HeaderButton
        href="/cart"
        onClick={() => {}}
        icon="ion:cart-outline"
        style={{ fontSize: desktop ? '32px' : undefined }}
        key="cart"
      />
    ),
    !isSearchVisible && <Authentication style={{ fontSize: desktop ? '30px' : undefined }} key="authentication" />,
  ];

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container
        maxWidth="vw"
        disableGutters
        sx={{
          backgroundColor: 'var(--mainColor)',
          borderRadius: desktop ? '0px 0px 30px 30px' : '0px 0px 10px 10px',
        }}>
        <Toolbar
          disableGutters
          sx={{
            maxWidth: matches ? '768px' : desktop ? '1084px' : '277px',
            height: desktop ? '120px' : '52px',
            paddingX: desktop ? undefined : 2,
            marginX: 'auto',
            justifyContent: matches ? 'space-between' : undefined,
          }}>
          <IconButton
            href="/"
            sx={{
              width: desktop ? '109px' : '57px',
              height: 'auto',
              marginRight: desktop ? '100px' : undefined,
              '&:hover, &:focus, &:active': {
                background: 'none',
              },
            }}>
            <Logo />
          </IconButton>

          <Box
            sx={{
              flexGrow: 1,
              maxWidth: desktop ? '890px' : '128px',
              display: 'flex',
              justifyContent: isSearchVisible ? 'flex-end' : 'space-between',
            }}>
            {pages.map((page, index) => (
              <Link
                key={index}
                component="button"
                underline="none"
                sx={{
                  '&:hover, &:focus-within': {
                    outline: 'none',
                  },
                }}>
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
