import { NavBar } from 'components/navBar/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
};
