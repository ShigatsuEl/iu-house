import React, { useRef } from 'react';
import Router from './Router';
import { GlobalStyle } from 'styles/globalStyles';
import Video from 'components/Video';
import Audio from 'components/Audio';
import Modal from 'components/Modal';
import Cursor from 'components/Cursor';

const App: React.FunctionComponent = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <GlobalStyle />
      <Cursor />
      <Modal audioRef={audioRef} videoRef={videoRef} />
      <Video ref={videoRef} />
      <Audio ref={audioRef} />
      <Router />
    </>
  );
};

export default App;
