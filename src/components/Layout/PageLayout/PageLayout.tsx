import { useState } from "react";
import { appDataInterface, appFunctionalitiesInterface } from "../../../types";
import BodyLayout from "../BodyLayout/BodyLayout";
import SidebarLayout from "../SidebarLayout/SidebarLayout";
import toast, { Toaster } from "react-hot-toast";

const PageLayout = () => {
  const [appActionState, setAppActionState] = useState("");
  const [appData, setAppData] = useState<appDataInterface[]>([
    {
      title: "Company Directory",
      headers: ["NAME", "STATE", "EMPLOYEE", ""],
      data: [
        {
          id: 0,
          name: "Netflix Inc.",
          state: "100 Winchester Circle Los Gatos",
          employee: 5843,
        },
      ],
    },
  ]);

  const appFunctionalities: appFunctionalitiesInterface = {
    changeAppActionState: (actionState: string) => {
      setAppActionState(actionState);
    },
    getAppActionState: () => {
      return appActionState;
    },
    getAppData: () => {
      return appData;
    },
    addNewItem: ({ name, state, employee }) => {
      const tempAppData = [...appData];
      tempAppData[0] = {
        title: "Company Directory",
        headers: ["NAME", "STATE", "EMPLOYEE", ""],
        data: [
          ...appData[0].data,
          {
            id: appData[0].data.length,
            name: name,
            state: state,
            employee: employee,
          },
        ],
      };
      setAppData(tempAppData);
      appFunctionalities.toastify(name, "added", "success");
    },
    deleteItem: (itemId, itemName) => {
      const tempAppData = [...appData];
      tempAppData[0] = {
        ...appData[0],
        data: [...appData[0].data.filter((el) => el.id !== itemId)],
      };
      setAppData(tempAppData);
      appFunctionalities.toastify(itemName, "deleted", "success");
    },
    toastify: (
      companyName: string,
      action: string,
      type: string = "success"
    ) => {
      if (type === "success") {
        toast.success(
          `${
            companyName.charAt(0).toUpperCase() + companyName.slice(1)
          } successfully ${action}`
        );
      } else if (type === "error") {
        toast.error(companyName);
      }
    },
  };

  return (
    <>
      <div className="grid grid-cols-[350px_1fr] min-h-screen bg-white">
        <SidebarLayout appFunctionalities={appFunctionalities} />
        <BodyLayout appFunctionalities={appFunctionalities} />
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
};

export default PageLayout;
