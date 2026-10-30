import NavItems from "./NavItems"
import { navItems } from "../../../data/navItems"

function MobileMenu({closeMenu,className}) {
  return (
    <div className={className}>
        <NavItems className=" flex w-full flex-col absolute top-4 bg-Background backdrop-blur-md gap-4 lg:hidden  px-6" onItemClick={closeMenu}/>
    </div>
  )
}

export default MobileMenu