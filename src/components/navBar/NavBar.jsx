import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = () => {
  return (
    <nav>
      <StyleWrapper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </StyleWrapper>
    </nav>
  );
};

const StyleWrapper = styled.ul`
  display: flex;
  gap: 20px;
  margin: 10px 60px;
  padding: 20px;
  background-color: #3fb54cc9;
  border-radius: 12px;
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 36px;
  color: white;

  &.active {
    background-color: #030404c9;
  }
`;
