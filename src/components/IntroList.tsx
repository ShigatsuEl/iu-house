import React from 'react';
import styled from 'styled-components';

const IntroListContainer = styled.div``;

const IntroListColumn = styled.div``;

const IntroListAlbumTitle = styled.h4``;

const IntroListAlbumSubTitle = styled.span``;

interface IntroListProps {
  isFirst?: boolean;
  title: string;
  subTitle: string;
}

const IntroList: React.FunctionComponent<IntroListProps> = (props: IntroListProps) => {
  const { isFirst, title, subTitle } = props;
  return (
    <IntroListContainer>
      {isFirst ? (
        <IntroListColumn>
          <IntroListAlbumTitle>{title}</IntroListAlbumTitle>
          <IntroListAlbumSubTitle>{subTitle}</IntroListAlbumSubTitle>
        </IntroListColumn>
      ) : (
        <>
          <IntroListColumn />
          <IntroListColumn>
            <IntroListAlbumTitle>{title}</IntroListAlbumTitle>
            <IntroListAlbumSubTitle>{subTitle}</IntroListAlbumSubTitle>
          </IntroListColumn>
        </>
      )}
    </IntroListContainer>
  );
};

IntroList.defaultProps = {
  isFirst: false,
};

export default IntroList;
