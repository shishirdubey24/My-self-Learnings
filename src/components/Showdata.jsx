
const Showdata = ({item}) => {
  
    const { title, category, image, price, description, rating } = item;
    const { rate, count } = rating;

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition duration-300 border p-4 flex flex-col">
      <img
        src={image}
        alt={title}
        className="h-48 object-contain mb-4"
      />

      <h2 className="text-md font-medium text-gray-800 mb-1 line-clamp-1">{title}</h2>

      <p className="text-sm text-gray-500 mb-1 capitalize">{category}</p>

      <p className="text-lg font-semibold text-green-600 mb-1">${price}</p>

      <p className="text-xs text-gray-600 mb-2 line-clamp-2">
        {description}
      </p>

      <div className="flex items-center gap-2 mt-auto">
        <span className="text-yellow-500">⭐ {rate}</span>
        <span className="text-xs text-gray-400">({count})</span>
      </div>
    </div>
  );
}

export default Showdata;
