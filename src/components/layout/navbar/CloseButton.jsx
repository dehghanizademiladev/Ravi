import { IoClose } from "react-icons/io5";

function CloseButton({handler,className}) {
  return (
    <div onClick={handler}><IoClose className={`size-7 cursor-pointer  ${className}`}/></div>
  )
}

export default CloseButton