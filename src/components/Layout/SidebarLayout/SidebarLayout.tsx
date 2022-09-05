import { FC } from "react";
import { appFunctionalitiesInterface } from "../../../types";
import Form from "../../Form/Form";
import DataPages from "../../Sidebar/DataPages/DataPages";
import SidebarBottom from "../../Sidebar/SidebarBottom/SidebarBottom";
import UserSection from "../../Sidebar/UserSection/UserSection";

interface sidebarLayoutInterface {
  appFunctionalities: appFunctionalitiesInterface;
}

const SidebarLayout: FC<sidebarLayoutInterface> = ({ appFunctionalities }) => {
  return (
    <aside className="grid grid-cols-1 grid-rows-[auto_1fr_auto] gap-14 bg-[#f1f3f5] px-5 py-7 border-r border-[#e1e3e6] dark:bg-[#121418] dark:border-[#2c2c2c]">
      {appFunctionalities.getAppActionState() === "" ? (
        <>
          <UserSection appFunctionalities={appFunctionalities} />
          <DataPages />
          <SidebarBottom />
        </>
      ) : (
        <Form
          appFunctionalities={appFunctionalities}
          editState={appFunctionalities.getAppActionState() === "edit" && true}
        />
      )}
    </aside>
  );
};

export default SidebarLayout;
