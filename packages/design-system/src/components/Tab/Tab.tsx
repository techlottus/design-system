import cn from "classnames";
import Heading from "../Heading";
import Icon from "../Icon";
import SVGIcons from "../assets/SVGIcons";
import { TabConfig } from "../Types/Tabs.types";
import React from "react";
const Tab: React.FC<TabConfig> = (props: TabConfig) => {
  const {
    label,
    active = false,
    className = "",
    iconName,
    onClick = () => { },
  } = props;

  return (
    <div className={cn("flex flex-col space-x-0 w-fit")} onClick={onClick}>
      <div
        className={cn(
          "flex relative  justify-center p-4  items-center whitespace-nowrap ",
          {
            ["bg-surface-900 text-surface-100 drop-shadow-md border-b-2 border border-surface-900"]:
              active,
            ["bg-surface-100 text-surface-900 border-b-2 border-t border-r border-surface-300  border-b-primary-500"]:
              !active,
          },
          className
        )}
      >
        {iconName ? (
          <span
            className={cn(
              " flex text-sm font-semibold leading-5 whitespace-nowrap items-center justify-center",
              {
                ["space-x-2"]: label,
              }
            )}
          >
            <Icon iconName={iconName} className="flex justify-center text-lg" />
            <Heading
              title={label}
              variant="h-6"
              font="secondary"
              className="text-sm font-semibold leading-5 "
            />
          </span>
        ) : (
          <Heading
            title={label}
            variant="h-6"
            font="secondary"
            className="text-sm font-semibold leading-5"
          />
        )}
      </div>
      <div className={cn("flex justify-center h-2", { ["hidden"]: !active })}>
        {/* <img className="h-2 " src={polygon} alt="polygon" /> */}
        <SVGIcons name="polygonTab" className="text-surface-900" />
      </div>
    </div>
  );
};
export default Tab;
