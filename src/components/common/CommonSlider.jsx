import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { AiOutlinePercentage } from "react-icons/ai";
import { NavLink } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FavoriteBtn from "./favoritedItems/FavoriteBtn";
import { setPrice } from "../../assets/consistents/setPrice";

function CommonSlider({books,small}) {

  return (
    <div>
        <Swiper
      className="w-full overflow-hidden"
      spaceBetween={10}
      modules={[Pagination]}
      breakpoints={{
        0: {
          slidesPerView : 1.2,
          spaceBetween:4
        },
        330: {
          slidesPerView: 2,
          spaceBetween:7
        },
        460:{
          slidesPerView: 2.3,
        },
        640: {
          slidesPerView: 3.2,
        },
        768: {
          slidesPerView: 3.2,
        },
        1024: {
          slidesPerView : small?3.2:4.3,
        },
        1480: {
          slidesPerView: small? 5.2:6.3,
        },
      }}
    >
      {books.map((book) => (
        <SwiperSlide key={book.id}>
          
          <div className="w-full relative rounded-xl bg-white/90 shadow-sm py-3 px-3">
            {book.discount !=0 &&<div className="absolute -top-1 left-0 cursor-pointer bg-red-500 flex flex-col items-center rounded-b-2xl rounded-t-xl translate-z-4.5 py-1">
              <AiOutlinePercentage size={31} color="white" className=""/><span className="text-white font-morabba font-bold text-lg">{book.discount.toLocaleString("fa-IR")}</span>
            </div>}
            <FavoriteBtn book={book}/>
            <NavLink to={`/book/${book.slug}`}>
            <img
              src={book.image}
              alt={book.title}
              className="w-40 md:w-full px-2 h-50 md:h-70 rounded-xl object-cover shadow-2xl mx-auto"
            />
            </NavLink>
            <NavLink to={`/book/${book.slug}`}>
            <h3 className="mt-3 font-semibold line-clamp-1">
              {book.title}
            </h3>
            </NavLink>
            <p className="text-sm text-gray-500 line-clamp-1">
              {book.author}
            </p>

            <div className="mt-3 flex  items-center justify-between">
              <div className="flex flex-col">
                {book.discount !=0 &&<del className="text-sm text-gray-500">{book.price.toLocaleString("fa-IR")}</del>}
                <span className="font-semibold text-primary ">
                  {setPrice(book.price,book.discount)} تومان
                </span>
              </div>

              <button className="rounded-lg bg-primary p-2 text-white transition hover:bg-primary/90">
                <HiOutlineShoppingCart size={20} />
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default CommonSlider