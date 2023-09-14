import Genre from "./Genre.jsx";

export default function Sidebar({ setResults }) {
  return (
    <aside className="flex min-h-screen flex-col border">
      <div className="flex flex-col">
        <h1>Top</h1>
        .....
        <h1>Genres</h1>
        <Genre genre="action" setResults={setResults}></Genre>
        <Genre genre="adventure" setResults={setResults}></Genre>
        <Genre genre="puzzle" setResults={setResults}></Genre>
        <Genre genre="racing" setResults={setResults}></Genre>
        <Genre genre="shooter" setResults={setResults}></Genre>
        <Genre genre="sports" setResults={setResults}></Genre>
        <Genre genre="strategy" setResults={setResults}></Genre>
      </div>
    </aside>
  );
}
