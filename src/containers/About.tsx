import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from 'components/Header';

const AboutContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.light.subBackground};
`;

interface AboutProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

const About: React.FunctionComponent<AboutProps> = (props: AboutProps) => {
  const { videoRef } = props;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.style.opacity = '0';
    }
  }, [videoRef]);
  return (
    <AboutContainer>
      <Header />
    </AboutContainer>
  );
};

export default About;
