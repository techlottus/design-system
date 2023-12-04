import Tab from "../Tab";
import cn from "classnames";
import { TabConfig, TabsConfig } from "../Types/Tabs.types";
import { useState } from "react";
import React from "react";
const Tabs: React.FC<TabsConfig> = (props: TabsConfig) => {
  const { tabs, className = "" } = props;

  const [clicked, setClicked] = useState(0);

  const handleToggle = (index: any) => {
    if (clicked === index) {
      return setClicked(0);
    }
    setClicked(index);
  };
  return (
    <div className="overflow-hidden">
      <div className={cn(className, "flex justify-center overflow-auto")}>
        <ul className="flex">
          {tabs?.map((tab: TabConfig, indexTab: number) => (
            <li onClick={() => handleToggle(indexTab)} key={indexTab}>
              <Tab
                active={clicked === indexTab}
                className="first:border-l border-surface-300"
                {...tab}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
