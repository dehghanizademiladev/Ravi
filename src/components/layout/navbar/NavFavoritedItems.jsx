import { useContext } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import FavoritesContext from "../../../context/FavoritesContext/Favorites";
import FavoritedBox from "../../common/favoritedItems/FavoritedBox";
import { useState } from "react";

function NavFavoritedItems() {
    const [boxShow,setBoxShadow]=useState(false);
    const boxHandler=()=>{
        setBoxShadow((prev)=>!prev)
    }
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
    const num=favorites.length;
  return (
    <div className="relative">
            <div className="relative cursor-pointer">
                <IoMdHeartEmpty  size={28} className="md:size-9 lg:size-10" onMouseEnter={boxHandler}/>
                <span className=" absolute bg-red-600/80 text-Surface h-5.5 w-5.5 rounded-full flex justify-center -top-2 -right-1.5">{num.toLocaleString("fa-IR")}</span>
            </div>
            {boxShow&&<div>
            <FavoritedBox handler={boxHandler} />
            </div>}
        </div>
  )
}

export default NavFavoritedItems