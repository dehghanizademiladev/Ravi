import HeroSlider from "./HeroSlider";
import Categories from "./Categories";
import Offer from "./Offer";
import OffersBar from "./OffersBar";
import BestSellerBar from "./BestSellerBar";
import Newest from "./Newest";

function Hero() {
  return (
    <div className="mt-10">

      <HeroSlider />

      <Categories />

      <div className="mt-15 flex w-full flex-col gap-10 md:gap-13 lg:flex-row lg:gap-3">

        <div className="shrink-0">
          <Offer />
        </div>

        <div className="min-w-0 flex-1">
          <BestSellerBar />
        </div>

      </div>

      <div className="mt-15 w-full flex flex-col gap-15">
        <OffersBar />
        <Newest/>
      </div>

    </div>
  );
}

export default Hero;