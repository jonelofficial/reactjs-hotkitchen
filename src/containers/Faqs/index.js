import React, { useContext, useEffect } from "react";
import { HeaderContext } from "../../global_variables/NavContext";

const Faqs = () => {
  const { handleStore } = useContext(HeaderContext);
  const nav = "Faqs";
  useEffect(() => {
    handleStore(nav);
  }, []);
  return <div>Faqs</div>;
};

export default Faqs;
