import { useState } from "react";

export default function Game({ title, img, price, addToCart }) {
  const [added, setAdded] = useState(false);
  return (
    <div className="max-w-sm rounded-3xl bg-[#202020]">
      <img src={img} className="rounded-t-3xl"></img>
      <div className="flex flex-col gap-2 p-4">
        {!added ? (
          <button
            onClick={() => {
              setAdded(true);
              addToCart(price);
            }}
            className="w-full rounded-full border"
          >
            Add to Cart
          </button>
        ) : (
          <button
            onClick={() => setAdded(false)}
            className="w-full rounded-full border text-green-500"
          >
            Added
          </button>
        )}
        <div className="flex justify-between">${price.toFixed(2)}</div>
        {title}
      </div>
    </div>
  );
}
