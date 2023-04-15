import { Helmet } from 'react-helmet-async';
import { Box } from '@chakra-ui/react';
import { Home } from '../../pages/Home/Home';

function Main() {
  return (
    <>
      <Helmet>
        <title>FinWiz</title>
      </Helmet>
      <Box mx={3} bg="brand.800" minHeight="600px" borderRadius="md">
        <Home />
      </Box>
    </>
  );
}

export default Main;
