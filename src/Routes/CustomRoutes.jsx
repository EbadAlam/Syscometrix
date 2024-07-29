import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RoutesConstant } from '../Utils/Constant';
import Home from '../Pages/Home/Home';
import Layout from '../Components/Layout/Layout';
import About from '../Pages/About/About';

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<Home />}
        />
        <Route
          path={RoutesConstant.About}
          element={<About />}
        />
        <Route
          path="*"
          element={<Navigate to={RoutesConstant.Home} />}
        />
      </Route>
    </Routes>
  );
}

export default CustomRoutes;
