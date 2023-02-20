import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Rectangle from './Rectangle';
import Triangle from './Triangle';
import reportWebVitals from './reportWebVitals';
import Square from './Square';
import Circle from './Circle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Rectangle/>
    <Triangle/>
    <Square/>
    <Circle/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
