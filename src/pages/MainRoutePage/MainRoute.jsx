import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import MainPage from "../MainPage/MainPage";
import Basket from "../Basket/Basket";
import NotFound from "../Not found/Not found";

import style from "../MainRoutePage/Main.route.module.scss";

const MainRoute = () => {
    const ROOT_TO_MAINPAGE = '/mainpage';
    const ROOT_TO_BASKET = '/basket';
  return (
    <div>
      <nav className={style.navigation}>
        <li>
          <NavLink
            to={ROOT_TO_MAINPAGE}
            className={style.links}
            style={({ isActive }) => {
              return isActive ? { background: "#FFB4EA" } : {};
            }}
          >
            Back
          </NavLink>
          <NavLink
            className={style.links}
            to={ROOT_TO_BASKET}
            style={({ isActive }) => {
              return isActive ? { background: "#FFB4EA" } : {};
            }}
          >
            Basket
          </NavLink>
        </li>
      </nav>
      <div className={style.box}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainRoute;
