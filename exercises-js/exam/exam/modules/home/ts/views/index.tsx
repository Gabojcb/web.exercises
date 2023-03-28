import * as React from "react";
import { AppExam } from "./app-exam";

export /*bundle*/
function Page(): JSX.Element {
  return (
    <div className="page__container">
      <h1 className="page__h1">click and change its value</h1>
      <AppExam />
      <img
        src="images/empujar.png"
        alt="imagen de boto"
        className="page__img"
      />
    </div>
  );
}
