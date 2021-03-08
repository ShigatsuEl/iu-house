import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const NavItem = styled.div`
  margin-right: 2rem;
  font-size: 24px;
  .odd-nav {
    margin-right: unset;
    margin-left: 2rem;
  }
`;

const Header: React.FunctionComponent = () => {
  return (
    <HeaderContainer>
      <Navigator>
        <NavItem>About</NavItem>
        <NavItem>More</NavItem>
      </Navigator>
      <Navigator>
        <MainTitle to="/">Celebrity</MainTitle>
      </Navigator>
      <Navigator className="odd-nav">Contact</Navigator>
    </HeaderContainer>
  );
};

export default Header;
