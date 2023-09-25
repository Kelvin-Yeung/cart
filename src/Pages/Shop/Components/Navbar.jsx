import { Link } from "react-router-dom";

export default function Navbar({ setIsCartOpen }) {
  return (
    <nav className="h-20 flex justify-between items-center sticky top-0 p-2 bg-[#0F1011]">
      <div className="flex gap-1 items-center ml-4">
        <img src="gamepad.svg" alt="CHANGE" className="w-[42px] h-[42px]"/>
        <span className="text-3xl font-serif">GGateway</span>
      </div>
      <div>
        <input placeholder="To be implemented..." className="py-1 pl-4 rounded-lg w-80" />
      </div>
      <button onClick={() => setIsCartOpen(true)} className="mr-5">
        <img src="cart.svg" alt="Something" className="h-8 w-8" />
      </button>
    </nav>
  )
};

// Can incorporate indicator that lights up for cart.length() >= 1
// <div className="border border-transparent rounded-full bg-red-600 flex justify-center items-center w-2 h-2 absolute top-1 right-1"></div>