import React from 'react';

import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Box, Link, Container, IconButton, useMediaQuery } from '@mui/material';
import { ReactComponent as Logo } from '../../logo.svg';

import HeaderButton from '../HeaderButton/HeaderButton';
import Search from '../Search/Search';
import Language from '../Language/Language';
import Authentication from '../Authentication/Authentication';

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.between('xs', 'xl'));
  const desktop = useMediaQuery(theme.breakpoints.up('xl'));
  const pages = [
    desktop ? (
      <Search href="/search" />
    ) : (
      <HeaderButton href="/search" onClick={() => {}} icon="iconoir:search" style={{ fontSize: '16px' }} />
    ),
    <Language style={desktop && { fontSize: '28px' }} />,
    <HeaderButton href="/cart" onClick={() => {}} icon="ion:cart-outline" style={desktop && { fontSize: '32px' }} />,
    <Authentication style={desktop && { fontSize: '30px' }} />,
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
            maxWidth: matches ? '768px' : desktop ? '1137px' : '288px',
            height: desktop ? '120px' : '52px',
            paddingX: desktop ? 9 : 2,
            marginX: 'auto',
            justifyContent: 'space-between',
          }}>
          <IconButton
            href="/"
            color="var(--secondColor)"
            sx={{
              width: desktop ? '109px' : '57px',
              height: 'auto',
            }}>
            <Logo />
          </IconButton>

          <Box
            sx={{
              flexGrow: 1,
              maxWidth: desktop ? '850px' : '128px',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            {pages.map((page, index) => (
              <Link key={index} component="button">
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
