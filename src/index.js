import React from 'react';
import ReactDOM from 'react-dom/client';
import './asset/css/common.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App></App>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
