export default function Heading({ img, title, dates, setResults, setGenre }) {
  async function getTopGames() {
    try {
      const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}${dates}&page_size=39`, { mode: "cors" }
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
  return (
    <button
      onClick={() => {
        getTopGames().then((data) => {
          setResults(data.results);
          setGenre(`Best of ${title}`);
          console.log("This is the data", data.results);
        });
      }}
    >
      <div className="flex gap-3 items-center my-1">
        <object data={img} width="38" height="38" className="bg-[#202020] rounded-lg p-2"></object>
      <div className="text-sm">{title}</div>
      </div>
    </button>
  );
}
