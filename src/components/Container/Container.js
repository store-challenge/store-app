import { Container as MainContainer } from '@mui/material';

const Container = ({ desktop, tablet, children }) => (
  <MainContainer
    disableGutters
    maxWidth="xl"
    sx={{
      paddingX: desktop ? 8.5 : tablet ? 4 : 2,
      paddingY: desktop ? 6.25 : 2.5,
    }}>
    {children}
  </MainContainer>
);

export default Container;
