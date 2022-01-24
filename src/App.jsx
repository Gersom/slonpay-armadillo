import React, { Fragment} from "react";

import { CoverPage } from "./layouts/CoverPage";
import { Description} from "./layouts/Description";
import { Accessories} from "./layouts/Accessories";

import './App.css';

export function App() {

  return (
    <Fragment>
      <CoverPage></CoverPage>
      <Description></Description>
      <Accessories></Accessories>
    </Fragment>
  );
}
