import { RxHamburgerMenu } from "react-icons/rx";

function HamburgerButton({handler}) {
  return (
    <div onClick={handler}><RxHamburgerMenu className='size-6 cursor-pointer lg:hidden'/></div>
  )
}

export default HamburgerButton