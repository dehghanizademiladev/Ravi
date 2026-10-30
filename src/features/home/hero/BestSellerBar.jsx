import { GiStaryu } from "react-icons/gi";
import { NavLink } from "react-router";
import AllButton from "../../../components/common/AllButton";
import { ImGift } from "react-icons/im";
import BooksSlider from "../../../components/common/BooksSlider";
import useFetch from "../../../hooks/useFetch";
function BestSellerBar() {
        const {data,loading,error}=useFetch("http://localhost:3000/books")
      const bestSellers = data.filter((book) => book.isBestSeller);

  return (
    <div>
        <BooksSlider books={bestSellers} title={"پرفروش ترین ها"} small={true}/>
    </div>
  )
}

export default BestSellerBar