//TODO: create a component that displays a single bakery item
import { useState } from "react";


export default function BakeryItem({name, price, desc, img, cartItems, setCartItems, cartPrices, setCartPrices}) {
    function handleClick() {  
        setCartItems([...cartItems, name])
        setCartPrices(cartPrices + price)
    }

    return (
        <div>
            <img src={img}/>
            <h1>{name} {price} </h1>
            <p>{desc}</p>
            <button onClick={handleClick}> Add to Cart</button>
        </div>
    )    
}