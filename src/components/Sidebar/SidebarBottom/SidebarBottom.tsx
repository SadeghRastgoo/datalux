import SidebarBottomItem from "./SidebarBottomItem";
import { ChatIcon, SignOutIcon } from "../../Icons";

const SidebarBottom = () => {
  return (
    <div>
      <ul className="flex flex-col gap-2 text-[#757D8A] text-sm">
        <SidebarBottomItem title="Support" Icon={<ChatIcon />} />
        <SidebarBottomItem title="Sign Out" Icon={<SignOutIcon />} />
      </ul>
    </div>
  );
};

export default SidebarBottom;
