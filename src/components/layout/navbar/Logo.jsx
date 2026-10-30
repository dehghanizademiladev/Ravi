import clsx from "clsx";
import logo from "../../../assets/logo.png";

function Logo({className}) {
  return (
    <div className="flex gap-2 items-center">
        <img src={logo} alt=""  className={clsx("size-16",className)}/>
        <div className="font-morabba text-primary sm:flex flex-col items-center hidden">
          <h3 className="font-semibold text-xl inline md:text-2xl lg:text-3xl">راوی</h3>
          <p className="text-[9px] text-center md:text-[8px] lg:text-[15px]">هر کتاب روایتی تازه</p>
        </div>
    </div>
  )
}

export default Logo