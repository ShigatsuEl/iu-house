import React from 'react';
import Router from './Router';
import { GlobalStyle } from 'styles/globalStyles';

const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
