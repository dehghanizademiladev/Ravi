import { NavLink } from "react-router";

function Index({ href, lable, icon, color }) {
  return (
    <div className="w-full cursor-pointer mt-5 rounded-xl ">
      <NavLink
        to={href}
        className="px-15 text-xl hover:bg-primaryHover/10 py-3 rounded-2xl flex gap-4 relative"
      >
        {({ isActive }) => (
          <>
            {isActive && <div className={`bg-${color} opacity-17  px-15 py-3  rounded-2xl z-10 size-full duration-150 absolute right-0 top-0`}></div>}
            <span>{icon}</span>
            {lable}
          </>
        )}
      </NavLink>
    </div>
  );
}

export default Index;