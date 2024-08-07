import React from "react";
import Header from "../../components/Header";
import { userHeaderContent } from "../../store/data";

const JobsApplied = () => {
  return (
    <>
      <Header headerContent={userHeaderContent} />
      <div>JobsApplied</div>;
    </>
  );
};

export default JobsApplied;
