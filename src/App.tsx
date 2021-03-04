import React from 'react';
import Router from './Router';
import { GlobalStyle } from 'styles/globalStyles';
import Video from 'components/Video';

const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Video />
      <Router />
    </>
  );
};

export default App;
