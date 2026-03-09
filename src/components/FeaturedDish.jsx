const FeaturedDishes = ({ menuData = [] }) => {

  const featured = menuData.filter(item => item.bestseller);

  if (featured.length === 0) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 mt-6 space-y-5">

      {featured.map((item) => (
        <div
          key={item._id}
          className="flex items-center justify-between rounded-2xl p-5 bg-gradient-to-r from-[#0A5855] to-[#0E1F1E]"
        >

          {/* LEFT SIDE */}
          <div className="flex-1 pr-4">

            <h2 className="text-xl font-semibold text-[#E7D3A3] leading-tight">
              {item.name}
            </h2>

            <p className="text-sm text-[#CFC6A4] mt-2 leading-relaxed max-w-xs">
              {item.description}
            </p>

            {/* MOST LOVED */}
            <div className="flex items-center gap-2 mt-3">
              <img
                src="/heart.png"
                alt="heart"
                className="w-4 h-4"
              />

              <span className="text-sm text-[#D4AF37]">
                Most Loved
              </span>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          {/* RIGHT IMAGE */}
<div className="flex-shrink-0 w-36 h-32 overflow-hidden rounded-lg">
  <img
    src={item.image}
    alt={item.name}
    className="w-full h-full object-cover"
  />
</div>

        </div>
      ))}

    </div>
  );
};

export default FeaturedDishes;