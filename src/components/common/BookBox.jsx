import { AiOutlinePercentage } from "react-icons/ai"
import { HiOutlineShoppingCart } from "react-icons/hi"
import FavoriteBtn from "./favoritedItems/FavoriteBtn"
import { NavLink } from "react-router"
import { setPrice } from "../../assets/consistents/setPrice"

function BookBox({book,discount,image,title,author,price,slug}) {
  return (
    <div className="w-full relative rounded-xl bg-white/90 shadow-sm py-3 px-3">
            {discount !=0 &&<div className="absolute -top-1 left-0 cursor-pointer bg-red-500 flex flex-col items-center rounded-b-2xl rounded-t-xl translate-z-4.5 py-1">
              <AiOutlinePercentage size={31} color="white" className=""/><span className="text-white font-morabba font-bold text-lg">{discount.toLocaleString("fa-IR")}</span>
            </div>}
            <FavoriteBtn book={book}/>
            <NavLink to={`/book/${slug}`}>
            <img
              src={image}
              alt={title}
              className="w-40 md:w-full px-2 h-50 md:h-70 rounded-xl object-cover shadow-2xl mx-auto"
            />
            </NavLink>
            <NavLink to={`/book/${slug}`}>
            <h3 className="mt-3 font-semibold line-clamp-1">
              {title}
            </h3>
            </NavLink>
            <p className="text-sm text-gray-500 line-clamp-1">
              {author}
            </p>

            <div className="mt-3 flex  items-center justify-between">
              <div className="flex flex-col">
                {discount !=0 &&<del className="text-sm text-gray-500">{price.toLocaleString("fa-IR")}</del>}
                <span className="font-semibold text-primary ">
                  {setPrice(price,discount)} تومان
                </span>
              </div>

              <button className="rounded-lg bg-primary p-2 text-white transition hover:bg-primary/90">
                <HiOutlineShoppingCart size={20} />
              </button>
            </div>
          </div>
  )
}

export default BookBox