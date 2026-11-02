import { HiOutlineUserCircle } from "react-icons/hi2";
import { NavLink } from "react-router"
import AuthContext from "../../../context/AuthContext";
import { useContext } from "react";

function NavProfile() {
  const {user,loading}=useContext(AuthContext);

  return (
    <div className=" cursor-pointer">
      <NavLink to={"/auth"}>
          <HiOutlineUserCircle  size={28} className={`md:size-9 lg:size-10 ${
            loading?"text-yellow-400":
            user?"text-green-500":"text-red-500"}`}/>
        </NavLink>
    </div>
  )
}

export default NavProfile