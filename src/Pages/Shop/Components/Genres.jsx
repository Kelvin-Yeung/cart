import Genre from "./Genre.jsx";

export default function Sidebar({ setResults, setGenre }) {
  return (
    <aside className="flex min-h-screen flex-col border" style={{ width: '64rem'  }}>
      <div className="flex flex-col items-start">
        <h1>Top</h1>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <h1>Genres</h1>
        <Genre genre="action" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="adventure" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="puzzle" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="racing" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="shooter" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="sports" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="strategy" setResults={setResults} setGenre={setGenre}></Genre>
      </div>
    </aside>
  );
}
