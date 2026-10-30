import BooksSlider from "../../../components/common/BooksSlider"
import useFetch from "../../../hooks/useFetch"

function Newest() {
  
  const {data,loading,error}=useFetch("http://localhost:3000/books")
    const newBooks=data.filter((book)=>book.isNew)
  return (
    <div>
        <BooksSlider books={newBooks} title={"جدیدترین ها"}/>
    </div>
  )
}

export default Newest