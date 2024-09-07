import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MovieHomepage from './movie.jsx';
import SignUp from './sign.jsx';
import Login from './log.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/movie" element={<MovieHomepage/>}></Route>
        <Route path="/sign" element={<SignUp/>}></Route>
        <Route path="/log" element={<Login/>}></Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
