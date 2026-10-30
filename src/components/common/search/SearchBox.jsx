import { setPrice } from "../../../assets/consistents/setPrice";

function SearchBox({ results , query}) {
  const boxClass =
    "absolute top-full z-50 mt-2 w-full rounded-2xl bg-gray-200/50 p-3 shadow-lg backdrop-blur-md lg:left-10 lg:top-18 lg:w-[40%]";

  if (!results.length && query) {
    return (
      <div
        className={`${boxClass} p-6 text-center text-xl font-bold text-secondary`}
      >
        کتابی یافت نشد
      </div>
    );
  }

  return (
    <>
    {query&&
    <div
      className={`${boxClass} h-100 overflow-y-auto`}
    >
      {results.map((result) => (
        <div
          key={result.id}
          className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/50"
        >
          {/* تصویر */}
          <div className="shrink-0">
            <img
              src={result.image}
              alt={result.title}
              className="h-20 w-14 rounded-lg object-cover"
            />
          </div>

          {/* اطلاعات */}
          <div className="min-w-0 flex-1">
            <div className="truncate font-semibold">
              {result.title}
            </div>

            <div className="mt-1 truncate text-sm text-gray-500">
              {result.author}
            </div>
          </div>

          {/* قیمت */}
          <div className="flex shrink-0 flex-col items-end">
            {result.discount !== 0 && (
              <del className="text-xs text-gray-500">
                {result.price.toLocaleString("fa-IR")}
              </del>
            )}

            <span className="font-semibold text-primary">
              {setPrice(result.price, result.discount)} تومان
            </span>
          </div>
        </div>
      ))}
    </div>}
    
    </>
  );
}

export default SearchBox;