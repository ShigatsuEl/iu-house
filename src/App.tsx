import React from 'react';
import Router from './Router';
import { GlobalStyle } from 'styles/globalStyles';
import Video from 'components/Video';
import Audio from 'components/Audio';
import Modal from 'components/Modal';

const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Modal />
      <Video />
      <Audio />
      <Router />
    </>
  );
};

export default App;
