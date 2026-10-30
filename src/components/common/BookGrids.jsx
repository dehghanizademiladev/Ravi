import BookBox from "./BookBox"
function BookGrids({items}) {
  return (
    <div className="grid grid-cols-6 gap-3">
        {items.map((item)=><BookBox key={item.id} slug={item.slug} discount={item.discount} image={item.image} title={item.title} author={item.author} price={item.price}/>)}
    </div>
  )
}

export default BookGrids