import React from 'react';
import Router from './Router';
import { GlobalStyle } from 'styles/globalStyles';
import Video from 'components/Video';
import Audio from 'components/Audio';

const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Video />
      <Audio />
      <Router />
    </>
  );
};

export default App;
