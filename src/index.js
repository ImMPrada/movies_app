import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {
  UserLoginForm,
  UserRegisterForm,
} from './components/pages';
import {Thumbnail} from './components/atoms'
import './assets/styles/reset.scss';
import './assets/styles/temporary.scss'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLoginForm />} />
        <Route path="/login" element={<UserLoginForm />} />
        <Route path="/signup" element={<UserRegisterForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
