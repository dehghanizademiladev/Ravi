import { FiBookOpen, FiHeart } from "react-icons/fi";

function ContactFooterNote() {
  return (
    <div className="flex flex-col justify-between rounded-3xl bg-[#0F766E] p-7 text-white sm:p-9">
      <div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
          <FiBookOpen className="text-xl" />
        </div>

        <h2 className="mt-7 font-morabba text-3xl leading-relaxed">
          راوی؛ جایی برای
          <br />
          عاشقان کتاب
        </h2>

        <p className="mt-5 text-sm leading-8 text-white/75">
          اگر پیشنهاد، انتقاد یا سوالی درباره فروشگاه و کتاب‌های راوی
          دارید، با ما در میان بگذارید. هر پیام شما به بهتر شدن راوی
          کمک می‌کند.
        </p>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6">
        <div className="flex items-center gap-2 text-sm text-white/70">
          <FiHeart className="text-[#C89B3C]" />
          <span>از اینکه راوی را انتخاب کردید ممنونیم.</span>
        </div>
      </div>
    </div>
  );
}

export default ContactFooterNote;