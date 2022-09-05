import { FC } from "react";
import { PencilIcon, TrashIcon } from "../Icons";

interface tableRowInterface {
  idCol: number;
  nameCol: string;
  stateCol: string;
  employeeCol: string | number;
  deleteTableRow: (rowId: number, itemName: string) => void;
  editTableRow: (
    rowId: number,
    data: {
      name: string;
      state: string;
      employee: number | string;
    }
  ) => void;
}

const TableRow: FC<tableRowInterface> = ({
  idCol,
  nameCol,
  stateCol,
  employeeCol,
  deleteTableRow,
  editTableRow,
}) => {
  const employeeFormatter = Intl.NumberFormat("en", { notation: "standard" });

  return (
    <div
      className={`grid grid-cols-[1fr_1fr_1fr_75px] place-items-start text-xs text-[#5A6474] dark:text-[#656565] px-5 py-4 group border-l border-l-transparent hover:border-l-slate-300 odd:bg-[#f8f8f8] dark:odd:bg-[#20242b]`}
    >
      <div className="font-semibold">{nameCol}</div>
      <div className="font-semibold">{stateCol}</div>
      <div className="font-semibold">
        {employeeFormatter.format(Number(employeeCol))}
      </div>
      <div className="font-semibold flex items-center gap-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <button
          className="w-4 cursor-pointer"
          onClick={() =>
            editTableRow(idCol, {
              name: nameCol,
              state: stateCol,
              employee: employeeCol,
            })
          }
        >
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
