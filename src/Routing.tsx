import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { RouteProps } from "react-router-dom";
import ProdList from "./app/ProdList/ProdList";

const Routing = () => {
  let PUBLIC_ROUTES: RouteProps[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <ProdList />,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.path} element={item.element} key={item.path} />
      ))}
    </Routes>
  );
};

export default Routing;
