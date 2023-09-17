import { useContext } from "react";
import { CartContext } from '../Shop.jsx'



export default function CartItem({ title, img, price }) {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className="flex flex-col m-4 border p-4">
      <img src={img} alt={title} />
      <p>{title}</p>
      <div className="flex justify-between">
        <p>${price}</p>
        <button onClick={() => removeFromCart(title)}>X</button>
      </div>
    </div>
  )
}