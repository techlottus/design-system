import React, { useState } from "react";
import Icon from "../Icon";
import cn from "classnames";
import { myhref } from "../helpers/myrefHelper";
import {
  AccordionContentType,
  AccordionItemType,
} from "../Types/Accordion.types";

const AccordionItem: React.FC<AccordionItemType> = (
  props: AccordionItemType
) => {
  const {
    icon,
    title,
    text,
    content,
    className = "",
    onToggle,
    open,
    expandAll = true,
  } = props;

  const [isOpen, setOpen] = useState(false);

  const handleOnClick = () => {
    if (isOpen) {
      return setOpen(false);
    }
    setOpen(true);
  };

  return (
    <div id="Accordion-item" className="font-principal">
      <div
        id="accordion-item-title"
        className={cn(
          "border border-neutral-400 flex flex-1 items-start py-6 px-4 cursor-pointer border-b-0",
          className,

          {
            ["bg-neutral-200"]: open || isOpen,
          }
        )}
        onClick={!expandAll ? onToggle : handleOnClick}
      >
        <span className="flex pr-4 text-neutral-600">
          <Icon iconName={icon?.iconName} />
        </span>
        <span className={cn("flex w-full pr-4")}>{title}</span>
        <span className={cn("flex pr-4 text-neutral-600 cursor-pointer")}>
          <Icon
            iconName={
              (expandAll && open) || isOpen ? "expand_less" : "expand_more"
            }
          />
        </span>
        <span>{text}</span>
      </div>
      <div
        id="accordeon-item-content"
        className={cn("flex flex-col", {
          ["h-0 hidden"]: !open && !isOpen,
        })}
      >
        {content?.map((item: AccordionContentType, index: number) => (
          <div
            key={index}
            className={cn(
              "flex px-4 border border-t-0 border-neutral-400 py-2 items-center",
              {
                ["cursor-pointer"]: item?.link,
              }
            )}
            onClick={
              item.link
                ? () => {
                    myhref(item.link);
                  }
                : item.onClick
                ? item.onClick
                : () => {}
            }
          >
            <div className="w-full">{item?.text}</div>
            <div
              className={cn(
                "text-neutral-700 font-bold text-2xl flex items-start cursor-pointer",
                { ["invisible"]: !item.icon }
              )}
            >
              <Icon {...icon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionItem;
