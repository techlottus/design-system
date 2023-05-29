import React from "react";
import Tab from "../Tab";
import cn from "classnames";

const defaultValues = {
  className: "",
};
const Tabs = (props) => {
  const { tabs, className = defaultValues.className } = props;
  return (
    <div className="overflow-hidden">
      <div className={cn(className, "flex justify-center overflow-auto")}>
        {tabs.map((tab, indexTab) => (
          <Tab {...tab} key={indexTab} />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
