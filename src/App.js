import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Store from "./containers/Store";
import Faqs from "./containers/Faqs";
import HomeFavorites from "./containers/HomeFavorites";
import ChefsChoice from "./containers/ChefsChoice";
import HotKitchenSpeciality from "./containers/HotKitchenSpeciality";

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="store" element={<Store />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="home-favorites" element={<HomeFavorites />} />
        <Route path="chefs-choice" element={<ChefsChoice />} />
        <Route
          path="hot-kitchen-speciality"
          element={<HotKitchenSpeciality />}
        />
      </Routes>
    </>
  );
};

export default App;
