import { useState } from "react";

function usePagination(items,itemsPerPage){

    const [currentPage,setCurrentPage]=useState(1);

    const pageCount=
        Math.ceil(items.length/itemsPerPage);

    const startIndex=(currentPage - 1) * itemsPerPage;
    const endIndex= startIndex+itemsPerPage

    const currentItems= items.slice(startIndex,endIndex);

    return{
        currentItems,
        currentPage,
        setCurrentPage,
        pageCount,
    }
}

export default usePagination