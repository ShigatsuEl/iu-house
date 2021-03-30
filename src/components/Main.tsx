import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Throttle } from 'react-throttle';
import CoverSource from 'assets/Image/celebrityCover.jpg';
import styled from 'styled-components';
import Lyric from './Lyric';
import Video from './Video';
import Introduce from './Introduce';

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const HorizonContainer = styled(animated.div)`
  display: flex;
  align-items: center;
  height: 100%;
  overflow-x: hidden;
`;

const LyricContainer = styled(animated.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 7rem;
  width: 50vw;
  height: 100%;
  transition: transform 0.3s linear;
`;

const LyricCover = styled.div<{ url: string }>`
  margin-bottom: 1rem;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  background-image: url(${(props) => props.url});
  background-size: 220% 220%;
  background-position: 50% 10%;
`;

const VideoContainer = styled(animated.div)`
  padding: 7rem 7rem 7rem 0;
  width: 50vw;
  height: 100%;
  transition: transform 0.3s linear;
`;

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 50vw;
  height: 100%;
  z-index: 3;
`;

const ExamComponent = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
`;

interface MainProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  audioRef: React.RefObject<HTMLAudioElement>;
}

const Main: React.FunctionComponent<MainProps> = (props: MainProps) => {
  const { videoRef } = props;
  const [translateX, setTranslateX] = useState<number>(0);
  const subVideoRef = useRef<HTMLVideoElement>(null);
  const horizonRef = useRef<HTMLDivElement>(null);
  const mainTranslate = useSpring({
    transform: `translate3d(${translateX}px, 0px, 0px)`,
    from: { transform: 'translate3d(0px, 0px, 0px)' },
  });
  const subTranslate = useSpring({
    transform: `translate3d(${translateX / 2}px, 0px, 0px)`,
    from: { transform: 'translate3d(0px, 0px, 0px)' },
  });

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    setTranslateX((prevX) => prevX + e.deltaY * -1);
  };

  useEffect(() => {
    if (translateX > 0) {
      setTranslateX(0);
    }
    if (horizonRef.current) {
      if (horizonRef.current?.getBoundingClientRect().width <= translateX * -1) {
        // console.log(horizonRef.current?.getBoundingClientRect().width, translateX * -1);
        // Todo: Horizon Container의 width에서 마지막 자식 컴포넌트 width를 뺀 값이 translateX값보다 적을 때 whell prevent하기
        setTranslateX((prevX) => prevX);
      }
    }
  }, [translateX]);

  useEffect(() => {
    // videoRef Prop을 받았을 때(Home Video만 제외)만 동작
    if (videoRef !== undefined) {
      // Home Video와 Sub Video가 존재하고 Home Video의 재생상태가 멈춤이 아닐때만 동작
      if (videoRef.current && subVideoRef.current && !videoRef.current.paused) {
        subVideoRef.current.currentTime = videoRef.current.currentTime;
        subVideoRef.current.play();
      }
    }
  }, [subVideoRef, videoRef.current?.paused]);

  return (
    <Throttle time="100" handler="onWheel">
      <MainContainer onWheel={handleWheel}>
        <HorizonContainer ref={horizonRef} style={mainTranslate}>
          <LyricContainer style={subTranslate}>
            <LyricCover url={CoverSource} />
            <Lyric {...props} />
          </LyricContainer>
          <VideoContainer style={subTranslate}>
            <VideoWrapper />
            <Video ref={subVideoRef} videoRef={videoRef} isHome={false} autoPlay={false} />
          </VideoContainer>
          <Introduce />
          <ExamComponent>Test Component 1</ExamComponent>
          <ExamComponent>Test Component 2</ExamComponent>
        </HorizonContainer>
      </MainContainer>
    </Throttle>
  );
};

export default Main;
