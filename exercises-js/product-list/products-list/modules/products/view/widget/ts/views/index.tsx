import * as React from "react";
import { products } from "products-list/models";

export /*bundle*/
function View({ uri }) {
  const id = uri.vars.get("name");

  const product = products[id] || {};

  return (
    <>
      <h2>Detalles del Productos: {product.name}</h2>
      <p>{`the product is ${product.name} of brand ${product.brand} and its description is ${product.description}`}</p>
    </>
  );
}
