import { useState } from "react";
import AccordionItem from "../AccordionItem/AccordionItem";

const Accordion = (props) => {
  const { itemsData, oneItemOpen = false } = props;

  const [clicked, setClicked] = useState(0);

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked(0);
    }
    setClicked(index);
  };

  return oneItemOpen ? (
    <ul className="">
      {itemsData.map((item, index) => (
        <li key={index}>
          <AccordionItem
            data={item?.data}
            onToggle={() => handleToggle(index)}
            open={clicked === index}
            borderDownOn={item?.borderDownOn}
            ColorClass={item?.ColorClass}
            oneItemOpen={true}
          />
        </li>
      ))}
    </ul>
  ) : (
    <ul className="">
      {itemsData.map((item, index) => (
        <li key={index}>
          <AccordionItem
            data={item?.data}
            borderDownOn={item?.borderDownOn}
            ColorClass={item?.ColorClass}
            oneItemOpen={false}
          />
        </li>
      ))}
    </ul>
  );
};
export default Accordion;
