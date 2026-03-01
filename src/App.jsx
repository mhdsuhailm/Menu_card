import { Routes, Route, Navigate } from "react-router-dom";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/menu/breakfast" />} />
      <Route path="/menu/:type" element={<MenuPage />} />
    </Routes>
  );
}

export default App;