import React from "react";
import cn from "classnames";

type BrandProps = {
  children?: React.ReactNode;
}

type NavbarComposition = {
  Brand: React.FC<BrandProps>
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
}

const Navbar: React.FC<NavbarProps> & NavbarComposition = (props) => {
  const {
    children,
    className = "bg-white",
    fixedToTop,
    shadow = false,
  } = props;
  const classes = cn(
    "py-4 md:py-8",
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
