import React, { useRef } from 'react';
import { IconContext } from 'react-icons';
import { BiPlayCircle } from 'react-icons/bi';
import styled from 'styled-components';
import Source from 'assets/Image/celebrityImage.jpg';

const ModalContainer = styled.div`
  position: absolute;
  z-index: 5;
  width: 100vw;
  height: 100vh;
`;

const ModalBackground = styled.div<{ source?: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.source});
  background-position: center;
  background-size: cover;
  &.modal-hidden {
    margin-top: 100%;
    opacity: 0;
    transition: all 1s ease-in-out;
  }
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
  z-index: 10;
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

const WithSoundBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
  border: 2px solid ${(props) => props.theme.light.primaryText};
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  font-size: 2rem;
`;

const NoSoundBtn = styled.div`
  font-size: 1.5rem;
`;

interface ModalProps {
  audioRef?: React.RefObject<HTMLAudioElement>;
  videoRef?: React.RefObject<HTMLVideoElement>;
}

const Modal: React.FunctionComponent<ModalProps> = (props: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { audioRef, videoRef } = props;

  const withOutSound = () => {
    modalRef?.current?.classList.add('modal-hidden');
    audioRef?.current?.play();
    videoRef?.current?.play();
  };

  return (
    <ModalContainer>
      <ModalBackground ref={modalRef} source={Source}>
        <ModalHeader>IU House</ModalHeader>
        <ModalBox>
          <IntroSoundBox>
            <IconContext.Provider value={{ size: '2rem' }}>
              <BiPlayCircle />
            </IconContext.Provider>
            <ModalDesc>This website uses audio to enhance your experience</ModalDesc>
            <WithSoundBtn>LETS GO</WithSoundBtn>
            <NoSoundBtn onClick={() => withOutSound()}>Begin without Sound</NoSoundBtn>
          </IntroSoundBox>
        </ModalBox>
      </ModalBackground>
    </ModalContainer>
  );
};

export default Modal;
