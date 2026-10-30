import { clsx } from "clsx";

function Pagination({ currentPage, setCurrentPage, pageCount }) {
  const paginationHandler = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div className="flex justify-center gap-7 mt-5">
      <button
        className={clsx(
          "text-xs p-1 rounded-sm font-bold",
          currentPage === pageCount
            ? "bg-gray-200 cursor-not-allowed text-gray-300"
            : "bg-gray-300 cursor-pointer"
        )}
        onClick={() => paginationHandler(currentPage + 1)}
        disabled={currentPage === pageCount}
      >
        بعدی
      </button>

      <span>{currentPage}</span>

      <button
        className={clsx(
          "text-xs p-1 rounded-sm font-bold",
          currentPage === 1
            ? "bg-gray-200 cursor-not-allowed text-gray-400"
            : "bg-gray-300 cursor-pointer"
        )}
        onClick={() => paginationHandler(currentPage - 1)}
        disabled={currentPage === 1}
      >
        قبلی
      </button>
    </div>
  );
}

export default Pagination;