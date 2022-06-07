import React, { createContext, useState } from "react";

import App from "../App";

export const HeaderContext = createContext();

const NavContext = () => {
  const [showSub, setShowSub] = useState(false);
  const [showSideSub, setShowSideSub] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  // Navigation interaction
  const [scrollNav, setScrollNav] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  var prevScroll = window.pageYOffset;

  const changeNav = () => {
    var currentScroll = window.pageYOffset;

    if (prevScroll > currentScroll) {
      setShowDetails(true);
      // console.log("Scroll up");
    } else {
      setScrollNav(true);
      setShowDetails(false);
      // console.log("Scroll down");
    }
    if (currentScroll === 0) {
      setScrollNav(false);
      // console.log("Scroll in the top");
    }
    prevScroll = currentScroll;
  };

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
        changeNav,
        scrollNav,
        showDetails,
      }}
    >
      <App />
    </HeaderContext.Provider>
  );
};

export default NavContext;
