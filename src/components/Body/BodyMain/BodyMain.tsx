import { FC } from "react";
import { appFunctionalitiesInterface } from "../../../types";
import Table from "../../Table/Table";

interface bodyMainInterface {
  appFunctionalities: appFunctionalitiesInterface;
}

const BodyMain: FC<bodyMainInterface> = ({ appFunctionalities }) => {
  return (
    <section className="grid gap-4 py-5 text-lg">
      <Table appFunctionalities={appFunctionalities} />
    </section>
  );
};

export default BodyMain;
