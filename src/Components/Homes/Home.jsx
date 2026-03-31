import { Link } from "react-router-dom";

const AppCard = ({ app }) => {
  const { id, title, image, downloads, ratingAvg } = app;
  const resolvedImage = image || "/hero.png";
  return (
    <Link to={`/apps/${id}`}>
      <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition cursor-pointer">
       
        <img
          src={resolvedImage}
          alt={title}
          className="w-full h-32 object-contain mb-4"
        />
       
        <h3 className="font-semibold text-lg mb-2">
          {title}
        </h3>

        <div className="flex justify-between text-sm text-gray-600">
          <span>⬇ {downloads / 1000000}M</span>
          <span>⭐ {ratingAvg}</span>
        </div>

      </div>
    </Link>
  );
};

export default AppCard;