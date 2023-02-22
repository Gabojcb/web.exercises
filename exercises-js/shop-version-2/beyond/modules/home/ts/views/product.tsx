import React from "react";

export /*bundle*/ const Product = ({ product, brand, price, src, categories }) => {
    return (
      <div className="container">
        <div className="product">
          <div className="container__image">
            <img className="product__image" src={src} alt={product}/>
          </div>
          <div className="container__info">
            <p className="data">Product: <span className="key-product">{product}</span></p>
            <p className="data">Brand: <span className="key-product">{brand}</span></p>
            <p className="data">Categorie: <span className="key-product">{categories}</span></p>
            <p className="data">Price: <span className="key-product">{price}</span></p>
          </div>
          <div className="container__button">
            <button className="btn-buy">Buy</button>
          </div>
        </div>
      </div>
    );
  }