import offer from "../../../assets/Offer/offer.png"
import offer2 from "../../../assets/Offer/offer2.png"
import Buttons from "../../../components/common/Buttons"


function Offer() {
  return (
    <div>
    <div className="relative w-full lg:w-86 ">
        <img src={offer} alt="" className="  hidden lg:flex w-full"/>
        <img src={offer2} alt="" className="   lg:hidden rounded-xl w-9/10 md:w-full mx-auto"/>
        <div className="flex flex-col gap-2 md:gap-5 lg:gap-4 absolute text-accent right-2/14 md:right-3/12 lg:right-10 top-4 md:top-10 lg:top-10">
            <h3 className="font-morabba font-semibold text-3xl md:text-5xl lg:text-3xl text-shadow-md">هر هفته یک کتاب </h3>
            <span className=" text-xl md:text-2xl text-shadow-md lg:text-lg">پیشنهاد ویژه ما</span>
            <Buttons className="bg-Surface text-primary w-36  md:w-50 md:py-3 lg:w-47" variant="primary">مشاهده پیشنهاد هفته</Buttons>
        </div>
    </div>
    </div>
  )
}

export default Offer