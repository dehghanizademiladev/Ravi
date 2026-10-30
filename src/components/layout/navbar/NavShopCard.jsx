import { HiOutlineShoppingBag } from "react-icons/hi2";

function NavShopCard() {
    const num=2;
  return (
    <div>
        <div className="relative cursor-pointer">
            <HiOutlineShoppingBag size={28} className="md:size-9 lg:size-10"/>
            <span className=" absolute bg-primary/80 text-Surface h-5.5 w-5.5 rounded-full flex justify-center -top-2 -right-1.5">{num.toLocaleString("fa-IR")}</span>
        </div>

    </div>
  )
}

export default NavShopCard