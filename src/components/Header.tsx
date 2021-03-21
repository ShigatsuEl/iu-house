import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 30px 50px 30px 50px;
`;

const Navigator = styled.div`
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

const MainTitle = styled(Link)`
  font-size: ${(props) => props.theme.px.mainTitle};
`;

const NavItem = styled(Link)`
  margin-right: 2rem;
  font-size: ${(props) => props.theme.px.subTitle};
  .odd-nav {
    margin-right: unset;
    margin-left: 2rem;
  }
`;

const Header: React.FunctionComponent = () => {
  return (
    <HeaderContainer>
      <Navigator>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/">More</NavItem>
      </Navigator>
      <Navigator>
        <MainTitle to="/">IU House</MainTitle>
      </Navigator>
      <Navigator className="odd-nav">Contact</Navigator>
    </HeaderContainer>
  );
};

export default Header;
