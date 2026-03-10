import { Routes, Route, Navigate } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import { useEffect } from "react"
function App() {
  useEffect(() => {
    window.scrollTo(0, 1)
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/menu/breakfast" />} />
      <Route path="/menu/:type" element={<MenuPage />} />
    </Routes>
  );
}

export default App;