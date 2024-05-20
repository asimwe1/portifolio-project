import React from "react";
import OurServices from "../pages/services";
import Usercustomers from "../pages/customers";
import ProjectPage from "../pages/project";
import Userfaqs from "../pages/faqs";
import Userfooter from "../pages/footer";

const UserHome = () => {
  return (
    <div >
      <div>
        <OurServices />
      </div>
      <div >
        <ProjectPage/>
      </div>
      <div className="" >
        <Usercustomers />
      </div>
      <div>
        <Userfaqs />
      </div>
      <div>
        <Userfooter/>
      </div>
    </div>
  );
};

export default UserHome;
