import { HiOutlineShoppingCart } from "react-icons/hi2";
import { GiStaryu } from "react-icons/gi";
import AllButton from "./AllButton";
import { ImGift } from "react-icons/im";
import CommonSlider from "./CommonSlider";


function BooksSlider({title,path,books,small=false}) {
  return (
    <div>
        <div className="w-full flex flex-col gap-4">
        <div className="flex justify-between ">
            <div className="flex items-center gap-2">
                <GiStaryu size={34} className="text-primary"/>
                <h3 className="font-morabba font-semibold text-xl md:text-2xl"> {title}</h3>
            </div>
            <AllButton path={path}/>
        </div>
        <div className=" overflow-hidden  min-w-0 mx-5">
            <CommonSlider books={books} small={small}/>
        </div>
    </div>
    </div>
  )
}

export default BooksSlider