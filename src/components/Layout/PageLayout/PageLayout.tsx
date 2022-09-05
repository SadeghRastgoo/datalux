import BodyLayout from "../BodyLayout/BodyLayout";
import SidebarLayout from "../SidebarLayout/SidebarLayout";
import { Toaster } from "react-hot-toast";
import { FC } from "react";
import { appFunctionalitiesInterface } from "../../../types";

interface pageLayoutInterface {
  appFunctionalities: appFunctionalitiesInterface;
}

const PageLayout: FC<pageLayoutInterface> = ({ appFunctionalities }) => {
  return (
    <>
      <div className="grid grid-cols-[350px_1fr] min-h-screen bg-white dark:bg-[#202125]">
        <SidebarLayout appFunctionalities={appFunctionalities} />
        <BodyLayout appFunctionalities={appFunctionalities} />
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
};

export default PageLayout;
