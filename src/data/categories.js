import { TiPencil } from "react-icons/ti";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { PiPlant } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";
import { MdOutlinePsychologyAlt } from "react-icons/md";
import { GiSpellBook } from "react-icons/gi";




export const categories=[
  {
    id: 1,
    title: "فلسفی",
    slug: "philosophy",
    color: "#D8E7DF",
    Icon:FaRegLightbulb,
  },
  {
    id: 2,
    title: "داستانی و رمان",
    slug: "novel",
    color: "#F5E7D2",
    Icon:GiSpellBook
  },  
  {
    id: 3,
    title: " توسعه فردی",
    slug: "personalDev",
    color: "#F5E7D2",
    Icon:PiPlant
  },  
  {
    id: 4,
    title: "تاریخ و سیاست",
    slug: "history",
    color: "#F5E7D2",
    Icon:MdOutlineHistoryEdu
  }, 
   {
    id: 5,
    title: "کودک و نوجوان",
    slug: "teanagery",
    color: "#F5E7D2",
    Icon:TiPencil
  }, 
   {
    id: 6,
    title: "روانشناسی",
    slug: "psychology",
    color: "#F5E7D2",
    Icon:MdOutlinePsychologyAlt
  }, 
]
