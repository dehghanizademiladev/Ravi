import AccordionItems from "./items"

export const Accordion =({options})=>{
    return(
        <div className="border-4 rounded-md border-accent/20">
            {options.map((option)=>{
                return <AccordionItems {...option} key={option.id}/>
            })}
        </div>
    )
}