import { FC } from "react";
import { appFunctionalitiesInterface } from "../../../types";
import { CloseIcon, PencilIcon, SearchMagnifyIcon } from "../../Icons";

interface bodyHeaderInterface {
  appFunctionalities: appFunctionalitiesInterface;
}

const BodyHeader: FC<bodyHeaderInterface> = ({ appFunctionalities }) => {
  return (
    <header className="grid grid-cols-[1fr_370px_200px] gap-4 items-center p-5 text-lg border-b border-b-[#e1e3e6] dark:border-b-[#2f2f2f]">
      <h2 className="font-bold text-xl text-[#3d4d63] dark:text-[#aaa] truncate">
        Company Directory 💼
      </h2>
      <div className="grid grid-cols-[20px_1fr_20px] gap-2 items-center rounded-md border border-[#e1e3e6] dark:border-[#2f2f2f] h-full mx-1 px-2 py-2 text-[#757D8A] text-sm transition-all focus-within:outline-[3px] dark:focus-within:outline-2 focus-within:outline focus-within:outline-[#dae3ff] dark:focus-within:outline-[#272626] focus-within:border-[#4274ff] group">
        <SearchMagnifyIcon />
        <input
          type="text"
          name="searchbox"
          id=""
          className="outline-none text-[#5A6474] dark:placeholder:text-[#555] dark:text-[#aaa] bg-transparent"
          placeholder="Search here ..."
        />
        <div className="bg-[#f1f2f3] dark:bg-[#2f2f2f] rounded-full group-focus-within:opacity-100 p-0.5 text-[#757D8A] cursor-pointer opacity-0">
          <CloseIcon />
        </div>
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-4 h-full text-sm">
        <button
          className="text-white dark:text-[#7d8896] rounded-md font-semibold custom-gradient-1"
          onClick={() => appFunctionalities.changeAppActionState("add")}
        >
          Add Company
        </button>
        <button className="text-[#757D8A] rounded-md border border-[#e1e3e6] dark:border-[#2f2f2f] h-full w-10 flex justify-center items-center p-3 shadow-sm shadow-neutral-100 dark:shadow-none">
          <PencilIcon />
        </button>
      </div>
    </header>
  );
};

export default BodyHeader;
