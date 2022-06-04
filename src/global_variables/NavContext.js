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
  const [activeHomeFavorites, setHomeFavorites] = useState(false);
  const [activeChefsChoice, setChefsChoice] = useState(false);
  const [activeHotKitchenSpeciality, setHotKitchenSpeciality] = useState(false);

  const handleStore = (data) => {
    const nav = `set${data}`;
    switch (nav) {
      case "setStore":
        setStore(true);
        setFaqs(false);
        setHomeFavorites(false);
        setChefsChoice(false);
        setHotKitchenSpeciality(false);
        break;
      case "setFaqs":
        setFaqs(true);
        setStore(false);
        setHomeFavorites(false);
        setChefsChoice(false);
        setHotKitchenSpeciality(false);
        break;
      case "setHomeFavorites":
        setHomeFavorites(true);
        setStore(false);
        setFaqs(false);
        setChefsChoice(false);
        setHotKitchenSpeciality(false);
        break;
      case "setStore":
        setChefsChoice(true);
        setStore(false);
        setFaqs(false);
        setHomeFavorites(false);
        setHotKitchenSpeciality(false);
        break;
      case "setStore":
        setHotKitchenSpeciality(true);
        setStore(false);
        setFaqs(false);
        setHomeFavorites(false);
        setChefsChoice(false);
        break;
      default:
        setStore(false);
        setFaqs(false);
        setHomeFavorites(false);
        setChefsChoice(false);
        setHotKitchenSpeciality(false);
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
        activeHomeFavorites,
        activeChefsChoice,
        activeHotKitchenSpeciality,
      }}
    >
      <App />
    </HeaderContext.Provider>
  );
};

export default NavContext;
