/* eslint-disable react/prop-types */
import React, { Dispatch, forwardRef, SetStateAction, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Source from 'assets/audio/celebrityAudio.mp3';
import { GoUnmute } from 'react-icons/go';
import { RiVolumeMuteFill } from 'react-icons/ri';
import { useMousePosition } from 'hooks/useMousePosition';
import { useElementPosition } from 'hooks/useElementPosition';

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
  cursor: pointer;
  transform: translate3d(0px, 0px, 0px);
  transform-origin: 50% 50%;
  transition: all 300ms linear;
`;

interface AudioProps {
  isMuted: boolean;
  setIsMuted: Dispatch<SetStateAction<boolean>>;
}

const Audio = forwardRef<HTMLAudioElement, AudioProps>((props, ref) => {
  const audioRef = ref as React.RefObject<HTMLAudioElement>;
  const audioBtnElement = useRef<HTMLDivElement>(null);
  const { isMuted, setIsMuted } = props;
  const { x: mouseX, y: mouseY } = useMousePosition();
  const { x: eleX, y: eleY, width: eleWid, height: eleHei } = useElementPosition(audioBtnElement);
  let radius, moveX, moveY;
  if (mouseX != null && eleX != null && eleWid != null) {
    moveX = (mouseX - (eleX + eleWid / 2)) / 2;
  }
  if (mouseY != null && eleY != null && eleHei != null) {
    moveY = (mouseY - (eleY + eleHei / 2)) / 2;
  }
  if (eleWid != null && eleHei != null) {
    radius = Math.sqrt(Math.pow(eleWid * 1, 2) + Math.pow(eleHei * 1, 2));
  }

  const toggleSound = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (
      mouseX !== null &&
      mouseY !== null &&
      eleX !== undefined &&
      eleY !== undefined &&
      eleWid !== undefined &&
      eleHei !== undefined
    ) {
      if (Math.pow(radius, 2) >= Math.pow(eleX + eleWid / 2 - mouseX, 2) + Math.pow(eleY + eleHei / 2 - mouseY, 2)) {
        if (audioBtnElement.current) {
          audioBtnElement.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0px)`;
        }
      } else {
        if (audioBtnElement.current) {
          audioBtnElement.current.style.transform = `translate3d(0px, 0px, 0px)`;
        }
      }
    }
  }, [mouseX, mouseY, eleX, eleY, eleWid, eleHei]);

  return (
    <AudioContainer>
      <AudioComponent ref={ref} loop>
        <source src={Source} type="audio/mp3" />
        Your browser does not support the audio tag.
      </AudioComponent>
      <AudioBtn ref={audioBtnElement} onClick={() => toggleSound()}>
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
