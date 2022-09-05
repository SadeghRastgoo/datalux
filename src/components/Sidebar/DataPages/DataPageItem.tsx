import { FC, ReactElement } from "react";
import { MenuBar3Icon } from "../../Icons";

interface dataPageItem {
  title: string;
  Icon: ReactElement;
}

const DataPageItem: FC<dataPageItem> = ({ title, Icon }) => {
  return (
    <li
      draggable
      className="data-page-item grid grid-cols-[25px_1fr_20px] gap-3 items-center hover:text-[#5A6474] text-[#757D8A] dark:text-neutral-400 py-[.4rem] px-2.5 transition-colors duration-200 hover:bg-white rounded-md cursor-pointer shadow-none hover:shadow-sm hover:shadow-neutral-200 dark:hover:shadow-none dark:hover:bg-[#16181d] group"
    >
      <div className="p-0.5 flex justify-center items-center">{Icon}</div>
      <h4 className="data-page-item__title text-sm font-medium transition-all">
        {title}
      </h4>
      <div className="text-[#c2c7cf] dark:text-neutral-500 group-hover:text-inherit cursor-grab">
        <MenuBar3Icon />
      </div>
    </li>
  );
};

export default DataPageItem;
