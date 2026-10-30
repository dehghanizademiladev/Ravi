import { HiOutlineUserCircle } from "react-icons/hi2";
import { NavLink } from "react-router"
import { Link } from "react-router";
function NavProfile() {
  return (
    <div className=" cursor-pointer">
      <NavLink to={"/auth"}>
          <HiOutlineUserCircle  size={28} className="md:size-9 lg:size-10"/>
        </NavLink>
    </div>
  )
}

export default NavProfile