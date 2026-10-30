import FavoritesContext from "../../../context/FavoritesContext/Favorites";
import { useContext } from "react";
import { FaHeart } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
function FavoriteBtn({ book }) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const isExist = favorites.some((fav) => fav.id === book.id);
  return (
    <button
      onClick={() => toggleFavorite(book)}
      className="absolute -top-1 -right-1 h-8,5 w-8.5 cursor-pointer"
    >
      {/* قلب خالی */}
      <IoMdHeartEmpty
        size={34}
        className={`absolute left-0 top-0 transition-all duration-300 ${
          isExist
            ? "scale-0 opacity-0"
            : "scale-100 opacity-100 text-gray-500/60 hover:text-red-500"
        }`}
      />

      {/* قلب پر */}
      <FaHeart
        size={30}
        className={`absolute left-0.5 top-0.5 transition-all duration-300 ${
          isExist
            ? "scale-100 opacity-100 text-red-500"
            : "scale-0 opacity-0"
        }`}
      />
    </button>
  );
}

export default FavoriteBtn;