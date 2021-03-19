import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';

const HomeContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  transition: opacity 2s ease-in-out;
`;

interface HomeProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

const Home: React.FunctionComponent<HomeProps> = (props: HomeProps) => {
  const { videoRef } = props;
  const homeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current && homeContainerRef.current) {
      videoRef.current.style.opacity = '1';
      homeContainerRef.current.style.opacity = '1';
    }
  }, [videoRef]);

  return (
    <HomeContainer ref={homeContainerRef}>
      <Header />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
