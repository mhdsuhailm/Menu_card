import DishCard from "./DishCard";

const Menu = ({ data, onSelect }) => {
  return (
    <div className="p-4">
      {data.map((category) => (
        <div key={category.category} className="mb-6">
          <h2 className="text-xl font-bold mb-3">
            {category.category}
          </h2>

          {category.items.map((item) => (
            <DishCard
              key={item.id}
              item={item}
              onSelect={onSelect}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;