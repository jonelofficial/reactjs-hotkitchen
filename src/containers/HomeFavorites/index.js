import React, { useContext, useEffect } from "react";
import { HeaderContext } from "../../global_variables/NavContext";

const HomeFavorites = () => {
  const { handleStore } = useContext(HeaderContext);
  const nav = "HomeFavorites";
  useEffect(() => {
    handleStore(nav);
  }, []);
  return <div>HomeFavorites</div>;
};

export default HomeFavorites;
