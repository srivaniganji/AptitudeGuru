import React from "react";
import Header from "../../components/Header";
import { recruiterHeaderContent } from "../../store/data";

const JobsPosted = () => {
  return (
    <>
      <Header headerContent={recruiterHeaderContent} />
      <div>JobsPosted</div>;
    </>
  );
};

export default JobsPosted;
