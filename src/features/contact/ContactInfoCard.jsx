function ContactInfoCard({
  icon: Icon,
  title,
  value,
  description,
}) {
  return (
    <div
      className="
        group rounded-2xl border border-[#E8DFD2]
        bg-white p-5 shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-md
      "
    >
      <div className="flex items-start gap-4">
        <div
          className="
            flex h-11 w-11 shrink-0 items-center justify-center
            rounded-xl bg-[#0F766E]/10
            text-[#0F766E]
            transition-colors duration-300
            group-hover:bg-[#0F766E]
            group-hover:text-white
          "
        >
          <Icon className="text-xl" />
        </div>

        <div className="min-w-0">
          <p className="text-xs text-[#8B5E3C]">
            {title}
          </p>

          <p className="mt-1 truncate font-medium text-[#2D2A26]">
            {value}
          </p>

          <p className="mt-1 text-[11px] text-[#8A847C]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfoCard;