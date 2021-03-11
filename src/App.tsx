import React, { useRef } from 'react';
import Router from './Router';
import { GlobalStyle } from 'styles/globalStyles';
import Video from 'components/Video';
import Audio from 'components/Audio';
import Modal from 'components/Modal';

const App: React.FunctionComponent = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <>
      <GlobalStyle />
      <Modal audioRef={audioRef} />
      <Video />
      <Audio ref={audioRef} />
      <Router />
    </>
  );
};

export default App;
