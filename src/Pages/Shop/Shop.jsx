import { useState, useEffect, createContext } from "react";
import Navbar from "./Components/Navbar.jsx";
import Games from "./Components/Games.jsx";
import Sidebar from "./Components/Genres.jsx";
import Cart from "./Components/Cart.jsx";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {}
});

async function getTopGames() {
  try {
    const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}&page_size=3`, { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error(`There is an HTTP error: ${response.status}`);
    }
    let data = await response.json();
    console.log("API CALLED AT getTopGames()", data);
    return data;
  } catch (err) {
    console.error(`ERROR: ${err}`);
    {
      /* Change to alert after! */
    }
  }
}

export default function Shop() {
  
  
  // RAWG API states all list of games as results
  
  const [results, setResults] = useState([]); // Shows all the items on the screen
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);

  useEffect(() => {
    getTopGames().then((data) => {
      setResults(data.results);
    });
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (title) => {
    setCart(cart.filter(item => item.title !== title));
  };

  function findTotal() {
    let total = 0;
    cart.forEach((item) => total += parseFloat(item.price));
    return total.toFixed(2);
  }
  return (
    <>
      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        <Navbar setIsCartOpen={setIsCartOpen} />
        <div className="flex">
          <Sidebar setResults={setResults} />
          <Games games={results}/>
        </div>
        
        
        {isCartOpen && <Cart setIsCartOpen={setIsCartOpen} cart={cart} total={findTotal()} setCart={setCart} />}
        {isCartOpen && (
          <div className="fixed left-0 top-0 z-10 h-screen w-screen bg-black opacity-50"></div>
        )}
      </CartContext.Provider>
    </>
  );
}
