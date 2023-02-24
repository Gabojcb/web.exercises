import React from "react";
import { useState } from "react";
import { Balls } from './categories/balls';
import { Clothes } from './categories/clothes';
import { Consoles } from './categories/consoles';
import { Drinks } from './categories/drinks';
import { Foods } from './categories/foods';
import { Home } from './categories/home';
import { Telephones } from './categories/telephones';
import { Tools } from './categories/tools';

export /*bundle*/ const Navigation = () => {
  const [componentProduct, setComponentProduct] = useState(null);

  const handleClick = (component) => {
    setComponentProduct(component);
  }

  return (
    <>
      <nav>
        <div className="container__logo">
          <p className="logo-shop color">Shop Real </p>
          <img src="images/images-shop-real/cart.png" className="logo-cart" alt="images cart" />
          <input type="text" className="input-searc" placeholder="search"/>
        </div>
        <ul className="cont-ul">
          <li>Menu</li>
          <li className="nav__products">
            Products
            <ul className="ul-second color">
              <li className="categories">
                Categories
                <ul className="ul-third">
                  <li onClick={() => handleClick('Foods')} className='li-product'>Foods</li>
                  <li onClick={() => handleClick('Drinks')} className='li-product'>Drinks</li>
                  <li onClick={() => handleClick('Clothes')} className='li-product'>Clothes</li>
                  <li onClick={() => handleClick('Balls')} className='li-product'>Balls</li>
                  <li onClick={() => handleClick('Telephones')} className='li-product'>Telephones</li>
                  <li onClick={() => handleClick('Consoles')} className='li-product'>Consoles</li>
                  <li onClick={() => handleClick('Home')} className='li-product'>Home</li>
                  <li onClick={() => handleClick('Tools')} className='li-product'>Tools</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="color"><a href="#footer-id" className="anchorage">Contact</a></li>
        </ul>
      </nav>
      <div className="flex-product">
      {componentProduct === "Foods" && <Foods />}
      {componentProduct === "Drinks" && <Drinks />}
      {componentProduct === "Clothes" && <Clothes />}
      {componentProduct === "Balls" && <Balls />}
      {componentProduct === "Drinks" && <Drinks />}
      {componentProduct === "Telephones" && <Telephones />}
      {componentProduct === "Consoles" && <Consoles />}
      {componentProduct === "Tools" && <Tools />}
      {componentProduct === "Home" && <Home />}
      </div>
    </>
  );
};
