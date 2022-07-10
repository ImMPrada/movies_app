import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NotFound from '../containers/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/checkout/success" component={Success} /> */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;