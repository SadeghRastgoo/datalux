import { FC } from "react";
import { appFunctionalitiesInterface } from "../../../types";
import { CloseIcon, PencilIcon, SearchMagnifyIcon } from "../../Icons";

interface bodyHeaderInterface {
  appFunctionalities: appFunctionalitiesInterface;
}

const BodyHeader: FC<bodyHeaderInterface> = ({ appFunctionalities }) => {
  return (
    <header className="grid grid-cols-[1fr_370px_200px] gap-4 items-center p-5 text-lg border-b border-b-[#e1e3e6]">
      <h2 className="font-bold text-xl text-[#3d4d63] truncate">
        Company Directory 💼
      </h2>
      <div className="grid grid-cols-[20px_1fr_20px] gap-2 items-center rounded-md border border-[#e1e3e6] h-full mx-1 px-2 py-2 text-[#757D8A] text-sm transition-all focus-within:outline-[3px] focus-within:outline focus-within:outline-[#dae3ff] focus-within:border-[#4274ff]">
        <SearchMagnifyIcon />
        <input
          type="text"
          name="searchbox"
          id=""
          className="outline-none text-[#5A6474] bg-transparent"
          placeholder="Search here ..."
        />
        <div className="bg-[#f1f2f3] rounded-full p-0.5 text-[#757D8A] cursor-pointer opacity-0">
          <CloseIcon />
        </div>
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-4 h-full text-sm">
        <button
          className="text-white rounded-md font-semibold custom-gradient-1"
          onClick={() => appFunctionalities.changeAppActionState("add")}
        >
          Add Company
        </button>
        <button className="text-[#757D8A] rounded-md border border-[#e1e3e6] h-full w-10 flex justify-center items-center p-3 shadow-sm shadow-neutral-100">
          <PencilIcon />
        </button>
      </div>
    </header>
  );
};

export default BodyHeader;
