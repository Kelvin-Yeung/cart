import { useState } from "react";

export default function Item({ item }) {
  const [added, setAdded] = useState(false);
  let price = Math.log(item.id);
  return (
    <div className="max-w-sm rounded-3xl bg-[#202020]">
      <img src={item.background_image} className="rounded-t-3xl"></img>
      <div className="flex flex-col gap-2 p-4">
        {!added ? (
          <button
            onClick={() => setAdded(true)}
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
        <div className="flex justify-between">
          {/* Add OS Logos Here! */}${price.toFixed(2)}
        </div>
        {item.name}
      </div>
    </div>
  );
}