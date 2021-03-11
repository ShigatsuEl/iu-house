import React, { MutableRefObject, useRef } from 'react';
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
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  color: ${(props) => props.theme.light.mainBackground};
`;

const NoSoundBtn = styled.div`
  font-size: ${(props) => props.theme.px.subTitle};
`;

interface ModalProps {
  audioRef?: React.RefObject<HTMLAudioElement>;
}

const Modal: React.FunctionComponent<ModalProps> = (props: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { audioRef } = props;

  const withOutSound = () => {
    modalRef?.current?.classList.add('modal-hidden');
    audioRef?.current?.play();
  };

  return (
    <ModalContainer>
      <ModalBackground ref={modalRef} source={Source}>
        <ModalHeader>IU House</ModalHeader>
        <ModalBox>
          <NoSoundBtn onClick={() => withOutSound()}>Begin without Sound</NoSoundBtn>
        </ModalBox>
      </ModalBackground>
    </ModalContainer>
  );
};

export default Modal;

// This website uses audio to enhance your experience
