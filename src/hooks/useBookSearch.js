import {books} from "../data/books";


function useBookSearch(query) {
    if(!query.trim()){
        return [];
    }

    return books.filter((book)=>{
        const searchQuery=query.toLowerCase();

        return(
            book.title.toLocaleLowerCase().includes(searchQuery)||
            book.author.toLocaleLowerCase().includes(searchQuery)
        )
    })
}

export default useBookSearch