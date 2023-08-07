import { Container as MainContainer } from '@mui/material';

const Container = ({ breakpoint, children }) => (
  <MainContainer
    disableGutters
    maxWidth="xl"
    sx={{
      paddingX: breakpoint ? 8.5 : 2,
      paddingY: breakpoint ? 6.25 : 2.5,
    }}>
    {children}
  </MainContainer>
);

export default Container;
