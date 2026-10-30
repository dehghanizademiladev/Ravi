import BooksSlider from "../../../components/common/BooksSlider"
import useFetch from "../../../hooks/useFetch"
function OffersBar() {
    const {data,loading,error}=useFetch("http://localhost:3000/books")
    const offerBooks=data.filter((book)=>book.discount!=0)
  return (
    <div>
        <BooksSlider title={"تخفیف دار ها"} books={offerBooks}/>
    </div>
  )
}

export default OffersBar