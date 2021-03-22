import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const HorizonContainer = styled(animated.div)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
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
  const props = useSpring({
    transform: `translate3d(${translateX}px, 0px, 0px)`,
    from: { transform: 'translate3d(0px, 0px, 0px)' },
  });

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    console.log(e);
    setTranslateX((prevX) => prevX + e.deltaY);
  };

  return (
    <MainContainer onWheel={handleWheel}>
      <HorizonContainer ref={horizonRef} style={props}>
        <ExamComponent>Test Component 1</ExamComponent>
        <ExamComponent>Test Component 2</ExamComponent>
      </HorizonContainer>
    </MainContainer>
  );
};

export default Main;
