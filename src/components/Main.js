import React from "react";
import NavHeader from "./NavHeader";
import Movies from "./screens/Movies";
export const Main = () => {
  const navItem = ["MOVIES", "TVSHOWS", "UPCOMING", "HOTS"];
  return (
    <div >
      <NavHeader navItems={navItem} />
      In the main page
      <Movies />
    </div>
  );
};

export default Main;
