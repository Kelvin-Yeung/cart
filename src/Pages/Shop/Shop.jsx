import { useState, useEffect } from "react";
import Navbar from "/src/Components/Navbar.jsx";
import Games from "./Components/Games.jsx";
import Sidebar from "./Components/Genres.jsx";
import Cart from "./Components/Cart.jsx";

async function getTopGames() {
  try {
    const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
    const response = await fetch(
      //`https://api.rawg.io/api/games?key=${API_KEY}&page_size=3`,
    );
    if (!response.ok) {
      throw new Error(`There is an HTTP error: ${response.status}`);
    }
    let data = await response.json();
    console.log(data);
    console.log("API CALLED AT getTopGames()");
    return data;
  } catch (err) {
    console.error(`ERROR: ${err}`);
    {
      /* Change to alert after! */
    }
  }
}

// async function getAllGenres() {
//   try {
//     const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
//     const response = await fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`);
//     if (!response.ok) {
//       throw new Error(`There is an HTTP error: ${response.status}`);
//     }
//     let data = await response.json();
//     console.log(data);
//     console.log("API CALLED AT getAllGenres()");
//     return data;
//   } catch(err) {
//     console.err(`ERROR: ${err}`); {/* Change to alert after! */}
//   }
// }

export default function Shop() {
  // RAWG API states all list of games as results
  const [genre, setGenre] = useState([]); // genre is an object that represents a genre
  const [results, setResults] = useState([]); // Shows all the items on the screen
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    getTopGames().then((data) => {
      setResults(data.results);
    });
  }, []);

  // useEffect(() => {
  //   getAllGenres()
  //     .then(data => {
  //       setGenre(data.results);
  //     })
  // }, []);

  function addToCart(item) {
    setCart([...cart, item]);
  }

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar setResults={setResults} />
        <Games games={results} addToCart={addToCart} />
      </div>
      <button onClick={() => setIsCartOpen(true)}>Open Cart</button>
      {isCartOpen && <Cart setIsCartOpen={setIsCartOpen} cart={cart} />}
      {isCartOpen && (
        <div className="fixed left-0 top-0 z-10 h-screen w-screen bg-black opacity-50"></div>
      )}
    </>
  );
}
