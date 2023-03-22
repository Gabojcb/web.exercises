import * as React from "react";
import { products } from "products-list/models";
import { ProductList } from "./products-list";

export /*bundle*/
function View({ uri }) {
  const [category, setCategory] = React.useState();

  const categoryId = uri.qs.get("categoryId") ?? "all";

  const title =
    categoryId === "all"
      ? "Listado de productos"
      : `Productos de la categoria ${categoryId}`;

  const splitString = (verseChain) => {
    const titleLowerCase = verseChain.toLowerCase();
    let textArray = titleLowerCase.split(" ");
    let textConcat = textArray.map((character) => character.concat("-"));
    return textConcat;
  };
  const convertedTitle = splitString(title);

  return (
    <>
      <h2>{convertedTitle}</h2>
      <ProductList products={products} />
    </>
  );
}
