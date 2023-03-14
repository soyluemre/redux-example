import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import Login from "../pages/Login";

const PrivateRouter = () => {
  const { user } = useSelector((state) => state.auth);
  return user ? <Outlet /> : <Login />;
};

export default PrivateRouter;
