import React, { FC } from "react";
import { appFunctionalitiesInterface } from "../../../types";
import BodyHeader from "../../Body/BodyHeader/BodyHeader";
import BodyMain from "../../Body/BodyMain/BodyMain";

interface bodyLayoutInterface {
  appFunctionalities: appFunctionalitiesInterface;
}

const BodyLayout: FC<bodyLayoutInterface> = ({ appFunctionalities }) => {
  return (
    <main className="grid grid-cols-1 grid-rows-[auto_1fr]">
      <BodyHeader appFunctionalities={appFunctionalities} />
      <BodyMain appFunctionalities={appFunctionalities} />
    </main>
  );
};

export default BodyLayout;
