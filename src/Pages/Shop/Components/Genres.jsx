import Genre from "./Genre.jsx";
import Heading from "./Heading.jsx";

export default function Sidebar({ setResults, setGenre }) {
  return (
    <aside className="flex flex-col sticky top-[88px] h-full" style={{ minWidth: '12rem'  }}>
      <div className="flex flex-col items-start m-8 mt-0">
        <h1 className="font-bold text-2xl mb-1">Top</h1>
        <Heading title="All Time" dates="&dates=1900-01-01,2100-12-31" img="/genres/topalltime.svg" setResults={setResults} setGenre={setGenre}></Heading>
        <Heading title="Year 2023" dates="&dates=2023-01-01,2023-12-31" img="/genres/topyearly.svg" setResults={setResults} setGenre={setGenre}></Heading>
        <Heading title="30 Days" dates="&dates=2023-08-31,2023-09-30" img="/genres/topmonthly.svg" setResults={setResults} setGenre={setGenre}></Heading>
        <h1 className="font-bold text-2xl mt-6 mb-1">Genres</h1>
        <Genre genre="action" img="/genres/action.svg" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="adventure" img="/genres/adventure.svg" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="puzzle" img="/genres/puzzle.svg" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="racing" img="/genres/racing.svg" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="shooter" img="/genres/shooter.svg" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="sports" img="/genres/sports.svg" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="strategy" img="/genres/strategy.svg" setResults={setResults} setGenre={setGenre}></Genre>
      </div>
    </aside>
  );
}
