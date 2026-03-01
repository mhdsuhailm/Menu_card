const Header = ({ mealType }) => {
  return (
    <div className="bg-white shadow-md p-4 text-center sticky top-0">
      <h1 className="text-2xl font-bold">Khaliq's Kadai</h1>
      <p className="text-gray-500 capitalize">{mealType}</p>
    </div>
  );
};

export default Header;