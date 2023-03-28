import * as React from "react";
import { AppExam } from "./app-exam";

export /*bundle*/
function Page(): JSX.Element {
  return (
    <div className="page__container">
      <h1>
        My first page using BeyondJS with <span className="beyond">React</span>!
      </h1>
      <AppExam />
    </div>
  );
}
