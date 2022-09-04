import { FC, ReactElement } from "react";

interface sidebarBottomItemInterface {
  title: string;
  Icon?: ReactElement;
}

const SidebarBottomItem: FC<sidebarBottomItemInterface> = ({ title, Icon }) => {
  return (
    <li className="grid grid-cols-[22px_1fr] items-center gap-3 hover:text-[#5A6474] text-[#757D8A] py-1 px-2.5 transition-colors duration-200 rounded-md cursor-pointer group">
      <div>{Icon}</div>
      <span>{title}</span>
    </li>
  );
};

export default SidebarBottomItem;
