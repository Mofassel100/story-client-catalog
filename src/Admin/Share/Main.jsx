/* eslint-disable react/jsx-no-undef */

import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainDeshboard = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default MainDeshboard;
