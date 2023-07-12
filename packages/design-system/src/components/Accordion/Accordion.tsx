import { useState } from "react";
import AccordionItem from "../AccordionItem/AccordionItem";

const Accordion = (props: any) => {
  const { itemsData, expandAll = false } = props;

  const [clicked, setClicked] = useState(0);

  const handleToggle = (index: any) => {
    if (clicked === index) {
      setClicked(0);
      return;
    }
    setClicked(index);
  };

  return !expandAll ? (
    <ul className="">
      {itemsData.map((item: any, index: any) => (
        <li key={index} className="last:border-b border-neutral-400">
          <AccordionItem
            onToggle={() => handleToggle(index)}
            open={clicked === index}
            expandAll={false}
            {...item}
            className="last:border-b"
          />
        </li>
      ))}
    </ul>
  ) : (
    <ul className="">
      {itemsData.map((item: any, index: any) => (
        <li key={index} className="last:border-b border-neutral-400">
          <AccordionItem expandAll={true} {...item} />
        </li>
      ))}
    </ul>
  );
};
export default Accordion;
