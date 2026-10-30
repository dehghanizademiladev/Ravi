import { useEffect } from "react";
import { FaComment } from "react-icons/fa6";
import { Link, useLocation} from "react-router";

function BookDetail({book}) {
    const discountedPrice =
    book.price - (book.price * book.discount) / 100;

    const location=useLocation()
    useEffect(()=>{
      const hash=location.hash

      if(hash){
        const element=document.querySelector("#book-comments")
        element.scrollIntoView({behavior:"smooth"})
      }
    }
      
      ,[location])
  return (
    <div className=" flex flex-col gap-10 rounded-3xl  p-6 md:flex-row border-2 border-secondary/20">

          {/* تصویر */}
          <div className="flex justify-center md:w-1/3">
            <img
              src={book.image}
              alt={book.title}
              className="h-80 w-60 rounded-2xl object-cover shadow-lg md:h-96 md:w-72"
            />
          </div>

          {/* اطلاعات */}
          <div className="flex flex-1 flex-col gap-6">

            {/* عنوان و نویسنده */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="font-morabba text-3xl font-bold">
                  {book.title}
                </h1>

                <p className="mt-2 text-gray-500">
                  {book.author}
                </p>
              </div>
              <Link to="#book-comments">
                <FaComment className="text-secondary size-9 border p-2 rounded-xl border-border cursor-pointer hover:scale-120 hover:-rotate-7 transition-all delay-75"/>
              </Link>
            </div>

            {/* قیمت */}
            <div className="flex flex-col gap-2">

              {book.discount !== 0 && (
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary px-3 py-1 text-sm text-white">
                    {book.discount.toLocaleString("fa-IR")}٪
                  </span>

                  <del className="text-gray-400">
                    {book.price.toLocaleString("fa-IR")} تومان
                  </del>
                </div>
              )}

              <span className="text-2xl font-bold text-primary">
                {discountedPrice.toLocaleString("fa-IR")} تومان
              </span>

            </div>

            {/* توضیحات */}
            <div>
              <p className="leading-8 text-gray-600">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد .
              </p>
            </div>

          </div>
        </div>
  )
}

export default BookDetail