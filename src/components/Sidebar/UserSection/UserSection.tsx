import { FC } from "react";
import { appFunctionalitiesInterface } from "../../../types";
import { MoonIcon, SettingIcon } from "../../Icons";

interface userSectionInterface {
  appFunctionalities: appFunctionalitiesInterface;
}

const UserSection: FC<userSectionInterface> = ({ appFunctionalities }) => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-3">
      <div className="aspect-square w-14 bg-[#e2e3e2] p-1.5 rounded-full">
        <img
          className="w-full h-full object-contain"
          src="/public/assets/memoji/apple-memoji-update-headwear-masks-hairstyles.png"
          alt="User Avatar Memoji"
        />
      </div>
      <div className="flex flex-col items-start justify-center">
        <span className="text-[#757D8A] text-sm">Welcome Back,</span>
        <span className="text-[#586476] text-lg font-bold leading-tight ">
          Sadegh Rastgoo
        </span>
      </div>
      <div className="flex gap-1 items-center">
        <button
          className="bg-white rounded-md py-1.5 px-3.5 border border-[#E1E3E6] shadow  shadow-neutral-200"
          onClick={() => appFunctionalities.toggleDarkMode()}
        >
          <MoonIcon />
        </button>
      </div>
    </div>
  );
};

export default UserSection;
