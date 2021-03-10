import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 50px 40px 50px;
  width: 100%;
`;

const MediaContent = styled.div`
  display: flex;
  width: 33%;
  color: ${(props) => props.theme.light.mainBackground};
  font-size: 1.5rem;
  &:nth-child(2) {
    justify-content: center;
  }
  &:last-child {
    justify-content: flex-end;
  }
`;

const FooterTitle = styled.h3`
  color: ${(props) => props.theme.light.mainBackground};
  font-size: ${(props) => props.theme.px.mainTitle};
`;

const Footer: React.FunctionComponent = () => {
  return (
    <FooterContainer>
      <MediaContent></MediaContent>
      <FooterTitle>Celebrity</FooterTitle>
      <MediaContent></MediaContent>
    </FooterContainer>
  );
};

export default Footer;
