import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState([])
  const [cartPrices, setCartPrices] = useState(0)

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem name={item.name} price={item.price} desc={item.description} 
        img={item.image} cartItems={cartItems} setCartItems={setCartItems} cartPrices={cartPrices} setCartPrices={setCartPrices}/>
      ))}

      <div>
        <h2>Cart</h2>
        <div>
          {cartItems.map(item => <div>{item}</div>)} 
        </div>
        <div>Total: {cartPrices}</div>

      </div>
    </div>
  );
}

export default App;
