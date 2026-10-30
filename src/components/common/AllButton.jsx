import { FaChevronLeft } from "react-icons/fa6";
import { NavLink } from "react-router";

function AllButton({children,path}) {
  return (
    <NavLink className="flex items-center gap-2 text-primary " to={path}>
        <p className="border-b border-b-primary">مشاهده همه</p>
        <FaChevronLeft/>
    </NavLink>
  )
}

export default AllButton