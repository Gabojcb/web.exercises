import React from "react";
import { Product } from "../product";

export /*bundle*/ const Balls = () => {
    return(
        <>
            <Product 
                product='Ball Basquet'
                brand='Wilson'
                price='65$'
                src='images/images-shop-real/balls/balon-de-basquet.png'
                categories='balls'
            />
            <Product 
                product='Ball soccer'
                brand='Nike'
                price='45$'
                src='images/images-shop-real/balls/balon-de-futbol.png'
                categories='balls'
            />
            <Product 
                product='Ball soccer'
                brand='Mikasa'
                price='50$'
                src='images/images-shop-real/balls/balon-futbol.png'
                categories='balls'
            />
            <Product 
                product='Ball voleibol'
                brand='Molten'
                price='30$'
                src='images/images-shop-real/balls/voleibol.png'
                categories='balls'
            />
        </>
    )
}    