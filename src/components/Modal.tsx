import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { IconContext } from 'react-icons';
import { BiPlayCircle } from 'react-icons/bi';
import styled from 'styled-components';
import Source from 'assets/Image/celebrityImage.jpg';
import { useMousePosition } from 'hooks/useMousePosition';
import { useElementPosition } from 'hooks/useElementPosition';

const ModalContainer = styled.div`
  position: absolute;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  &.modal-hidden {
    margin-top: 100%;
    opacity: 0;
    z-index: -1;
    transition: all 1s ease-in-out;
  }
`;

const ModalBackground = styled.div<{ source?: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.source});
  background-position: center;
  background-size: cover;
`;

const ModalHeader = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 50px 30px 50px;
  font-size: ${(props) => props.theme.px.mainTitle};
  color: ${(props) => props.theme.light.mainBackground};
`;

const ModalBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: ${(props) => props.theme.light.mainBackground};
`;

const IntroSoundBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
`;

const ModalDesc = styled.div`
  margin: 20px 0 40px 0;
  font-size: ${(props) => props.theme.px.subTitle};
`;

const WithSoundBtn = styled.div<{ moveX?: number; moveY?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  font-size: 2rem;
  cursor: pointer;
  transform: translate3d(0px, 0px, 0px);
  transform-origin: 50% 50%;
  transition: all 300ms linear;
`;

const WithOutSoundBtn = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

interface ModalProps {
  audioRef?: React.RefObject<HTMLAudioElement>;
  videoRef?: React.RefObject<HTMLVideoElement>;
  isMuted: boolean;
  setIsMuted: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FunctionComponent<ModalProps> = (props: ModalProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const soundBtnElement = useRef<HTMLDivElement>(null);
  const { x: mouseX, y: mouseY } = useMousePosition();
  const { x: eleX, y: eleY, width: eleWid, height: eleHei } = useElementPosition(soundBtnElement);
  const { audioRef, videoRef, isMuted, setIsMuted } = props;
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

  const withOutSound = () => {
    modalRef?.current?.classList.add('modal-hidden');
    if (audioRef?.current) {
      audioRef.current.muted = isMuted;
    }
    audioRef?.current?.play();
    videoRef?.current?.play();
  };

  const withSound = () => {
    modalRef?.current?.classList.add('modal-hidden');
    setIsMuted(!isMuted);
    audioRef?.current?.play();
    videoRef?.current?.play();
  };

  useEffect(() => {
    if (audioRef?.current !== null && videoRef?.current !== null) {
      setLoading(false);
    }
  }, [audioRef, videoRef]);

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
        if (soundBtnElement.current) {
          soundBtnElement.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0px)`;
        }
      } else {
        if (soundBtnElement.current) {
          soundBtnElement.current.style.transform = `translate3d(0px, 0px, 0px)`;
        }
      }
    }
  }, [mouseX, mouseY, eleX, eleY, eleWid, eleHei]);

  return (
    <ModalContainer ref={modalRef}>
      <ModalBackground source={Source}>
        <ModalHeader>IU House</ModalHeader>
        <ModalBox>
          <IntroSoundBox>
            <IconContext.Provider value={{ size: '2rem' }}>
              <BiPlayCircle />
            </IconContext.Provider>
            <ModalDesc>This website uses audio to enhance your experience</ModalDesc>
            {loading ? null : (
              <>
                <WithSoundBtn ref={soundBtnElement} onClick={() => withSound()} moveX={moveX} moveY={moveY}>
                  LETS GO
                </WithSoundBtn>
                <WithOutSoundBtn onClick={() => withOutSound()}>Begin without Sound</WithOutSoundBtn>
              </>
            )}
          </IntroSoundBox>
        </ModalBox>
      </ModalBackground>
    </ModalContainer>
  );
};

export default Modal;
