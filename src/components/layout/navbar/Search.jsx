import { IoIosSearch } from "react-icons/io";


function Search({className,searchHandler}) {
  return (
    <div className={className} onClick={searchHandler}>
        <IoIosSearch size={28} className="md:size-9 cursor-pointer"/>
    </div>
  )
}

export default Search