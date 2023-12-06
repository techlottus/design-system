import cn from "classnames";

/* Classes*/

export const getPositionContainerText = (potition: "center-top" | "center-middle" | "center-bottom" | "left-top" | "left-middle" | "left-bottom" | "right-top" | "right-middle" | "right-bottom") => {
  const commonClasses = cn(
    "absolute p-10",
    "top-0  left-0",
    "w-full h-full",
    "hidden tablet:flex "
  );
  const positions: {
    "center-top": string;
    "center-middle": string;
    "center-bottom": string;
    "left-top": string;
    "left-middle": string;
    "left-bottom": string;
    "right-top": string;
    "right-middle": string;
    "right-bottom": string;
  } = {
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

  const classesBannerImg = cn(commonClasses, [positions[potition]]);
  return classesBannerImg;
};

export const getClassBannerPositionButton = (potition: string) => {
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

export const getClassItem = (principal: boolean, active: boolean) => {
  const classItem = cn("flex flex-1 flex-nowrap align-middle  ", {
    ["font-bold"]: principal,
    ["pl-2  py-4"]: !principal,
    ["bg-surface-900 text-surface-100"]: active && !principal,
  });
  return classItem;
};

const classesSubMenu = cn(
  "flex absolute flex-row flex-1",
  "shadow shadow-lg",
  "font-normal",
  "bg-surface-100",
  "w-full h-14 desktop:h-auto xl:h-auto 2xl:h-auto",
  "invisible desktop:visible",
  "pl-2",
  "border-t border-surface-300"
);
export const getclassSubMenu = (submenu: boolean) => {
  const classSubMenu = cn(classesSubMenu, { ["hidden"]: submenu });
  return classSubMenu;
};

export const getClassItemMobContainer = (active: boolean, principal: boolean) => {
  const classItemMobContainer = cn("flex", {
    ["bg-surface-900 text-surface-100"]: active,
    ["flex-1"]: principal,
    ["justify-between items-center p-1 border-b border-surface-300 cursor-pointer"]:
      !principal,
  });
  return classItemMobContainer;
};

const commonClassesItems = cn(
  "px-3 py-1 cursor-pointer  border-l  border-surface-300 hover:bg-surface-300 hover:text-surface-900 "
);

export const getClassIconMobContainer = (active: boolean) => {
  const classIconMobContainer = cn(commonClassesItems, {
    ["bg-surface-900 text-surface-100"]: active,
  });
  return classIconMobContainer;
};

export const getPositionSliderContainerText = (potition: "center-top" | "center-middle" | "center-bottom" | "left-top" | "left-middle" | "left-bottom" | "right-top" | "right-middle" | "right-bottom") => {
  const commonClasses = cn(
    "absolute py-12 px-32",
    "top-0  left-0",
    "w-full h-full",
    "hidden tablet:flex "
  );
  const positions: {
    "center-top": string;
    "center-middle": string;
    "center-bottom": string;
    "left-top": string;
    "left-middle": string;
    "left-bottom": string;
    "right-top": string;
    "right-middle": string;
    "right-bottom": string;
  } = {
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

  const classesBannerImg = cn(commonClasses, [positions[potition]]);
  return classesBannerImg;
};
