import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-3xl">Hello from the home page of the shop!</h1>
        <p>Here are some links to other pages</p>
        <nav>
          <ul>
            <li>
              <Link to="/shop">Home Page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default App;
