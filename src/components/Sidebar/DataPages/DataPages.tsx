import DataPageItem from "./DataPageItem";
import {
  CircleStackIcon,
  DollarIcon,
  PeopleIcon,
  ServerIcon,
} from "../../Icons";

const DataPages = () => {
  return (
    <div className="flex flex-col gap-4">
      <ul className="flex flex-col gap-2.5">
        <DataPageItem title="Company Directory" Icon={<CircleStackIcon />} />
        <DataPageItem title="Currencies" Icon={<DollarIcon />} />
        <DataPageItem title="Server Database" Icon={<ServerIcon />} />
        <DataPageItem title="Friends List" Icon={<PeopleIcon />} />
      </ul>
    </div>
  );
};

export default DataPages;
