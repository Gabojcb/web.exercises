import * as React from "react";
import { categories } from "../categories";
import { Item } from "./item";

export /*bundle */ function Menu() {
  const output = categories.items.map((item) => (
    <Item key={item.name} item={item} />
  ));
  return <ul className="app-menu__container">{output}</ul>;
}
