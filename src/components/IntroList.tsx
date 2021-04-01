import React from 'react';
import styled, { css } from 'styled-components';

type ImageUrlType = Pick<IntroListProps, 'url'>;

const urlstyles = css<ImageUrlType>`
  ${({ url }) =>
    url &&
    css`
      border-radius: 50%;
      background-image: url(${url});
      background-position: center;
      background-size: cover;
      & {
        margin-right: 2.5rem;
        width: 250px;
        height: 250px;
      }
      & ~ div {
        padding-top: 3rem;
      }
      & span {
        display: block;
        width: 300px;
      }
    `}
  ${({ url }) =>
    !url &&
    css`
      &.first-list-col {
        margin-top: 3rem;
      }
    `}
`;

const IntroListContainer = styled.div<IntroListProps>`
  display: flex;
  color: ${(props) => props.theme.light.secondaryText};
  margin-right: ${(props) => (props.isLast ? '0' : '15rem')};
`;

const IntroListColumn = styled.div`
  display: flex;
  flex-direction: column;
  ${urlstyles};
`;

const IntroListAlbumTitle = styled.h4`
  margin-bottom: 2rem;
  font-size: ${(props) => props.theme.px.mainTitle};
  font-weight: 600;
  white-space: nowrap;
`;

const IntroListAlbumSubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.px.headingThree};
`;

interface IntroListProps {
  isFirst?: boolean;
  $title: string;
  subTitle: string;
  url?: string;
  isLast?: boolean;
}

const IntroList: React.FunctionComponent<IntroListProps> = (props: IntroListProps) => {
  const { isFirst, $title, subTitle } = props;
  return (
    <IntroListContainer {...props}>
      {isFirst ? (
        <IntroListColumn className="first-list-col">
          <IntroListAlbumTitle>{$title}</IntroListAlbumTitle>
          <IntroListAlbumSubTitle>{subTitle}</IntroListAlbumSubTitle>
        </IntroListColumn>
      ) : (
        <>
          <IntroListColumn {...props} />
          <IntroListColumn>
            <IntroListAlbumTitle>{$title}</IntroListAlbumTitle>
            <IntroListAlbumSubTitle>{subTitle}</IntroListAlbumSubTitle>
          </IntroListColumn>
        </>
      )}
    </IntroListContainer>
  );
};

IntroList.defaultProps = {
  isFirst: false,
  isLast: false,
};

export default IntroList;
