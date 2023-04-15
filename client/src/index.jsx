import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import * as React from 'react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#2C2E3E',
    800: '#3658A7',
    700: '#6f92fc',
    600: '#98B5FF',
    500: '#F2F3F5',
    400: '#e6edf0',
  },
};

const theme = extendTheme({ colors });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
