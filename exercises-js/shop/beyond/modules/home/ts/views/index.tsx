import * as React from "react";
import { Product } from "./product";
import { products } from "./products";

export /*bundle*/
function Page(): JSX.Element {
  const newProducts = products.map(product => <Product product={product.name} brand={product.brand} price={product.price} src={product.src} categories={product.categories} /> );

  console.log(newProducts);

  return (
    <div className="container-menu-products">{newProducts}</div>
  );
}
