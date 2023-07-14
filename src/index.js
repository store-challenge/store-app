import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Auth0Provider from './providers/Auth0Provider';
import AuthProvider from './providers/AuthProvider';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <Auth0Provider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Auth0Provider>
  </React.StrictMode>,
);
