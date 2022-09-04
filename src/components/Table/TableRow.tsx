import { FC } from "react";
import { PencilIcon, TrashIcon } from "../Icons";

interface tableRowInterface {
  idCol: number;
  nameCol: string;
  stateCol: string;
  employeeCol: string | number;
  deleteTableRow: (rowId: number, itemName: string) => void;
}

const TableRow: FC<tableRowInterface> = ({
  idCol,
  nameCol,
  stateCol,
  employeeCol,
  deleteTableRow,
}) => {
  const employeeFormatter = Intl.NumberFormat("en", { notation: "standard" });

  return (
    <div
      className={`grid grid-cols-[1fr_1fr_1fr_75px] place-items-start text-xs text-[#5A6474] px-5 py-4 group ${
        idCol % 2 === 0 && "bg-[#f8f8f8]"
      }`}
    >
      <div className="font-semibold">{nameCol}</div>
      <div className="font-semibold">{stateCol}</div>
      <div className="font-semibold">
        {employeeFormatter.format(Number(employeeCol))}
      </div>
      <div className="font-semibold flex items-center gap-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <button className="w-4 cursor-pointer">
          <PencilIcon />
        </button>
        <button
          className="w-4 cursor-pointer"
          onClick={() => deleteTableRow(idCol, nameCol)}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default TableRow;
