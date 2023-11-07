import React, { useState } from "react";
import {
  getClassItemMobContainer,
  getClassIconMobContainer,
} from "../helpers/classesHelper";
import { myhref } from "../helpers/myrefHelper";
import TextLink from "../TextLink";
import Button from "../Button";
import Icon from "../Icon";
import PromoLink from "../PromoLink";
import SocialMedia from "../SocialMedia";
import cn from "classnames";
import { MenuItemType, MenuMobileType } from "../Types/Menu.types";

const MenuMobile: React.FC<MenuMobileType> = (props: MenuMobileType) => {
  const {
    submenuM = false,
    items,
    button,
    className = "",
    socialMedia,
    promolink1,
    promolink2,
  } = props;

  /** states */
  const iconExpandMore: string = "arrow_forward_ios";
  const active: string = "principal";
  const inactive: string = "inactive";
  const iconExpandLess: string = "arrow_back_ios";

  const [index, setIndex] = useState<number>(0);
  const [type, setType] = useState<string>(active);
  const [sub, setSub] = useState<string>(inactive);

  const handleArrowMore = (index: number) => {
    setType(inactive);
    setSub(active);
    setIndex(index);
  };
  const handleArrowLess = () => {
    setType("principal");
    setSub(inactive);
  };

  const ClassesMenuMobContainer: string = cn(
    "w-d:hidden w-full ",
    "bg-surface-100",
    "border-t border-surface-300",
    "p-2 top-12",
    "flex absolute flex-col overflow-y-auto overscrol-contain",
    " transition  ease-in-out delay-150 transform-gpu opacity-100",
    {
      ["left-0 translate-x-0 translate-y-0"]: !submenuM,
      ["-translate-x-full translate-y-0 right-8"]: submenuM,
    }
  );

  return (
    <div
      className={cn(
        " w-full bg-surface-100 container overscroll-contain h-9/10 px-2 overflow-hidden",
        className
      )}
    >
      <div id="MenuM" className={ClassesMenuMobContainer}>
        <div id="MenuContainer" className="overscroll-contain h-screen   ">
          <div
            id="MenuOptions"
            className={cn(
              "h-80 w-full overflow-y-scroll w-d:hidden flex overscroll-contain pr-2 -translate-x-full transition  ease-in-out delay-150 transform-gpu",
              {
                ["translate-x-0 translate-y-0"]: type === "principal",
                ["translate-x-0 translate-y-0 absolute opacity-100"]:
                  type !== "principal",
              }
            )}
          >
            <div
              id="itemsContainer"
              className="w-full flex flex-col  py-1 z-20  border-t border-surface-300"
            >
              {items?.map((item: MenuItemType, itemIndex: number) => {
                if (item?.children?.length) {
                  return (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-center p-1 h-full border-b border-surface-300 cursor-pointer"
                    >
                      <div
                        className={getClassItemMobContainer(item?.active, true)}
                      >
                        <span
                          onClick={() => myhref(item?.route)}
                          className=" flex py-1"
                        >
                          <TextLink text={item.label} href={item?.route} />
                        </span>
                      </div>
                      <div
                        id="iconGo"
                        className={getClassIconMobContainer(item?.iconActive)}
                        onClick={(_) => handleArrowMore(itemIndex)}
                      >
                        <Icon iconName={iconExpandMore} />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={itemIndex}
                      className={getClassItemMobContainer(item?.active, false)}
                    >
                      <div
                        className="flex-1"
                        onClick={() => myhref(item?.route)}
                      >
                        <TextLink text={item.label} href={item?.route} />
                      </div>
                      <div
                        id="iconGo"
                        className="p-3 cursor-pointer"
                        onClick={() => myhref(item.route)}
                      >
                        <Icon iconName={iconExpandMore} />
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div
            id="subMenu"
            className={cn(
              "w-full h-full top-2 left-0 absolute bg-surface-100 overflow-auto w-d:hidden flex overscroll-contain transform-gpu transition-all ease-in-out ",
              {
                ["translate-x-0 translate-y-0"]: sub === "principal",
                ["translate-x-full translate-y-0"]: sub !== "principal",
              }
            )}
          >
            <div className="w-full flex flex-col  py-1 z-20 overscroll-contain h-9/10 ">
              <div className="flex justify-end items-center p-1 border-b border-t w-full border-surface-300 cursor-pointer flex-row-reverse">
                <TextLink text={items[index].label} href={items[index].route} />
                <div
                  id="iconGo"
                  className="px-2 py-1 cursor-pointer flex items-center"
                  onClick={() => handleArrowLess()}
                >
                  <Icon iconName={iconExpandLess} />
                </div>
              </div>
              {items[index]?.children?.map(
                (item: MenuItemType, itemIndex: number) => {
                  if (item?.principal) {
                    return (
                      <div
                        key={itemIndex}
                        className={getClassItemMobContainer(
                          item?.active,
                          item?.principal
                        )}
                      >
                        <div
                          className="flex-1"
                          onClick={() => {
                            myhref(item?.route);
                          }}
                        >
                          <TextLink text={item?.label} href={item?.route} />
                        </div>
                        <div
                          id="iconGo"
                          className="px-3 py-1 cursor-pointer  border-l-2  border-surface-300"
                        >
                          <Icon iconName={iconExpandMore} />
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={itemIndex}
                        className={getClassItemMobContainer(
                          item?.active,
                          item?.principal
                        )}
                      >
                        <div
                          className="flex-1"
                          onClick={() => myhref(item?.route)}
                        >
                          <TextLink
                            text={item?.label}
                            href={item?.route}
                            items={false}
                          />
                        </div>
                        <div id="iconGo" className="px-3 py-1 cursor-pointer">
                          <Icon iconName={iconExpandMore} />
                        </div>
                      </div>
                    );
                  }
                }
              )}
            </div>
          </div>

          <div
            id="info"
            className=" absolute bottom-10 w-d:hidden bg-surface-100 flex flex-1 flex-col w-full"
          >
            <div className="py-2 px-2">
              <Button
                size="sm"
                className="min-w-full flex justify-center"
                {...button}
              />
            </div>

            <div className="flex flex-row space-x-6 w-full rounded py-2 px-2">
              {promolink1 && <PromoLink {...promolink1} />}
              {promolink2 && <PromoLink {...promolink2} />}
            </div>

            <div>
              <SocialMedia
                socialMedia={socialMedia}
                className="text-surface-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
