import { useState, useContext } from "react";
import { CartContext } from '../Shop.jsx'

export default function Game({ title, img, price }) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  let added = cart.some((item) => title === item.title);
  const obj = {
    title: title,
    img: img,
    price: price
  }
  console.log(cart);
  return (
    <div className="max-w-sm rounded-3xl bg-[#202020]">
      <img src={img} className="rounded-t-3xl"></img>
      <div className="flex flex-col gap-2 p-4">
        {!added ? (
          <button
            onClick={() => {
              
              addToCart(obj);
              
              
            }}
            className="w-full rounded-full border"
          >
            Add to Cart
          </button>
        ) : (
          <button
            onClick={() => {
              
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
