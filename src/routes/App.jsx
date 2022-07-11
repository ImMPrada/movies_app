import React from 'react';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';

import Component from '../components/Component';

const App = () => {
  return (
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  );
}

export default App;