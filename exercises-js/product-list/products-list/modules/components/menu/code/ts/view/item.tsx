import * as React from "react";
import { routing } from "@beyond-js/kernel/routing";

export function Item({ item }) {
  const onClick = (event) => {
    event.preventDefault();
  };
  return (
    <li onClick={onClick}>
      <a href={item.id}>{item.name}</a>
    </li>
  );
}
