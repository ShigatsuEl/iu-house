import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Throttle } from 'react-throttle';
import styled from 'styled-components';
import Lyric from './Lyric';

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

interface MainProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const Main: React.FunctionComponent<MainProps> = (props: MainProps) => {
  const [translateX, setTranslateX] = useState<number>(0);
  const horizonRef = useRef<HTMLDivElement>(null);
  const style = useSpring({
    transform: `translate3d(${translateX}px, 0px, 0px)`,
    from: { transform: 'translate3d(0px, 0px, 0px)' },
  });

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    // console.log(e);
    setTranslateX((prevX) => prevX + e.deltaY);
  };

  return (
    <Throttle time="100" handler="onWheel">
      <MainContainer onWheel={handleWheel}>
        <HorizonContainer ref={horizonRef} style={style}>
          <Lyric {...props} />
          <ExamComponent>Test Component 1</ExamComponent>
          <ExamComponent>Test Component 2</ExamComponent>
        </HorizonContainer>
      </MainContainer>
    </Throttle>
  );
};

export default Main;
