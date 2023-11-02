import { Louder } from 'components/Louder';
import { NavBar } from 'components/navBar/NavBar';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = () => {
  return (
    <StyleWrapper>
      <header>
        <NavBar />
        <Suspense fallback={<Louder />}>
          <Outlet />
        </Suspense>
      </header>
    </StyleWrapper>
  );
};

const StyleWrapper = styled.main`
  padding: 50px;
`;
