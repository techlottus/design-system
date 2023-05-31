import cn from "classnames";

/* Classes*/

export const getPositionContainerText = (potition) => {
  const commonClasses = cn(
    "absolute p-10",
    "top-0  left-0",
    "w-full h-full",
    "hidden md:flex "
  );
  const positions = {
    "center-top": "justify-center items-start text-center",
    "center-middle": "justify-center items-center text-center",
    "center-bottom": "justify-center items-end text-center",
    "left-top": "justify-start items-start text-left",
    "left-middle": "justify-start items-center text-left",
    "left-bottom": "justify-start items-end text-left",
    "right-top": "justify-end items-start text-right",
    "right-middle": "justify-end items-center text-right",
    "right-bottom": "justify-end items-end text-right",
  };

  const classesBannerImg = cn(commonClasses, {
    [[positions[potition]]]: true,
  });
  return classesBannerImg;
};

export const getClassBannerPositionButton = (potition) => {
  const classesBannerImg = cn("flex", {
    ["justify-center items-start text-center"]: potition === "center-top",
    ["justify-center items-center text-center"]: potition === "center-middle",
    ["justify-center items-end text-center"]: potition === "center-bottom",
    ["justify-start items-start text-left"]: potition === "left-top",
    ["justify-start items-center text-left"]: potition === "left-middle",
    ["justify-start items-end text-left"]: potition === "left-bottom",
    ["justify-end items-start text-right"]: potition === "right-top",
    ["justify-end items-center text-right"]: potition === "right-middle",
    ["justify-end items-end text-right"]: potition === "right-bottom",
  });
  return classesBannerImg;
};

export const getClassItem = (principal, active) => {
  const classItem = cn("flex flex-1 flex-nowrap align-middle  ", {
    ["font-bold"]: principal,
    ["pl-2  py-4"]: !principal,
    ["bg-neutral-900 text-neutral-100"]: active && !principal,
  });
  return classItem;
};

const classesSubMenu = cn(
  "flex absolute flex-row flex-1",
  "shadow shadow-lg",
  "font-normal",
  "bg-neutral-100",
  "w-full h-14 lg:h-auto xl:h-auto 2xl:h-auto",
  "invisible lg:visible",
  "pl-2",
  "border-t border-neutral-300"
);
export const getclassSubMenu = (submenu) => {
  const classSubMenu = cn(classesSubMenu, { ["hidden"]: submenu });
  return classSubMenu;
};

export const getClassItemMobContainer = (active, principal) => {
  const classItemMobContainer = cn("flex", {
    ["bg-neutral-900 text-neutral-100"]: active,
    ["flex-1"]: principal,
    ["justify-between items-center p-1 border-b border-neutral-300 cursor-pointer"]:
      !principal,
  });
  return classItemMobContainer;
};

const commonClassesItems = cn(
  "px-3 py-1 cursor-pointer  border-l  border-neutral-300 hover:bg-neutral-300 hover:text-neutral-900 "
);

export const getClassIconMobContainer = (active) => {
  const classIconMobContainer = cn(commonClassesItems, {
    ["bg-neutral-900 text-neutral-100"]: active,
  });
  return classIconMobContainer;
};

export const getPositionSliderContainerText = (potition) => {
  const commonClasses = cn(
    "absolute py-12 px-32",
    "top-0  left-0",
    "w-full h-full",
    "hidden md:flex "
  );
  const positions = {
    "center-top": "justify-center items-start text-center",
    "center-middle": "justify-center items-center text-center",
    "center-bottom": "justify-center items-end text-center",
    "left-top": "justify-start items-start text-left",
    "left-middle": "justify-start items-center text-left",
    "left-bottom": "justify-start items-end text-left",
    "right-top": "justify-end items-start text-right",
    "right-middle": "justify-end items-center text-right",
    "right-bottom": "justify-end items-end text-right",
  };

  const classesBannerImg = cn(commonClasses, {
    [[positions[potition]]]: true,
  });
  return classesBannerImg;
};
