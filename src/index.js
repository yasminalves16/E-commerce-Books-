import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import Providers from './providers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Providers>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Providers>
  </React.StrictMode>
  </BrowserRouter>
);

