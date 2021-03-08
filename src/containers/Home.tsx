import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Home: React.FunctionComponent = () => {
  return (
    <HomeContainer>
      <Header />
    </HomeContainer>
  );
};

export default Home;
