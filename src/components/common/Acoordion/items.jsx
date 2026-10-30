import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";

function AccordionItems({ lable, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <div
      onClick={toggleIsOpen}
      className="flex flex-col border-b-4 border-accent/20 hover:bg-primaryHover/12 p-4 cursor-pointer py-5"
    >
      <div className="flex justify-between">
        <div className="font-semibold text-xl">{lable}</div>

        <FaAngleLeft
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen
            ? "max-h-40 opacity-100 mt-3"
            : "max-h-0 opacity-0 mt-0"
        }`}
      >
        {content}
      </div>
    </div>
  );
}

export default AccordionItems;