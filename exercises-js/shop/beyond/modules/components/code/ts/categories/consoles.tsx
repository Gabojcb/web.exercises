import React from "react";
import { Product } from "../product";

export /*bundle*/ const Consoles = () => {
    return(
        <>
            <Product 
                product='Ps5'
                brand='Sony'
                price='900$'
                src='images/images-shop-real/consolas/ps5.png'
                categories='consoles'
            />
            <Product 
                product='Psp'
                brand='Sony'
                price='100$'
                src='images/images-shop-real/consolas/psp.png'
                categories='consoles'
            />
            <Product 
                product='switch'
                brand='Nintendo'
                price='500$'
                src='images/images-shop-real/consolas/switch.png'
                categories='consoles'
            />
            <Product 
                product='Xbox 360'
                brand='Microsoft'
                price='120$'
                src='images/images-shop-real/consolas/xbox-360.png'
                categories='consoles'
            />
            <Product
                product='Xbox one'
                brand='Microsoft'
                price='600$'
                src='images/images-shop-real/consolas/xbox-one.png'
                categories='consoles'
            />
        </>
    )
}