import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Shop from './Pages/Shop/Shop.jsx'
import About from './Pages/About/About.jsx'

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

const router = createBrowserRouter(routes);

export default function Router() {
  return <RouterProvider router={router} />;
};