import React from 'react';
import styled from 'styled-components';
import Source from 'assets/Image/celebrityImage.jpg';

const ModalContainer = styled.div`
  position: absolute;
  z-index: 10;
  width: 100vw;
  height: 100vh;
`;

const ModalBackground = styled.div<{ source?: string }>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.source});
  background-position: center;
  background-size: cover;
`;

const Modal: React.FunctionComponent = () => {
  return (
    <ModalContainer>
      <ModalBackground source={Source}></ModalBackground>
    </ModalContainer>
  );
};

export default Modal;
