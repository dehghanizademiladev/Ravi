import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Buttons from "../../../components/common/Buttons";
import { banners } from "../../../data/banners";


function HeroSlider() {
  return (
    <section className="h-70 md:h-115  ">
      <Swiper
      loop={true}
        direction="vertical"
        mousewheel
        pagination={{ clickable: true }}
        modules={[Pagination, Mousewheel,Autoplay]}
        autoplay={{delay:7500}}
        className="h-full rounded-tl-[60px] rounded-sm"
      >
        {
            banners.map((banner)=><SwiperSlide key={banner.id}>
        <div className="relative h-80 md:h-115">
            <img
                src={banner.image}
                alt=""
                className="absolute w-full h-full object-cover"
            />
            <div className="flex flex-col gap-2 absolute right-6  md:right-22 lg:right-70 translate-y-18  md:top-17 text-right w-full md:w-4/10  ">
                <h1 className="text-[24px] md:text-5xl font-bold font-morabba">{banner.title}</h1>
                <p></p>
                <div className="flex gap-4 md:gap-10 items-center">
                    <Buttons className="bg-primary text-Background" variant={banner.button1Type} path={banner.buttonPath}>{banner.button}</Buttons>
                    <Buttons variant={banner.button2Type}>{banner.button}</Buttons>
                </div>
            </div>
        </div>
        </SwiperSlide>
)
        }
      </Swiper>
    </section>
  );
}

export default HeroSlider;