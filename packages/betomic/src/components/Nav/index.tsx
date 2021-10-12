import React from "react";
import cn from "classnames";

type NavComposition = {
  Item: React.FC<ItemProps>
}

type ItemProps = {
  children: React.ReactNode;
}

const Item: React.FC<ItemProps> = (props) => {
  const {
    children,
  } = props;

  return (
    <li className="p-0 m-0">{children}</li>
  );
}

const alignments = [
  "center",
  "left",
  "right"
] as const;

type Alignment = (typeof alignments)[number];

const NavAlignments: {
  [key: string]: string
} = {
  center: "justify-center",
  left: "justify-start",
  right: "justify-end",
}

type NavProps = {
  children: React.ReactNode;
  className?: string;
  vertical?: boolean;
  align?: Alignment;
}

const Nav: React.FC<NavProps> & NavComposition = (props) => {
  const {
    children,
    className,
    vertical = false,
    align = "left",
  } = props;

  // validate alignment
  const validAlign = alignments.includes(align) ? align : "left";

  const navigationClasses = cn(
    "list-none",
    "p-0 m-0",
    "flex",
    {
      ["flex-col"]: vertical,
      ["items-center"]: vertical && align === "center",
      ["items-end"]: vertical && align === "right",
      ["items-start"]: vertical && align === "left",
    },
    NavAlignments[validAlign]
  )

  return (
    <nav className={className}>
      <ul className={navigationClasses}>
        {children}
      </ul>
    </nav>
  )
}

Nav.Item = Item;

export default Nav;
