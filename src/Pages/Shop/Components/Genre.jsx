function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Genre({ genre, setResults, setGenre }) {
  async function getNewGenre(genre) {
    try {
      const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&genres=${genre}&page_size=10`, { mode: "cors" }
      );
      if (!response.ok) {
        throw new Error(`There is an HTTP error: ${response.status}`);
      }
      let data = await response.json();
      console.log("API CALLED AT getNewGenre()", data);
      return data;
    } catch (err) {
      console.err(`ERROR: ${err}`);
      {
        /* Change to alert after! */
      }
    }
  }
  const genreCapitalized = capitalizeFirstLetter(genre)
  return (
    <button
      onClick={() => {
        getNewGenre(genre).then((data) => {
          setResults(data.results);
          setGenre(genreCapitalized);
          console.log("This is the data", data.results);
        });
      }}
    >
      <div>{genreCapitalized}</div>
    </button>
  );
}
