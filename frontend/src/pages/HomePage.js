import React from "react";
import Header from "../components/Header";
import { homeHeaderContent } from "../store/data";

const HomePage = () => {
  return (
    <>
      <Header headerContent={homeHeaderContent} />
      <div>HomePage</div>;
    </>
  );
};

export default HomePage;
