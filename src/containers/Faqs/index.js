import React, { useContext, useEffect } from "react";
import { HeaderContext } from "../../global_variables/NavContext";

const Faqs = () => {
  const { handleStore } = useContext(HeaderContext);
  const nav = "Faqs";
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
      Faqs
    </div>
  );
};

export default Faqs;
