import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddClothes from "./pages/AddClothes";
import Gallery from "./pages/Gallery";
import DeleteClothes from "./pages/DeleteClothes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="upload" element={<AddClothes />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="delete" element={<DeleteClothes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
