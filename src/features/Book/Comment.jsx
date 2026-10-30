
import { FaRegCalendarAlt, FaStar } from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";

function Comment({ comment, date, user, rating = 5 }) {
  return (
    <div className=" group my-3 p-2 relative overflow-hidden rounded-3xl border border-border  shadow-[0_8px_30px_rgba(45,42,38,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(45,42,38,0.08)] md:p-4">

      {/* decorative background */}
      <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-[#0F766E]/5 transition-transform duration-500 group-hover:scale-150" />

      <div className="relative">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">

          <div className="flex items-center gap-3">

            {/* Avatar */}
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F766E] to-[#115E59] text-white shadow-md shadow-[#0F766E]/20">
                <span className="font-morabba text-xl font-bold">
                  {user?.charAt(0)}
                </span>
              </div>

              {/* verified */}
              <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#C89B3C] text-white">
                <HiOutlineBadgeCheck size={13} />
              </div>
            </div>

            {/* User info */}
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-morabba text-base font-bold text-text">
                  {user}
                </h4>

                <span className="rounded-full bg-[#0F766E]/10 px-2 py-0.5 text-[10px] text-[#0F766E]">
                  خریدار
                </span>
              </div>

              {/* Date */}
              <div className="mt-1 flex items-center gap-1.5 text-xs text-[#2D2A26]/40">
                <FaRegCalendarAlt size={11} />
                <span>{date}</span>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="flex shrink-0 items-center gap-0.5 rounded-xl bg-[#FAF6EF] px-2.5 py-1.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={12}
                className={
                  star <= rating
                    ? "text-[#C89B3C]"
                    : "text-[#E8DFD2]"
                }
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-gradient-to-r from-transparent via-[#E8DFD2] to-transparent" />

        {/* Comment */}
        <div className="relative pr-7">

          {/* Quote */}
          <span className="absolute -right-1 -top-4 font-serif text-5xl leading-none text-[#0F766E]/10">
            «
          </span>

          <p className="font-peyda text-sm leading-8 text-[#2D2A26]/75">
            {comment}
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between">

          <span className="text-xs text-[#2D2A26]/35">
            نظر ثبت‌شده درباره این کتاب
          </span>

          <div className="flex h-8 items-center rounded-full bg-[#0F766E]/5 px-3 text-xs text-[#0F766E]">
            تجربه خرید
          </div>

        </div>
      </div>
    </div>
  );
}

export default Comment;
