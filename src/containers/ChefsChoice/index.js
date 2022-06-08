import React, { useContext, useEffect } from "react";
import { HeaderContext } from "../../global_variables/NavContext";

const ChefsChoice = () => {
  const { handleStore } = useContext(HeaderContext);
  const nav = "ChefsChoice";
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
      ChefsChoice
    </div>
  );
};

export default ChefsChoice;
