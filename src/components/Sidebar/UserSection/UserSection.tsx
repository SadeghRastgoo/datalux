import { FC, useState } from "react";
import { appFunctionalitiesInterface } from "../../../types";
import { MoonIcon, SunIcon } from "../../Icons";

interface userSectionInterface {
  appFunctionalities: appFunctionalitiesInterface;
}

const UserSection: FC<userSectionInterface> = ({ appFunctionalities }) => {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-3">
      <div className="aspect-square w-14 bg-[#e2e3e2] dark:bg-[#292929] p-1.5 rounded-full">
        <img
          className={`w-full h-full object-contain ${
            appFunctionalities.getUserProfile().userAvatar || "hidden"
          }`}
          src={appFunctionalities.getUserProfile().userAvatar}
          alt="User Avatar Memoji"
        />
      </div>
      <div className="flex flex-col items-start justify-center">
        <span className="text-[#757D8A] dark:text-[#666666] text-sm">
          Welcome Back,
        </span>
        <span className="text-[#586476] dark:text-[#888888] text-lg font-bold leading-tight ">
          {appFunctionalities.getUserProfile().username || "Guest User"}
        </span>
      </div>
      <div className="flex gap-1 items-center">
        <button
          className={`bg-white dark:bg-[#262627] rounded-md py-1.5 px-3.5 border border-[#E1E3E6] dark:border-[#2b2c2c] shadow  shadow-neutral-200 dark:shadow-none h-[33px] overflow-hidden`}
          onClick={() => {
            setToggleDarkMode(!toggleDarkMode);
            appFunctionalities.toggleDarkMode();
          }}
        >
          {/* {!toggleDarkMode ? <SunIcon /> : <MoonIcon />} */}
          <div
            className={`relative transition-all duration-1000 ${
              toggleDarkMode ? "-top-[1.7rem]" : "-top-0"
            }`}
          >
            <div>
              <SunIcon />
            </div>
            <div className="mt-2">
              <MoonIcon />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default UserSection;
