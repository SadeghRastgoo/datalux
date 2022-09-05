import { FC, useEffect, useState } from "react";
import { appFunctionalitiesInterface } from "../../types";

interface formInterface {
  appFunctionalities: appFunctionalitiesInterface;
  editState: boolean;
}

const Form: FC<formInterface> = ({ appFunctionalities, editState = false }) => {
  const [companyNameInp, setCompanyNameInp] = useState("");
  const [companyStateInp, setCompanyStateInp] = useState("");
  const [companyEmployeeInp, setCompanyEmployeeInp] = useState("");

  const addNewItem = (e: any) => {
    e.preventDefault();
    if (
      !companyNameInp.length ||
      !companyStateInp.length ||
      !companyEmployeeInp.length
    ) {
      appFunctionalities.toastify("Please fill fields correctly", "", "error");
    } else {
      appFunctionalities.addNewItem({
        name: companyNameInp,
        state: companyStateInp,
        employee: companyEmployeeInp,
      });
      setCompanyNameInp("");
      setCompanyStateInp("");
      setCompanyEmployeeInp("");
    }
  };

  const applyChanges = (e: any) => {
    e.preventDefault();
    if (
      !companyNameInp.length ||
      !companyStateInp.length ||
      !companyEmployeeInp.length
    ) {
      appFunctionalities.toastify("Please fill fields correctly", "", "error");
    } else {
      appFunctionalities.editItem(appFunctionalities.getSelectedData().id, {
        name: companyNameInp,
        state: companyStateInp,
        employee: Number(companyEmployeeInp),
      });
      setCompanyNameInp("");
      setCompanyStateInp("");
      setCompanyEmployeeInp("");
      appFunctionalities.changeAppActionState("");
    }
  };

  useEffect(() => {
    if (editState) {
      setCompanyNameInp(appFunctionalities.getSelectedData().name);
      setCompanyStateInp(appFunctionalities.getSelectedData().state);
      setCompanyEmployeeInp(
        appFunctionalities.getSelectedData().employee.toString()
      );
    }
  }, []);

  return (
    <div>
      <h3 className="text-xl font-bold text-[#3d4d63] dark:text-[#aaaaab]">
        {!editState ? "Add New Company" : "Edit Selected Company"}
      </h3>
      <form className="flex flex-col gap-5 my-8">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="inp-name"
            className="block uppercase tracking-wide text-[#596473] text-xs font-bold"
          >
            Company Name:
          </label>
          <input
            className="bg-gray-50 dark:bg-[#20242b] dark:focus:outline-neutral-700 dark:text-[#aaa] dark:placeholder:text-[#666] dark:border-gray-700 border border-gray-300 text-gray-800 text-sm rounded-md focus:outline focus:outline-2 transition-all focus:border-blue-500 focus:outline-blue-200 block w-full py-2 px-3"
            placeholder="e.g Apple inc."
            type="text"
            id="inp-name"
            maxLength={20}
            value={companyNameInp}
            onChange={(e) => setCompanyNameInp(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="inp-state"
            className="block uppercase tracking-wide text-[#596473] text-xs font-bold"
          >
            Company State:
          </label>
          <input
            className="bg-gray-50 dark:bg-[#20242b] dark:focus:outline-neutral-700 dark:text-[#aaa] dark:placeholder:text-[#666] dark:border-gray-700 border border-gray-300 text-gray-800 text-sm rounded-md focus:outline focus:outline-2 transition-all focus:border-blue-500 focus:outline-blue-200 block w-full py-2 px-3"
            placeholder="e.g California"
            type="text"
            id="inp-state"
            value={companyStateInp}
            maxLength={35}
            onChange={(e) => setCompanyStateInp(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="inp-employee"
            className="block uppercase tracking-wide text-[#596473] text-xs font-bold"
          >
            Company Employees:
          </label>
          <input
            className="bg-gray-50 dark:bg-[#20242b] dark:focus:outline-neutral-700 dark:text-[#aaa] dark:placeholder:text-[#666] dark:border-gray-700 border border-gray-300 text-gray-800 text-sm rounded-md focus:outline focus:outline-2 transition-all focus:border-blue-500 focus:outline-blue-200 block w-full py-2 px-3"
            placeholder="e.g 13,400"
            type="text"
            id="inp-employee"
            value={companyEmployeeInp}
            maxLength={20}
            onKeyDown={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={(e) => setCompanyEmployeeInp(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-2 mt-2">
          <button
            className="text-white dark:text-[#ddd] text-sm py-2 cursor-pointer rounded-md font-semibold custom-gradient-1"
            type="submit"
            onClick={(e) => (!editState ? addNewItem(e) : applyChanges(e))}
          >
            {!editState ? "Add Company" : "Apply Changes"}
          </button>
          <button
            className="text-white dark:text-[#ddd] text-sm py-2 cursor-pointer rounded-md font-semibold custom-gradient-2 px-3"
            type="submit"
            onClick={() => appFunctionalities.changeAppActionState("")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
