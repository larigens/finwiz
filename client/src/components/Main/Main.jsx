import { Helmet } from 'react-helmet-async';
import { Box } from '@chakra-ui/react';
import { About } from '../../pages/About/About';
import { Contact } from '../../pages/Contact/Contact';

function Main() {
  return (
    <>
      <Helmet>
        <title>FinWiz</title>
      </Helmet>
      <Box mx={3} bg="brand.800" minHeight="600px" borderRadius="md">
        <About />
      </Box>
      <Contact />
    </>
  );
}

export default Main;
