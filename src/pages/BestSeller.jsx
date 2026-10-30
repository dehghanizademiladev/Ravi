import PageTitle from "../components/common/PageTitle"
import Container from "../components/common/container"
import BookGrids from "../components/common/BookGrids"
import useFetch from "../hooks/useFetch"
import Pagination from "../components/common/Pagination"
import usePagination from "../hooks/usePagination"

function BestSeller() {
    const {data,loading,error}=useFetch("http://localhost:3000/books");
      const books=data.filter((book)=>book.isBestSeller);
     const {
    currentItems,
    currentPage,
    setCurrentPage,
    pageCount,
  } = usePagination(books, 4);

  return (
    
    <div>
        <Container>
        <PageTitle title={"پرفروش ترین ها"}/>
        <div>
            <BookGrids items={currentItems}/>
            <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageCount={pageCount}
            />        
      </div>
        </Container>
    </div>
  )
}

export default BestSeller