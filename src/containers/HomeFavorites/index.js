import React, { useContext, useEffect } from "react";
import { HeaderContext } from "../../global_variables/NavContext";

const HomeFavorites = () => {
  const { handleStore } = useContext(HeaderContext);
  const nav = "HomeFavorites";
  useEffect(() => {
    handleStore(nav);
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f26133",
      }}
    >
      HomeFavorites
    </div>
  );
};

export default HomeFavorites;
