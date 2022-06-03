import React, { createContext, useState } from "react";

import App from "../App";

export const HeaderContext = createContext();

const NavContext = () => {
  const [showSub, setShowSub] = useState(false);
  const [showSideSub, setShowSideSub] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  const setShow = () => {
    setShowSub(!showSub);
  };
  const setSideShow = () => {
    setShowSideSub(!showSideSub);
  };
  const showSiderbar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <HeaderContext.Provider
      value={{
        showSub,
        setShowSub,
        setShow,
        showSidebar,
        setShowSidebar,
        showSiderbar,
        showSideSub,
        setShowSideSub,
        setSideShow,
      }}
    >
      <App />
    </HeaderContext.Provider>
  );
};

export default NavContext;
