import React, { useRef, useState } from 'react';
import Router from './Router';
import { GlobalStyle } from 'styles/globalStyles';
import Video from 'components/Video';
import Audio from 'components/Audio';
import Modal from 'components/Modal';
import Cursor from 'components/Cursor';

const App: React.FunctionComponent = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  return (
    <>
      <GlobalStyle />
      <Cursor />
      <Modal audioRef={audioRef} videoRef={videoRef} isMuted={isMuted} setIsMuted={setIsMuted} />
      <Video ref={videoRef} />
      <Audio ref={audioRef} isMuted={isMuted} setIsMuted={setIsMuted} />
      <Router videoRef={videoRef} />
    </>
  );
};

export default App;
