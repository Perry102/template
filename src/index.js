import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // POINT:-  </div>remember, that here if you remove <div> from <App> then it will throw error because JSX doesn't allow single component to render twice. It can be done by adding <div> tag 
  <div>
    <App />
  </div>

);

