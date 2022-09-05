import { FC } from "react";
import { appFunctionalitiesInterface } from "../../types";
import TableRow from "./TableRow";

interface tableInterface {
  appFunctionalities: appFunctionalitiesInterface;
}

const Table: FC<tableInterface> = ({ appFunctionalities }) => {
  const deleteTableRow = (rowId: number, itemName: string) => {
    appFunctionalities.deleteItem(rowId, itemName);
  };

  const editTableRow = (
    rowId: number,
    data: {
      name: string;
      state: string;
      employee: number | string;
    }
  ) => {
    appFunctionalities.setSelectedData({ id: rowId, ...data });
    appFunctionalities.changeAppActionState("edit");
  };

  return (
    <div className="grid-cols-1">
      <div className="grid grid-cols-[1fr_1fr_1fr_75px] place-items-start text-xs text-[#5A6474] px-5 py-4">
        {appFunctionalities.getAppData()[0].headers.map((item, index) => (
          <div key={index} className="font-medium">
            {item}
          </div>
        ))}
      </div>
      <div>
        {appFunctionalities.getAppData()[0].data.map((item) => (
          <TableRow
            key={item.id}
            idCol={item.id}
            nameCol={item.name}
            stateCol={item.state}
            employeeCol={item.employee}
            deleteTableRow={deleteTableRow}
            editTableRow={editTableRow}
          />
        ))}
      </div>
    </div>
  );
};

export default Table;
