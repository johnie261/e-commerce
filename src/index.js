import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

// dev-zd1tx5yveho4xu03.us.auth0.com

// flQiKdKjvbA5sWzEwX9FxuaDYzqINViF

root.render(
   <Auth0Provider
    domain="dev-zd1tx5yveho4xu03.us.auth0.com"
    //clientId="jesgf6k1RpyxChnflBabuFDeMxKl3GFk"
    clientId="flQiKdKjvbA5sWzEwX9FxuaDYzqINViF"
    redirectUri= {window.location.origin}
    cacheLocation= 'localstorage'   
  >
   <UserProvider>
    <ProductsProvider>
       <FilterProvider>
         <CartProvider>
            <App />
         </CartProvider>         
       </FilterProvider>
    </ProductsProvider>
    </UserProvider>
   </Auth0Provider>
);
