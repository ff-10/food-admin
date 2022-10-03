import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MenuProvider from './provider/MobileMenuProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>
);