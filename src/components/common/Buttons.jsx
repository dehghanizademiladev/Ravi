import clsx from "clsx"
import { NavLink } from "react-router"
import { FaChevronLeft } from "react-icons/fa6";

function Buttons({ children, variant, path, className, type = "button", ...rest }) {
  const classes = clsx("rounded-lg flex items-center justify-center gap-1 transition-all duration-300 p-2 lg:p-4 md:text-[15px] text-[12px]", className, {
    " hover:p-3 hover:cursor-pointer": variant === "primary",
    "hover:text-Surface hover:bg-accent p-2": variant === "secondary",
  });

  if (!path) {
    return (
      <button type={type} className={classes} {...rest}>
        {children}
        <FaChevronLeft />
      </button>
    );
  }
  return (
    <NavLink to={path} className={classes}>
      {children}
      <FaChevronLeft />
    </NavLink>
  );
}

export default Buttons