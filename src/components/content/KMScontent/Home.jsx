import React from "react";
import KmsContent from "./KmsContent";
import { KmsData } from "./KmsData";

const Home = () => {
  return (
    <div className="container border border-dark mt-5">
      <KmsContent Kmsinfo={KmsData} />
    </div>
  );
};

export default Home;
