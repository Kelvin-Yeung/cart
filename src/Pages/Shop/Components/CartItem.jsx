import { useContext } from "react";
import { CartContext } from '../Shop.jsx'

export default function CartItem({ title, img, price }) {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className="flex flex-col mx-6 my-2 rounded-3xl p-4 bg-[#2a2a2a]">
      <img src={img} alt={title} className="rounded-lg mb-2"/>
      <p>{title}</p>
      <div className="flex justify-between items-center flex-wrap text-[#a0a0a0] text-sm mt-1">
        <p>${price}</p>
        <button onClick={() => removeFromCart(title)} className="bg-black rounded-full w-8">X</button>
      </div>
    </div>
  )
}