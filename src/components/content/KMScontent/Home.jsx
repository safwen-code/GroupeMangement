import React, { useContext, useEffect } from "react";
import KmsContent from "./KmsContent";

import ContextKm from "../../context/ContextKm";

const Home = () => {
  const contextKm = useContext(ContextKm);
  useEffect(() => {
    getAllKms();
    //eslint-disable-next-line
  }, []);
  const { kmsInfo, getAllKms, loading } = contextKm;

  console.log("kmInfo from home ", kmsInfo);

  return (
    <div className="container  mt-5">
      <KmsContent Kmsinfo={kmsInfo} loading={loading} />
    </div>
  );
};

export default Home;
