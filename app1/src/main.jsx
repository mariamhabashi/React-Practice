import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './index.css';
import App from './App.jsx';


const container = document.getElementById('root');


const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);