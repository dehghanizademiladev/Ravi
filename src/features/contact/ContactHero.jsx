import { FiMessageCircle } from "react-icons/fi";

function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#E8DFD2]">
      {/* Decorative circles */}
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#0F766E]/5" />
      <div className="absolute -left-24 bottom-[-100px] h-72 w-72 rounded-full bg-[#C89B3C]/10" />

      <div className="relative mx-auto flex max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8DFD2] bg-white/60 px-4 py-2 text-xs font-medium text-[#8B5E3C] backdrop-blur-sm">
            <FiMessageCircle className="text-base" />
            <span>در ارتباط با راوی</span>
          </div>

          <h1 className="font-morabba text-4xl leading-[1.4] text-[#2D2A26] sm:text-5xl lg:text-6xl">
            حرفی برای گفتن دارید؟
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-8 text-[#6B665F] sm:text-base">
            اگر سوالی درباره کتاب‌ها، سفارش‌ها یا خدمات راوی دارید،
            خوشحال می‌شویم صدای شما را بشنویم. کافیست با ما در ارتباط باشید.
          </p>

          <div className="mt-7 h-1 w-16 rounded-full bg-[#C89B3C]" />
        </div>
      </div>
    </section>
  );
}

export default ContactHero;