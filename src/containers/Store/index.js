import React, { useContext, useEffect } from "react";
import { HeaderContext } from "../../global_variables/NavContext";

const Store = () => {
  const { handleStore } = useContext(HeaderContext);
  const nav = "Store";
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
      Store
    </div>
  );
};

export default Store;
