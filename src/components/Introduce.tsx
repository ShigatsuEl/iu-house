import React from 'react';
import styled from 'styled-components';

const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TopBanner = styled.div`
  display: flex;
  height: 100%;
`;

const BottomBanner = styled.div`
  display: flex;
  height: 100%;
`;

const Introduce: React.FunctionComponent = () => {
  return (
    <IntroduceContainer>
      <TopBanner></TopBanner>
      <BottomBanner></BottomBanner>
    </IntroduceContainer>
  );
};

export default Introduce;