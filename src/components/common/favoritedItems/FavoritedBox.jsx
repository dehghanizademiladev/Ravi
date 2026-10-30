import { useContext } from "react";
import FavoritesContext from "../../../context/FavoritesContext/Favorites";
import { setPrice } from "../../../assets/consistents/setPrice";
import CloseButton from "../../layout/navbar/CloseButton";

function FavoritedBox({handler}) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <div className="absolute top-15 -right-55 z-10 w-80 rounded-xl bg-Surface/90 p-4 shadow-lg backdrop-blur-md" onMouseLeave={handler}>
        <CloseButton handler={handler} className="mb-3 text-red-500  text-left "/>
      {favorites.length === 0 ? (
        <p className="py-4 text-center text-gray-500">
          هنوز کتابی به علاقه‌مندی‌ها اضافه نکرده‌اید.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {favorites.map((book, index) => (
            <div
              key={book.id}
              className="flex items-center justify-between gap-3 border-b border-gray-200 pb-3 last:border-0"
            >
              {/* شماره */}
              <span className="text-sm text-gray-500">
                {(index + 1).toLocaleString("fa-IR")}
              </span>

              {/* نام کتاب */}
              <span className="flex-1 line-clamp-1 font-medium">
                {book.title}
              </span>

              {/* قیمت */}
              <span className="whitespace-nowrap text-sm text-primary">
                {setPrice(book.price, book.discount).toLocaleString("fa-IR")}
                <span className="mr-1 text-xs text-gray-500">
                  تومان
                </span>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritedBox;