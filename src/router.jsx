import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Opening from "./pages/Opening";
import OpeningCategory from "./pages/OpeningCategory";
import Middlegame from "./pages/Middlegame";
import MiddlegameCategory from "./pages/MiddlegameCategory";
import Endgame from "./pages/Endgame";
import EndgameCategory from "./pages/EndgameCategory";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "opening", element: <Opening /> },
      { path: "opening/:category", element: <OpeningCategory /> },
      { path: "middlegame", element: <Middlegame /> },
      { path: "middlegame/:category", element: <MiddlegameCategory /> },
      { path: "endgame", element: <Endgame /> },
      { path: "endgame/:category", element: <EndgameCategory /> },
    ],
  },
]);
