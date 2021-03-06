import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

import Explorer from "./components/Explorer";
import Phone from "./pages/Phone";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Stickers from "./pages/Stickers";

const version = "1.4";
console.log("v" + version);

root.render(
  <BrowserRouter>
    <div id="place_taker"></div>
    <main>
      <Routes>
        <Route path="/" element={<Phone />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/funko-stickers" element={<Stickers />} />
      </Routes>
    </main>
  </BrowserRouter>
);
