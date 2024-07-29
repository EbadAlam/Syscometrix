import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HeaderWeb from '../Header/Header';

function Layout() {
  return (
    <>
      <HeaderWeb />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;