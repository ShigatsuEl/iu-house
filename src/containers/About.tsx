import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Main from 'components/Main';

const AboutContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  opacity: 0;
  background-color: ${(props) => props.theme.light.subBackground};
  transition: opacity 2s ease-in-out;
`;

interface AboutProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  audioRef: React.RefObject<HTMLAudioElement>;
}

const About: React.FunctionComponent<AboutProps> = (props: AboutProps) => {
  const { videoRef, audioRef } = props;
  const aboutContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current && aboutContainerRef.current) {
      videoRef.current.style.opacity = '0';
      aboutContainerRef.current.style.opacity = '1';
    }
  }, [videoRef]);

  return (
    <AboutContainer ref={aboutContainerRef}>
      <Header />
      <Main videoRef={videoRef} audioRef={audioRef} />
    </AboutContainer>
  );
};

export default About;
