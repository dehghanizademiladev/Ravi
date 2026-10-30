import clsx from "clsx";
 const sizes={
    sm:"max-w-5xl",
    md:"max-w-6xl",
    lg:"max-w-7xl",
    xl:"max-w-8xl",
    full:"max-w-full",

  }
function Container({ children, className,size="xl" }) {

  return (
    <div
      className={clsx(
        "mx-auto px-1 sm:px-6 lg:px-8",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;