import { useState } from "react";
import { appDataInterface, appFunctionalitiesInterface } from "./types";
import PageLayout from "./components/Layout/PageLayout/PageLayout";
import toast from "react-hot-toast";
import LoginModal from "./components/LoginModal/LoginModal";

function App() {
  const [appActionState, setAppActionState] = useState("");
  const [darkToggle, setDarkToggle] = useState(false);
  const [userProfile, setUserProfile] = useState({
    username: "",
    userAvatar: "",
  });
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
  const [tempSelectedData, setTempSelectedData] = useState<{
    id: number | undefined;
    name: string;
    state: string;
    employee: number | string;
  }>({
    id: undefined,
    name: "",
    state: "",
    employee: "",
  });

  const appFunctionalities: appFunctionalitiesInterface = {
    changeAppActionState: (actionState: string) => {
      setAppActionState(actionState);
    },
    setUserProfile: (username: string, avatarSrc: string) => {
      setUserProfile({
        username: username,
        userAvatar: avatarSrc,
      });
    },
    getUserProfile: () => {
      return userProfile;
    },
    toggleDarkMode: () => {
      setDarkToggle(!darkToggle);
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
    editItem: (itemId, newData) => {
      const tempAppData = [...appData];
      tempAppData[0] = {
        ...appData[0],
        data: [
          ...appData[0].data.map((el) =>
            el.id !== itemId
              ? el
              : {
                  id: itemId,
                  name: newData.name,
                  state: newData.state,
                  employee: newData.employee,
                }
          ),
        ],
      };
      setAppData(tempAppData);
      appFunctionalities.toastify(newData.name, "edited", "success");
    },
    setSelectedData: (data) => {
      setTempSelectedData(data);
    },
    getSelectedData: () => {
      return tempSelectedData;
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
    <div className={darkToggle ? "dark" : ""}>
      {<LoginModal appFunctionalities={appFunctionalities} />}
      <PageLayout appFunctionalities={appFunctionalities} />
    </div>
  );
}

export default App;
