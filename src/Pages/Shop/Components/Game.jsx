import { useState, useContext } from "react";
import { CartContext } from "../Shop.jsx";

export default function Game({ title, img, price }) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  let isInCart = cart.some((item) => title === item.title);
  const obj = {
    title: title,
    img: img,
    price: price,
  };
  console.log(cart);
  return (
    <div className="rounded-3xl bg-[#202020]">
      
      <img src={img} alt="" className="rounded-t-3xl object-cover" style={{ aspectRatio: '1.7777 / 1' }}></img>
      
      <div className="flex flex-col gap-1 p-4">
        {!isInCart ? (
          <button
            onClick={() => {
              addToCart(obj);
            }}
            className="w-full rounded-full border mb-2"
          >
            <span className="text-sm">Add to Cart</span>
          </button>
        ) : (
          <button
            onClick={() => {
              removeFromCart(title);
            }}
            className="w-full rounded-full border mb-2 text-green-500"
          >
            <span className="text-sm">Added</span>
          </button>
        )}
        <span className="font-semibold text-lg">{title}</span>
        <div className="flex justify-between text-[#a0a0a0] text-sm">${price}</div>
          </div>
    </div>
  );
}
