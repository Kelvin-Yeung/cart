import { useState, useEffect } from "react";
import Navbar from "/src/Components/Navbar.jsx";
import ItemList from "./Components/ItemList.jsx"
import Sidebar from "./Components/Sidebar.jsx";

async function getData() {
  try {
    const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
    const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`);
    if (!response.ok) {
      throw new Error(`This is an HTTP error: The status is ${response.status}`);
    }
    let actualData = await response.json();
    console.log(actualData);
    console.log(actualData.count);
    return actualData;
  } catch(err) {
    console.log(`ERROR: ${err}`);
  } 
}

async function getDataPuzzle() {
  try {
    const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
    const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&genres=puzzle`);
    if (!response.ok) {
      throw new Error(`This is an HTTP error: The status is ${response.status}`);
    }
    let actualData = await response.json();
    console.log(actualData);
    console.log(actualData.count);
    return actualData;
  } catch(err) {
    console.log(`ERROR: ${err}`);
  } 
}

async function getAllGenres() {
  try {
    const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
    const response = await fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`This is an HTTP error: The status is ${response.status}`);
    }
    let actualData = await response.json();
    console.log(actualData);
    console.log(actualData.count);
    return actualData;
  } catch(err) {
    console.log(`ERROR: ${err}`);
  } 
}

export default function Shop() {
  const [temp, setTemp] = useState([]);
  const [call, setCall] = useState(getData());
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    call
    .then(data => {
    setTemp(data.results);
  })
  }, [call]);
  
  useEffect(() => {
    getAllGenres()
    .then(data => {
    setGenre(data.results);
  })
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar setCall={setCall} genre={genre}></Sidebar>
        <ItemList itemList={temp}></ItemList>
      </div>
    </>
  )
}