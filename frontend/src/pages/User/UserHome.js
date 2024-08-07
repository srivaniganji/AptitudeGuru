import Header from "../../components/Header";
import { userHeaderContent } from "../../store/data";
import RenderJobs from "../../components/RenderJobs";

const UserHome = () => {
  return (
    <>
      <Header headerContent={userHeaderContent} />
      <RenderJobs />
    </>
  );
};

export default UserHome;
