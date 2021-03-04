import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import About from './containers/About';
import Home from './containers/Home';

const Router: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
