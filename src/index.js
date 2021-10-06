import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from "./style/GlobalStyle";
import Topograph from "./style/Topograph";
ReactDOM.render(
<>  
    <Topograph/>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
