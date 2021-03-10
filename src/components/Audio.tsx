import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Source from 'assets/audio/celebrityAudio.mp3';

const AudioContainer = styled.div``;

const AudioComponent = styled.audio`
  display: none;
`;

const AudioBtn = styled.button`
  position: absolute;
  right: 50px;
  bottom: 50px;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  z-index: 10;
  background-color: ${(props) => props.theme.light.subBackground};
`;

const Audio: React.FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const testSound = () => {
    audioRef.current?.play();
  };

  return (
    <AudioContainer>
      <AudioComponent ref={audioRef} loop>
        <source src={Source} type="audio/mp3" />
        Your browser does not support the audio tag.
      </AudioComponent>
      <AudioBtn onClick={() => testSound()}></AudioBtn>
    </AudioContainer>
  );
};

export default Audio;
