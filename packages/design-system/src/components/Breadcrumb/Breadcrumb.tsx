import { useState } from "react";
import Icon from "../Icon/Icon";
import TextLink from "../TextLink/TextLink";
import { myhref } from "../helpers/myrefHelper";
import cn from "classnames";
import { BreadcrumbType } from "../Types/Breadcrumb.types";

const Breadcrumb: React.FC<BreadcrumbType> = (props: BreadcrumbType) => {
  const {
    homeIcon = { iconName: "Home", route: "/home" },
    separatorIcon = "arrow_forward_ios",
    collapseIcon = "more_horiz",
    links,
    className = "text-neutral-900",
    collapseMin = 3,
  } = props;

  const [isExpand, setExpand] = useState<boolean>(links?.length < collapseMin);

  const breandcrumbExpandStyles: string = cn(
    "flex items-center align-center leading-5 space-x-2",
    {
      ["hidden"]: isExpand === false,
    }
  );
  const breandcrumbCollapseStyles: string = cn(
    "flex items-center align-center leading-5 space-x-2 group",
    {
      ["hidden"]: isExpand,
    }
  );
  const commonClasses: string = cn(
    "flex space-x-2 items-center align-center",
    "text-neutral-600  font-principal leading-5 font-bold"
  );
  const handleOnHover = () => {
    if (links.length >= collapseMin) setExpand(true);
    console.log("hover:", isExpand);
  };
  const handleOnLeave = () => {
    if (links.length >= collapseMin) setExpand(false);
    console.log("leave:", isExpand);
  };
  return (
    <div>
      <ul
        className={cn(commonClasses, {
          ["hidden"]: isExpand === false,
        })}
        onMouseEnter={handleOnHover}
        onMouseLeave={handleOnLeave}
      >
        <li
          onClick={(_) => {
            myhref(homeIcon?.route);
          }}
        >
          <Icon
            iconName={homeIcon?.iconName}
            variant="outlined"
            className="leading-5 "
          />
        </li>
        {links.map((link: any, indexlink: any) => (
          <li key={"crumb-" + indexlink} className={breandcrumbExpandStyles}>
            <Icon iconName={separatorIcon} className="leading-5" />
            <TextLink
              text={link?.text}
              href={link?.route}
              className={cn({
                [className]: indexlink === links.length - 1,
              })}
            />
          </li>
        ))}
      </ul>
      <ul className={cn(commonClasses, { ["hidden"]: isExpand })}>
        <li
          onClick={(_) => {
            myhref(homeIcon?.route);
          }}
        >
          <Icon
            iconName={homeIcon?.iconName}
            variant="outlined"
            className="leading-5"
          />
        </li>
        <li className={breandcrumbCollapseStyles}>
          <Icon iconName={separatorIcon} className="leading-5" />
          <span onMouseEnter={handleOnHover} onMouseLeave={handleOnLeave}>
            <Icon iconName={collapseIcon} className="leading-5" />
          </span>
        </li>
        <li
          className={cn("flex items-center align-center leading-5 space-x-2")}
        >
          <Icon iconName={separatorIcon} className="leading-5" />
          <TextLink
            text={links[links.length - 1]?.text}
            href={links[links.length - 1]?.route}
            className={cn(className)}
          />
        </li>
      </ul>
      <div
        className={cn(
          "rounded  border border-neutral-200 shadow-2 shadow-neutral-200 drop-shadow md:hidden font-principal",
          { ["hidden"]: isExpand === false }
        )}
        onMouseEnter={handleOnHover}
        onMouseLeave={handleOnLeave}
      >
        <div className="flex-col md:hidden ">
          {links?.map((link: any, linkIndex: any) => (
            <div
              className={cn(
                "p-3 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 ",
                { ["hidden"]: linkIndex == links.length - 1 }
              )}
              key={"crumb-" + linkIndex}
            >
              <TextLink text={link?.text} href={link?.route} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Breadcrumb;
