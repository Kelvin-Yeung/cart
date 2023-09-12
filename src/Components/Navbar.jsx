import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-16 flex justify-between border-2 border-slate-500 sticky top-0">
      <div className="flex gap-2 items-center">
        <img src="gamepad.svg" alt="CHANGE" className="w-full h-full"/>
        <span>Title</span>
      </div>
      SEARCH
      <div>
        <ul className="flex gap-8">
          <Link to="temp">
            <img src="cart.svg" alt="Something" className="h-8 w-8" />
          </Link>
          <div className="border border-transparent rounded-full bg-red-600 flex justify-center items-center w-2 h-2 absolute top-1 right-1"></div>
        </ul>
      </div>
    </nav>
  )
};