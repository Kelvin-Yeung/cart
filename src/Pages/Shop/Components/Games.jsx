import Game from "./Game";

export default function Games({ games }) {
  return (
    <div
      className="grid grid-cols-3 gap-6"
      style={{ height: "fit-content" }}
    >
      {games.map((item) => (
        <Game
          key={item.id}
          title={item.name}
          img={item.background_image}
          price={Math.log(item.id).toFixed(2)}
        />
      ))}
    </div>
  );
}
