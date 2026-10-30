import { GiBookCover } from "react-icons/gi";

function PageTitle({title,className}) {
  return (
    <div className='flex gap-2'>
        <GiBookCover className="text-primary text-4xl"/>
        <h2 className="font-morabba text-3xl font-bold">{title}</h2>
    </div>
  )
}

export default PageTitle