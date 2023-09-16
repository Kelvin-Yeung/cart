import { useState } from "react";

export default function Game({ title, img, price, addToCart, removeFromCart }) {
  const [added, setAdded] = useState(false);
  const obj = {
    title: title,
    img: img,
    price: price
  }

  return (
    <div className="max-w-sm rounded-3xl bg-[#202020]">
      <img src={img} className="rounded-t-3xl"></img>
      <div className="flex flex-col gap-2 p-4">
        {!added ? (
          <button
            onClick={() => {
              setAdded(true);
              addToCart(obj);
            }}
            className="w-full rounded-full border"
          >
            Add to Cart
          </button>
        ) : (
          <button
            onClick={() => {
              setAdded(false)
              removeFromCart(title)
            }}
            className="w-full rounded-full border text-green-500"
          >
            Added
          </button>
        )}
        <div className="flex justify-between">${price}</div>
        {title}
      </div>
    </div>
  );
}
