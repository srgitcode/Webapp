import React from 'https://cdn.skypack.dev/react@v17.0.1';
import ReactDOM from 'https://cdn.skypack.dev/react-dom@v17.0.1';
import { BrowserRouter as Router } from "https://cdn.skypack.dev/react-router-dom@5.1.2";
//
import App from './App.js';

ReactDOM.render(
  <Router>  
  <App />
    </Router>,
  document.getElementById('app')
);
