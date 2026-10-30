import { NavLink } from "react-router"
import { navItems } from "../../../data/navItems"
import clsx from "clsx"

function NavItems({className,onItemClick}) {
  return (
    <div className={`${className}`}>
        {navItems.map((item)=>(
            <NavLink key={item.title} to={item.path} onClick={onItemClick} className={(({isActive})=>clsx(isActive &&"relative font-semibold text-primary   lg:after:content-[''] lg:after:bg-primary lg:after:w-2 lg:after:h-2 lg:after:absolute lg:after:rounded-full lg:after:top-7 lg:after:right-1/3 "))}>
                <div className="flex gap-3 hover:bg-accent/10 lg:hover:bg-Background p-3 lg:p-0 rounded-md border-b-2 border-b-gray-400/40 lg:border-b-0">
                    <span className="lg:hidden">{<item.icon className=" size-6"/>}</span>
                    <span className="lg:text-[14px] lg:text-[18px]">{item.title}</span>
                    
                </div>
            </NavLink>
        ))}
    </div>
  )
}

export default NavItems