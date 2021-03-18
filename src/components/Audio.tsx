/* eslint-disable react/prop-types */
import React, { Dispatch, forwardRef, SetStateAction } from 'react';
import styled from 'styled-components';
import Source from 'assets/audio/celebrityAudio.mp3';
import { GoUnmute } from 'react-icons/go';
import { RiVolumeMuteFill } from 'react-icons/ri';

const AudioContainer = styled.div``;

const AudioComponent = styled.audio`
  display: none;
`;

const AudioBtn = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  z-index: 5;
`;

interface IAudio {
  isMuted: boolean;
  setIsMuted: Dispatch<SetStateAction<boolean>>;
}

const Audio = forwardRef<HTMLAudioElement, IAudio>((props, ref) => {
  const audioRef = ref as React.RefObject<HTMLAudioElement>;
  const { isMuted, setIsMuted } = props;

  const toggleSound = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <AudioContainer>
      <AudioComponent ref={ref} loop>
        <source src={Source} type="audio/mp3" />
        Your browser does not support the audio tag.
      </AudioComponent>
      <AudioBtn onClick={() => toggleSound()}>
        {isMuted ? (
          <RiVolumeMuteFill style={{ fontSize: '1.2rem', color: 'white' }} />
        ) : (
          <GoUnmute style={{ fontSize: '1.2rem', color: 'white' }} />
        )}
      </AudioBtn>
    </AudioContainer>
  );
});

Audio.displayName = 'Audio';

export default Audio;
