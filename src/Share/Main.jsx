/* eslint-disable react/jsx-no-undef */

import Navber from "./Navber";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Main;
