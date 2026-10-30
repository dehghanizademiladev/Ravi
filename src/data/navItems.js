import { TiHomeOutline } from "react-icons/ti";
import { SlNote } from "react-icons/sl";
import { BiCoinStack } from "react-icons/bi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";



export const navItems = [
  { title: "خانه", path: "/",icon:TiHomeOutline },
  { title: "بلاگ", path: "/blog",icon:SlNote },
  { title: "پرفروش ترین ها", path: "/bestSeller",icon:BiCoinStack },
  { title: "درباره ما", path: "/aboutUs",icon:AiOutlineExclamationCircle },
  { title: "تماس با ما", path: "/contact",icon:FiPhoneCall  },
];