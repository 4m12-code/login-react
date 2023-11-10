import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery'; // jQuery import

import 'flexslider/flexslider.css'; // The styles if needed

window.jQuery = window.$ = $;
require('flexslider'); // This uses the NP


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);

$(function($) {
  let e = document.querySelector('.flexslider');
  $(e).flexslider({
    animation: "slide",
    controlNav: true, // Flechitas laterales
    animationLoop: false, // Quitar el límite
    slideshow: true,
    direction: "horizontal",
    mousedrag: true,  // Habilitar el arrastre
  });
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
