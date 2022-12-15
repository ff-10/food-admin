import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import MenuProvider from './provider/MobileMenuProvider';
import ProductFormProvider from './provider/ProductFormProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductFormProvider>
      <MenuProvider>
        <Router>
          <App />
        </Router>
      </MenuProvider>
    </ProductFormProvider>
  </React.StrictMode>
);