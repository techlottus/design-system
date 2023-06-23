import { useState } from "react";
import Icon from "../Icon/Icon";
import TextLink from "../TextLink/TextLink";
import { myhref } from "../helpers/myrefHelper";
import cn from "classnames";

const Breadcrumb = ({
  homeIcon,
  separatorIcon,
  collapseIcon,
  links,
  classPageColor = "text-neutral-900",
  collapseMin = 3,
}: any) => {
  const [isExpand, setExpand] = useState<boolean>(links?.length < collapseMin);

  const breandcrumbExpandStyles = cn(
    "flex items-center align-center leading-[125%] space-x-2 max-[415px]:hidden ",
    {
      ["hidden"]: isExpand === false,
    }
  );
  const breandcrumbCollapseStyles = cn(
    "flex items-center align-center leading-[125%] space-x-2 group",
    {
      ["md:hidden"]: isExpand,
    }
  );
  const commonClasses =
    "flex items-center align-center text-neutral-600 font-principal leading-[125%] space-x-2 font-bold";

  const handleOnHover = () => {
    if (links.length >= collapseMin) setExpand(true);
  };
  const handleOnLeave = () => {
    if (links.length >= collapseMin) setExpand(false);
  };
  return (
    <div>
      <ul
        className={cn(commonClasses, "max-[415px]:hidden", {
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
            type="outlined"
            className="leading-[125%] "
          />
        </li>
        {links.map((link: any, indexlink: any) => (
          <li key={"crumb-" + indexlink} className={breandcrumbExpandStyles}>
            <Icon iconName={separatorIcon} className="leading-[125%]" />
            <TextLink
              text={link?.text}
              href={link?.route}
              className={cn({
                [classPageColor]: indexlink === links.length - 1,
              })}
            />
          </li>
        ))}
      </ul>
      <ul className={cn(commonClasses, { ["min-[415px]:hidden"]: isExpand })}>
        <li
          onClick={(_) => {
            myhref(homeIcon?.route);
          }}
        >
          <Icon
            iconName={homeIcon?.iconName}
            type="outlined"
            className="leading-[125%]"
          />
        </li>
        <li className={breandcrumbCollapseStyles}>
          <Icon iconName={separatorIcon} className="leading-[125%]" />
          <span onMouseEnter={handleOnHover} onMouseLeave={handleOnLeave}>
            <Icon iconName={collapseIcon} className="leading-[125%]" />
          </span>
        </li>
        <li
          className={cn(
            "flex items-center align-center leading-[125%] space-x-2"
          )}
        >
          <Icon iconName={separatorIcon} className="leading-[125%]" />
          <TextLink
            text={links[links.length - 1]?.text}
            href={links[links.length - 1]?.route}
            className={cn(classPageColor)}
          />
        </li>
      </ul>
      <div
        className={cn(
          "rounded  border border-neutral-200 shadow-2 shadow-neutral-200 drop-shadow min-[415px]:hidden font-principal",
          { ["hidden"]: isExpand === false }
        )}
        onMouseEnter={handleOnHover}
        onMouseLeave={handleOnLeave}
      >
        <div className="flex-col min-[415px]:hidden ">
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
