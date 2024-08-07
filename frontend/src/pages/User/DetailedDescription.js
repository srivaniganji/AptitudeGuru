import React from "react";
import Header from "../../components/Header";
import { userHeaderContent } from "../../store/data";
import RenderJob from "../../components/RenderJob";
import RenderApplicationForm from "../../components/RenderApplicationForm";

const DetailedDescription = () => {
  return (
    <>
      <Header headerContent={userHeaderContent} />
      <RenderJob />
      <RenderApplicationForm />
    </>
  );
};

export default DetailedDescription;
