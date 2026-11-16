import SideLinks from "../../common/Sidebar/fragments/SideLinks/index"
import {BiBook, BiCard, BiCart, BiHome} from "react-icons/bi"
import {BsShop} from "react-icons/bs"
function ModeratorLinks() {
  return (
    <div className="flex flex-col gap-3 mx-2 pt-2">
      <SideLinks lable="پیشخوان" href="moderator/home" icon={<BiHome size={25}  className="text-black "/>} color="black"/>
      <SideLinks lable="کتاب ها" href="moderator/book" icon={<BiBook size={25}  className="text-green-700"/>} color="green-400"/>
      <SideLinks lable="سفارشات" href="moderator/oders" icon={<BiCart size={25} className="text-purple-800"/>} color="purple-400"/>
      <SideLinks lable="تخفیفات" href="moderator/offs" icon={<BsShop size={25}  className="text-orange-600"/>} color="orange-400"/>
    </div>
  )
}

export default ModeratorLinks