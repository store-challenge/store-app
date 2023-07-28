import { Container as MainContainer } from '@mui/material';

const Container = ({ breakpoint, children }) => (
  <MainContainer
    maxWidth="xl"
    sx={{
      paddingTop: breakpoint ? 6.25 : 2.5,
      paddingBottom: breakpoint ? 22.25 : 2.5,
    }}>
    {children}
  </MainContainer>
);

export default Container;