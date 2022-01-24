import React, { Fragment} from "react";

import { CoverPage } from "./layouts/CoverPage";
import { Description} from "./layouts/Description";

import './App.css';

export function App() {

  return (
    <Fragment>
      <CoverPage></CoverPage>
      <Description></Description>
    </Fragment>
  );
}
