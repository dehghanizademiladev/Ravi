import clsx from "clsx";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import useBookSearch from "../../hooks/useBookSearch";
import SearchBox from "./search/SearchBox";

function SearchBar({variant,placeholder="جستجوی کتاب، نویسنده، ناشر ...",className}) {
  const [query,setQuery]=useState("");
  const results=useBookSearch(query);
  return (
    <>
    {query&&<div className="fixed inset-0 top-20 z-40 bg-black/10 backdrop-blur-sm" />}
    <div className={clsx("flex items-center gap-1 p-2 rounded-2xl border-2 border-gray-300 justify-start",className)}>
        <IoIosSearch size={20} color="gray"/>
        <input type="text" placeholder={placeholder} className="outline-0 border-0 w-full placeholder:text-xs" onChange={(e)=>setQuery(e.target.value)} value={query}/>
    </div>
    <div>
      {query.trim() !==0 &&  <SearchBox results={results} query={query}/>
}
    </div>
    </>
  )
}

export default SearchBar