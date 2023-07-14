import { useState } from "react";
import AccordionItem from "../AccordionItem/AccordionItem";
import { AccordionItemType, AccordionType } from "../Types/Accordion.types";

const Accordion: React.FC<AccordionType> = (props: AccordionType) => {
  const { items, expandAll = false } = props;

  const [clicked, setClicked] = useState(0);

  const handleToggle = (index: number) => {
    if (clicked === index) {
      setClicked(0);
      return;
    }
    setClicked(index);
  };

  return (
    <ul className="">
      {items?.map((item: AccordionItemType, index: number) => (
        <li key={index} className="last:border-b border-neutral-400">
          <AccordionItem
            onToggle={() => handleToggle(index)}
            open={clicked === index && !expandAll}
            expandAll={expandAll}
            {...item}
          />
        </li>
      ))}
    </ul>
  );
};
export default Accordion;
