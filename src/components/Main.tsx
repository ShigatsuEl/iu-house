import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Throttle } from 'react-throttle';
import CoverSource from 'assets/Image/celebrityCover.jpg';
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

const LyricContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  padding: 110px 0;
  width: 50%;
  height: 100%;
`;

const LyricCover = styled.div<{ url: string }>`
  margin-bottom: 1rem;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  background-image: url(${(props) => props.url});
  background-size: 220% 220%;
  background-position: 50% 10%;
  transition: transform 0.5s ease-in-out;
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
          <LyricContainer>
            <LyricCover url={CoverSource} />
            <Lyric {...props} />
          </LyricContainer>
          <ExamComponent>Test Component 1</ExamComponent>
          <ExamComponent>Test Component 2</ExamComponent>
        </HorizonContainer>
      </MainContainer>
    </Throttle>
  );
};

export default Main;
