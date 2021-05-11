import React, { useEffect, useRef } from 'react';
import { animated } from 'react-spring';
import { Throttle } from 'react-throttle';
import styled, { css } from 'styled-components';
import CoverSource from 'assets/Image/celebrityCover.jpg';
import celebritySource from 'assets/video/celebrityVideo.mp4';
import lilacSource from 'assets/video/lilacVideo.mp4';
import { useTranslationPosition } from 'hooks/useTranslatePosition';
import { useAboutDispatch, useAboutState } from 'store/aboutStore/context';
import { Types } from 'store/aboutStore/types';
import Lyric from './Lyric';
import Video from './Video';
import Introduce from './Introduce';
import NewSong from './NewSong';
import Deck from './Deck';

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const HorizonContainer = styled(animated.div)`
  display: flex;
  align-items: center;
  height: 100%;
  overflow-x: hidden;
  transition: transform 0.3s linear;
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

const VideoContainer = styled(animated.div)<{ $isLarge: boolean }>`
  ${(props) =>
    props.$isLarge !== true
      ? css`
          padding: 7rem 7rem 7rem 0;
          width: 50vw;
          height: 100%;
          transition: transform 0.3s linear;
        `
      : css`
          padding: 0 0 0 7rem;
          width: 100vw;
          height: 100%;
          transition: transform 0.3s linear;
        `}
`;

const VideoWrapper = styled.div<{ $isLarge: boolean }>`
  position: absolute;
  z-index: 3;
  ${(props) =>
    props.$isLarge !== true
      ? css`
          top: 0;
          width: 50vw;
          height: 100%;
        `
      : css`
          top: 0;
          left: 0;
          width: 100vw;
          height: 100%;
        `}
`;

interface MainProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  audioRef: React.RefObject<HTMLAudioElement>;
}

const Main: React.FunctionComponent<MainProps> = (props: MainProps) => {
  const { videoRef } = props;
  const subSmVideoRef = useRef<HTMLVideoElement>(null);
  const subLgVideoRef = useRef<HTMLVideoElement>(null);
  const horizonRef = useRef<HTMLDivElement>(null);
  const { translateX } = useAboutState();
  const useDispatch = useAboutDispatch();
  const [mainTranslate, subTranslate] = useTranslationPosition(translateX);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY === 125 || e.deltaY === -125) {
      useDispatch({
        type: Types.Update,
        payload: { wheelX: e.deltaY * -1.5, horizonX: horizonRef.current?.getBoundingClientRect().width },
      });
    } else {
      useDispatch({
        type: Types.Update,
        payload: {
          wheelX: (e.deltaY / Math.abs(e.deltaY)) * 125 * -1.5,
          horizonX: horizonRef.current?.getBoundingClientRect().width,
        },
      });
    }
  };

  useEffect(() => {
    // videoRef Prop을 받았을 때(Home Video만 제외)만 동작
    if (videoRef !== undefined) {
      // Home Video와 Sub Video가 존재하고 Home Video의 재생상태가 멈춤이 아닐때만 동작
      if (videoRef.current && subSmVideoRef.current && subLgVideoRef.current && !videoRef.current.paused) {
        subSmVideoRef.current.currentTime = videoRef.current.currentTime;
        subLgVideoRef.current.currentTime = videoRef.current.currentTime;
        subSmVideoRef.current.play();
        subLgVideoRef.current.play();
      }
    }
  }, [subSmVideoRef, subLgVideoRef, videoRef.current?.paused]);

  return (
    <Throttle time="100" handler="onWheel">
      <MainContainer onWheel={handleWheel}>
        <HorizonContainer ref={horizonRef} style={mainTranslate}>
          <LyricContainer style={subTranslate}>
            <LyricCover url={CoverSource} />
            <Lyric {...props} />
          </LyricContainer>
          <VideoContainer style={subTranslate} $isLarge={false}>
            <VideoWrapper $isLarge={false} />
            <Video ref={subSmVideoRef} videoRef={videoRef} src={celebritySource} isHome={false} autoPlay={false} />
          </VideoContainer>
          <Introduce />
          <NewSong />
          <VideoContainer style={subTranslate} $isLarge={true}>
            <VideoWrapper $isLarge={true} />
            <Video
              ref={subLgVideoRef}
              videoRef={videoRef}
              src={lilacSource}
              isHome={false}
              isLarge={true}
              autoPlay={false}
            />
          </VideoContainer>
          <Deck />
        </HorizonContainer>
      </MainContainer>
    </Throttle>
  );
};

export default Main;
