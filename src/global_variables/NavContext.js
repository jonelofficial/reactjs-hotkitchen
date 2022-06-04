import React, { createContext, useState } from "react";

import App from "../App";

export const HeaderContext = createContext();

const NavContext = () => {
  const [showSub, setShowSub] = useState(false);
  const [showSideSub, setShowSideSub] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const setShow = () => {
    setShowSub(!showSub);
  };
  const setSideShow = () => {
    setShowSideSub(!showSideSub);
  };
  const showSiderbar = () => {
    setShowSidebar(!showSidebar);
  };

  // Header Active Class
  const [activeStore, setStore] = useState(false);
  const [activeFaqs, setFaqs] = useState(false);
  const [activeHome, setHome] = useState(false);
  const [activeChefs, setChefs] = useState(false);
  const [activeHot, setHot] = useState(false);

  const handleStore = (data) => {
    const nav = `set${data}`;
    switch (nav) {
      case "setStore":
        setStore(true);
        setFaqs(false);
        setHome(false);
        setChefs(false);
        setHot(false);
        break;
      case "setFaqs":
        setFaqs(true);
        setStore(false);
        setHome(false);
        setChefs(false);
        setHot(false);
        break;
      case "setHomeFavorites":
        setHome(true);
        setStore(false);
        setFaqs(false);
        setChefs(false);
        setHot(false);
        break;
      case "setChefsChoice":
        setChefs(true);
        setStore(false);
        setFaqs(false);
        setHome(false);
        setHot(false);
        break;
      case "setHotKitchenSpeciality":
        setHot(true);
        setStore(false);
        setFaqs(false);
        setHome(false);
        setChefs(false);
        break;
      default:
        setStore(false);
        setFaqs(false);
        setHome(false);
        setChefs(false);
        setHot(false);
        break;
    }
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
        handleStore,
        activeStore,
        activeFaqs,
        activeHome,
        activeChefs,
        activeHot,
      }}
    >
      <App />
    </HeaderContext.Provider>
  );
};

export default NavContext;
