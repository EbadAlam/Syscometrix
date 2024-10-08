import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HeaderWeb from '../Header/Header';
import FluidCanvas from '../FluidCanvas/FluidCanvas';
import CustomCursor from '../Cursor/Cursor';

function Layout() {
  return (
    <>
      {/* <FluidCanvas /> */}
      <HeaderWeb />
      <main>
        <Outlet />
        {/* <CustomCursor /> */}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
