import React from "react";
import Header from "../../components/Header";
import { recruiterHeaderContent } from "../../store/data";

const RecruiterHome = () => {
  return (
    <>
      <Header headerContent={recruiterHeaderContent} />
      <div>Recruoer</div>
    </>
  );
};

export default RecruiterHome;
