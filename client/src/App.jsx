import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav> NavBar</nav>
      <Outlet />
      <footer> Footer</footer>
    </>
  );
};

export default App;
