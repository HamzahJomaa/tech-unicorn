import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/homescreen";

import Shop from "./screens/shop";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}
