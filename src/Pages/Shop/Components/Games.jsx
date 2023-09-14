import Game from "./Game";

export default function Games({ games, addToCart }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {games.map((item) => (
        <Game
          key={item.id}
          title={item.name}
          img={item.background_image}
          price={Math.log(item.id)}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}
