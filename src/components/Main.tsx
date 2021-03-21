import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const HorizonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: transform 1s ease-in-out;
`;

const ExamComponent = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
`;

const Main: React.FunctionComponent = () => {
  const [translateX, setTranslateX] = useState<number>(0);
  const horizonRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    setTranslateX((prevX) => prevX + e.deltaY);
    if (horizonRef.current) {
      horizonRef.current.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
    }
  };

  return (
    <MainContainer onWheel={handleWheel}>
      <HorizonContainer ref={horizonRef}>
        <ExamComponent>Test Component 1</ExamComponent>
        <ExamComponent>Test Component 2</ExamComponent>
      </HorizonContainer>
    </MainContainer>
  );
};

export default Main;
