function ContactCurve({
  bgColor = "#FAF6EF",
  lineColor = "#1E4A3D",
  strokeWidth = 5,
  width = 190,
  height = 1036,
  className = "",
}) {
  // مسیر منحنی: از بالا شروع، یه خمش ملایم به راست،
  // یه قله‌ی بزرگ به چپ، یه قله به راست، و برگشت به پایین
  const curve = `
    M85,0
    C78,80 36,337 45,480
    C54,623 130,740 133,800
    C148,953 98,1007 90,1036
  `;

  return (
    <svg
      className={`pointer-events-none absolute left-0 top-0 z-10 h-full ${className}`}
      style={{ width }}
      viewBox={`0 0 190 ${height}`}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ناحیه‌ی کرم‌رنگ سمت چپ منحنی */}
      <path d={`${curve} L0,${height} L0,0 Z`} fill={bgColor} />

      {/* خط باریک روی مرز، دقیقاً روی همون مسیر */}
      <path
        d={curve}
        fill="none"
        stroke={lineColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default ContactCurve;