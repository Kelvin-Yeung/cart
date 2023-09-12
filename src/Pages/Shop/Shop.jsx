import { useState, useEffect } from "react";
import Navbar from "/src/Components/Navbar.jsx";
import ItemList from "./Components/ItemList.jsx"
import Sidebar from "./Components/Sidebar.jsx";

async function getData() {
  try {
    const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
    // const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`);
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
  useEffect(() => {
    getData()
    .then(data => {
    setTemp(data.results);
  })
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <ItemList itemList={temp}></ItemList>
      </div>
    </>
  )
}