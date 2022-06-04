import React, { useContext, useEffect } from "react";
import { HeaderContext } from "../../global_variables/NavContext";

const ChefsChoice = () => {
  const { handleStore } = useContext(HeaderContext);
  const nav = "ChefsChoice";
  useEffect(() => {
    handleStore(nav);
  }, []);
  return <div>ChefsChoice</div>;
};

export default ChefsChoice;
