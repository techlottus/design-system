import React from "react";
import cn from "classnames";

type BrandProps = {
  children?: React.ReactNode;
}

type NavbarComposition = {
  Brand: React.FC<BrandProps>
}

const sizes = [
  "sm",
  "lg"
] as const;

type Size = (typeof sizes)[number];

const NavbarSizes: {
  [key: string]: string
} = {
  sm: "py-2",
  lg: "py-4 md:py-8",
}

const Brand: React.FC<BrandProps> = (props) => {
  const {
    children
  } = props;

  return <>{children}</>;
}

type NavbarProps = {
  children: React.ReactNode;
  className?: string;
  fixedToTop?: boolean;
  shadow?: boolean;
  size?: Size;
}

const Navbar: React.FC<NavbarProps> & NavbarComposition = (props) => {
  const {
    children,
    className = "bg-white",
    fixedToTop,
    shadow = false,
    size = "lg"
  } = props;
  // validate size
  const validSize = sizes.includes(size) ? size : "lg";
  const classes = cn(
    NavbarSizes[validSize],
    className,
    {
      ["z-50 fixed fixed top-0 left-0 right-0 min-w-full"]: fixedToTop,
      ["shadow"]: shadow,
    },
  );
  return (
    <header className={classes}>
      <div className="px-4 flex items-center justify-between container mx-auto max-w-screen-xl">
        {children}
      </div>
    </header>
  );
}

Navbar.Brand = Brand;

export default Navbar;
