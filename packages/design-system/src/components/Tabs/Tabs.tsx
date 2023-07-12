import Tab from "../Tab";
import cn from "classnames";
import { TabConfig, TabsConfig } from "../Types/Tabs.types";

const defaultValues = {
  className: "",
};
const Tabs = (props: TabsConfig) => {
  const { tabs, className = defaultValues.className } = props;
  return (
    <div className="overflow-hidden">
      <div className={cn(className, "flex justify-center overflow-auto")}>
        {tabs?.map((tab: TabConfig, indexTab: number) => (
          <Tab {...tab} key={indexTab} />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
