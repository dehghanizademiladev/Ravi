import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import Comment from "../features/Book/Comment";
import Container from "../components/common/Container"
import BookDetail from "../features/Book/BookDetail";

function Book() {
  const { bookName } = useParams();
  const {data,loading,error}=useFetch("http://localhost:3000/books")
  
  const book = data.find((book) => book.slug === bookName);
  const {
    data: comments,
    loading: commentsLoading,
    error: commentsError,
  } = useFetch(
    book
      ? `http://localhost:3000/comments?bookId=${book.id}`
      : null
  );
  if (!book) {
    return (
      <div className="flex min-h-96 items-center justify-center">
        <h2 className="text-xl font-semibold">
          کتاب مورد نظر پیدا نشد
        </h2>
      </div>
    );
  }

  
  return (
    <div className="mt-10">
      <Container>
        <BookDetail book={book}/>
      <div className="mt-5" id="book-comments">
          {comments.map((comment)=> <div>
            <Comment comment={comment.text} user={comment.userName} date={comment.createdAt}/>
          </div>)}
        </div>
      </Container>
    </div>
  );
}

export default Book;