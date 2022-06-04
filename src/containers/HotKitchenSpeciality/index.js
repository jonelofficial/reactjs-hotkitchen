import React, { useContext, useEffect } from "react";
import { HeaderContext } from "../../global_variables/NavContext";

const HotKitchenSpeciality = () => {
  const { handleStore } = useContext(HeaderContext);
  const nav = "HotKitchenSpeciality";
  useEffect(() => {
    handleStore(nav);
  }, []);
  return <div>HotKitchenSpeciality</div>;
};

export default HotKitchenSpeciality;
