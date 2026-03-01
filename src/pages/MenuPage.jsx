import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import DishModal from "../components/DishModal";
import { menuData } from "../data/menuData";

const MenuPage = () => {
  const { type } = useParams();
  const [selectedDish, setSelectedDish] = useState(null);

  const currentMenu = menuData[type] || [];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header mealType={type} />

      <Menu
        data={currentMenu}
        onSelect={setSelectedDish}
      />

      <DishModal
        selected={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </div>
  );
};

export default MenuPage;