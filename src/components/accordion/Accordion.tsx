interface IAccordionProps{
    title: string,
    text: string,
    
}

const Accordion = ({title,text}:IAccordionProps) => {
    return ( 
        
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" defaultChecked/>
                <div className="text-2xl md:text-3xl lg:text-4xl font-light collapse-title ">{title}</div>
                <div className="collapse-content text-sm md:text-base lg:text-xl font-light text-blue/80">{text}</div>
            </div>
       
     );
}
 
export default Accordion;