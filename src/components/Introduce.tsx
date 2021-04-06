import React from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';
import IntroList from './IntroList';
import BlumingSource from 'assets/Image/blumingCover.jpg';
import BbibbiSource from 'assets/Image/bbibbiCover.jpg';
import goodDaySource from 'assets/Image/goodDayCover.jpg';
import LilacSource from 'assets/Image/lilacCover.jpg';
import ThroughTheNightSource from 'assets/Image/throughTheNightCover.jpg';
import { useAboutState } from 'store/aboutStore/context';
import { useTranslationPosition } from 'hooks/useTranslatePosition';

const IntroduceContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  padding: 7rem;
  width: 150vw;
  height: 100%;
  transition: transform 0.3s linear;
`;

const TopBanner = styled(animated.div)`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.3s linear;
`;

const BottomBanner = styled(animated.div)`
  display: flex;
  width: 100%;
  height: 100%;
  padding-left: 15rem;
  transition: transform 0.3s linear;
`;

const Introduce: React.FunctionComponent = () => {
  const { translateX } = useAboutState();
  const [_, subTranslate, topBannerTranslate, bottomBannerTranslate] = useTranslationPosition(translateX);

  return (
    <IntroduceContainer style={subTranslate}>
      <TopBanner style={topBannerTranslate}>
        <IntroList
          isFirst={true}
          $title="Who is she?"
          subTitle='IU is one of K-pop’s rare chart-topping singer-songwriters. IU means "You and I become one with music." She debuted in 2008 at the age of 15 and is currently the top female solo artist in the Korean pop scene.'
        />
        <IntroList $title="Bluming" subTitle="December, 2019" url={BlumingSource} />
        <IntroList $title="Through the Night" subTitle="March ,2017" url={ThroughTheNightSource} />
      </TopBanner>
      <BottomBanner style={bottomBannerTranslate}>
        <IntroList $title="Lilac" subTitle="March, 2021" url={LilacSource} />
        <IntroList $title="BBiBBi" subTitle="October, 2018" url={BbibbiSource} />
        <IntroList $title="You & I" subTitle="November, 2011" url={goodDaySource} isLast={true} />
      </BottomBanner>
    </IntroduceContainer>
  );
};

export default Introduce;
