import React from 'react';
import {
  Container,
  // Icon,
} from '@chakra-ui/react';
// import { HamburgerIcon } from '@chakra-ui/icons';
// import { faWandSparkles } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const styles = {
    span: {
      letterSpacing: '3px',
    },
  };

  return (
    <>
      <footer className="justify-content-center mt-5 mb-2">
        {/* TODO: add current year function */}
        <Container className="text-center fw-semibold">
          <span className="gradient-text" style={styles.span}>
            &copy;FinWiz. All rights reserved.{' '}
            {/* <Icon as={faWandSparkles} className="ms-1" /> */}
          </span>
        </Container>
      </footer>
    </>
  );
}
