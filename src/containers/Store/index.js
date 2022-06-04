import React, { useContext, useEffect } from "react";
import { HeaderContext } from "../../global_variables/NavContext";

const Store = () => {
  const { handleStore } = useContext(HeaderContext);
  const nav = "Store";
  useEffect(() => {
    handleStore(nav);
  }, []);
  return <div>Store</div>;
};

export default Store;
