import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";
import Menu from "../Menu/Menu";

const MainRoute = () => {
  const PUBLIC = [
    { link: "/", element: <Menu />, id: 1 },
    { link: "/admin", element: <Admin />, id: 2 },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoute;
