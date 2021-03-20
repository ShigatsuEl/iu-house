import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Main: React.FunctionComponent = () => {
  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    console.log(e);
  };

  return <MainContainer onScroll={handleScroll}></MainContainer>;
};

export default Main;
