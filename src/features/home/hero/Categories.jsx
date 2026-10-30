import { BiCategory } from "react-icons/bi";
import { categories } from "../../../data/categories";

function Categories() {
  return (
    <section className="bg-Surface/25 rounded-3xl shadow-md overflow-hidden mt-3">

      {/* Mobile Header */}
      <div className="flex items-center gap-2 px-4 pt-4 text-primary font-semibold md:hidden">
        <BiCategory size={22} />
        <span>دسته‌بندی‌ها</span>
      </div>

      <div className="flex">

        {/* Desktop Header */}
        <div className="hidden md:flex w-36 shrink-0 bg-primary text-Surface rounded-r-3xl flex-col items-center justify-center gap-2 py-6">
          <BiCategory size={32} />
          <span className="font-semibold">دسته‌بندی‌ها</span>
        </div>

        {/* Categories */}
        <div className="min-w-0 flex-1">
          <div
            className="
              flex
              gap-3
              overflow-x-auto
              no-scrollbar
              px-4
              py-4
              lg:justify-around
              lg:overflow-visible
            "
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="
                  group
                  shrink-0
                  w-24
                  md:w-auto
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  px-3
                  py-4
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:bg-accent/10
                  md:hover:-translate-y-1
                "
              >
                <category.Icon
                  size={30}
                  className="text-secondary transition-colors group-hover:text-primary md:size-10"
                />

                <span className="text-xs md:text-base whitespace-nowrap md:text-lg">
                  {category.title}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Categories;