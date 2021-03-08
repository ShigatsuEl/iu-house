import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';

const HomeContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Home: React.FunctionComponent = () => {
  return (
    <HomeContainer>
      <Header />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
