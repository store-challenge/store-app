import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Box, Container, useMediaQuery } from '@mui/material';
import logo from '../../logo.svg';
import { RoutesLinks } from '../../constant/constant';

import Search from '../Search/Search';
import Language from '../Language/Language';
import HeaderButton from '../HeaderButton/HeaderButton';
import Authentication from '../Authentication/Authentication';

const Header = ({ desktop }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xl'));
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchField = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const pages = [
    <Search breakpoint={desktop} isVisible={isSearchVisible} onClick={toggleSearchField} key="search" />,
    !isSearchVisible && <Language style={{ fontSize: desktop ? '28px' : undefined }} key="language" />,
    !isSearchVisible && (
      <HeaderButton
        href={RoutesLinks.CART}
        onClick={() => {}}
        icon="ion:cart-outline"
        style={{ fontSize: desktop ? '32px' : undefined }}
        key="cart"
      />
    ),
    !isSearchVisible && (
      <Authentication style={{ fontSize: desktop ? '30px' : undefined }} key="authentication" breakpoint={desktop} />
    ),
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
            maxWidth: desktop ? '1138px' : matches ? '768px' : '274px',
            height: desktop ? '120px' : '52px',
            paddingX: desktop ? undefined : 2.5,
            marginX: 'auto',
            justifyContent: desktop ? undefined : 'space-between',
          }}>
          <Box
            sx={{
              width: desktop ? '109px' : '46px',
              height: '100%',
              padding: 0,
              marginRight: desktop ? '100px' : undefined,
              '&:hover, &:focus, &:active': {
                background: 'none',
              },
            }}>
            <Link to={RoutesLinks.HOMEPAGE}>
              <img src={logo} alt="MEGASTORE" style={{ width: !desktop && '57px', paddingTop: '10px' }} />
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              maxWidth: desktop ? '940px' : '128px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: isSearchVisible ? 'flex-end' : 'space-between',
            }}>
            {pages.map((page, index) => (
              <Box
                key={index}
                component="span"
                color={'var(--secondColor)'}
                sx={{
                  '&:hover, &:focus-within': {
                    outline: 'none',
                  },
                }}>
                {page}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
