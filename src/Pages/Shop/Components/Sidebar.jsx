async function getGenre(genre) {
  try {
    const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
    const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&genres=${genre}`);
    if (!response.ok) {
      throw new Error(`This is an HTTP error: The status is ${response.status}`);
    }
    let actualData = await response.json();
    console.log(actualData);
    console.log(actualData.count);
    return actualData;
  } catch(err) {
    console.log(`ERROR: ${err}`);
    {/* Consider doing alerts */}
  } 
}

export default function Sidebar({ setCall, genre }) {
  const sorted = genre.sort((a, b) => (a.name > b.name ? 1 : -1));
  const a = sorted.map((element) => {
    if (element.name !== "Massively Multiplayer") {
      return <button key={element.id} onClick={() => setCall(getGenre(element.slug))}>{element.name}</button>
    }
    return <button key={element.id} onClick={() => setCall(getGenre(element.slug))}>MMO</button>
  })
  return (
    <aside className="flex flex-col min-h-screen border">
      <div className="flex flex-col">
        <h1>Genres</h1>
        {a}
      </div>
    </aside>
  );
}

// Action, Indie, Adventure, RPG, Strategy, Shooter, Casual, Simulation, Puzzle, Arcade, Platformer
// Massively Multiplayer, Racing, Sports, Fighting, Family, Board Games, Educational, Card