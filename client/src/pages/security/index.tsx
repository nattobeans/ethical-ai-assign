import React from "react";
import { Outlet } from "react-router-dom";
import SecurityHero from "./SecurityHero";

const Security = () => {
  return (
    <>
      <SecurityHero />
      <Outlet />
    </>
  );
};

export default Security;
