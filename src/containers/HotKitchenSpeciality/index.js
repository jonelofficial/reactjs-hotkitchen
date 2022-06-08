import React, { useContext, useEffect } from "react";
import { HeaderContext } from "../../global_variables/NavContext";

const HotKitchenSpeciality = () => {
  const { handleStore } = useContext(HeaderContext);
  const nav = "HotKitchenSpeciality";
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
      HotKitchenSpeciality
    </div>
  );
};

export default HotKitchenSpeciality;
