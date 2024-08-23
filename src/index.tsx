import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Person from './components/Person';
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Person name={{ first: "John", last: "Doe" }} /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


