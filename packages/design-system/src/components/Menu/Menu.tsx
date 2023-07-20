import { useState } from "react";
import cn from "classnames";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { getClassItem, getclassSubMenu } from "../helpers/classesHelper";
import Lottie from "react-lottie-player";
import TextLink from "../TextLink";
import MenuMobile from "../MenuMobile";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import { menuAnimation } from "../assets/lotties/menu";
import { MenuElementType, MenuItemsTypes, MenuType } from "../Types/Menu.types";

const Menu: React.FC<MenuType> = (props: MenuType) => {
  const { data, languages = false, button } = props;
  //hooks
  const [submenu, setmenu] = useState<boolean>(true);
  const [submenuIn, setmenuIn] = useState<boolean>(false);
  const [submenuM, setmenuM] = useState<boolean>(true);
  const [index, setitem] = useState<number>(0);
  const [IconOpen, setIconOpen] = useState<boolean>(false);
  const [iconClose, setIconClose] = useState<boolean>(false);
  const scrollDirection = useScrollDirection();

  //function handlers
  const handleOnclickMenu = () => {
    if (IconOpen) {
      setIconOpen(false);
      setIconClose(true);
      setmenuM(true);
    } else {
      setIconClose(false);
      setIconOpen(true);
      setmenuM(false);
      setitem(0);
    }
  };
  //classes
  const classLanguages = cn(
    " flex relative flex-1 flex-start text-primary-500 font-bold font-principal",
    { ["invisible"]: !languages }
  );

  return (
    <div
      className={`sticky ${
        scrollDirection === "down" && !IconOpen ? "-top-40" : "top-0"
      } z-20 bg-white transition duration-100`}
      style={{ background: "#fff" }}
    >
      <header
        id="NavbarDesk"
        className="flex flex-1 hidden lg:flex p-1 h-14 lg:h-auto shadow-lg bg-white"
      >
        <div
          id="Logo"
          className="flex relative p-4 items-center justify-items-center border-r border-neutral-300"
        >
          <img className="w-36 h-10" src={data.logotype.src} alt="logo" />
        </div>
        <div className="flex flex-1 flex-col ">
          <div className="flex flex-row flex-1 w-full">
            <div
              id="Languages"
              className="flex flex-start flex-grow px-6 my-1 border-b border-neutral-300 h-6"
            >
              <div className={classLanguages}>
                <span className="border-r  border-neutral-300 pr-2  ">
                  <a>ES</a>
                </span>
                <span className="px-2 ">
                  <a>EN</a>
                </span>
              </div>
            </div>
            <div
              id="Options"
              className="flex border-b border-neutral-300 my-1 justify-items-end h-6"
            >
              <span className="flex flex-nowrap relative pr-7 text-neutral-500 font-principal">
                Accesos para :
              </span>
              <div className="flex flex-1 flex-end flex-nowrap pr-6 cursor-pointer justify-center text-primary-500 font-principal font-bold">
                <a>Egresados</a>
              </div>
              <div className="flex flex-1 flex-end flex-nowrap pr-6 cursor-pointer justify-center text-primary-500 font-principal font-bold">
                <a>Estudiantes</a>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-row w-full">
            <nav
              id="Menu"
              className="flex flex-grow relative px-6 items-center"
            >
              <ul className="flex space-x-5 whitespace-nowrap border-top border-neutral-300">
                {data.menus.map(
                  (element: MenuElementType, itemIndex: number) => {
                    if (element.items?.length) {
                      return (
                        <li
                          key={itemIndex}
                          className={getClassItem(true, element.active)}
                          onMouseEnter={(_) => {
                            setmenu(false);
                            setitem(itemIndex);
                          }}
                          onMouseLeave={(_) =>
                            submenuIn === false ? setmenu(false) : setmenu(true)
                          }
                        >
                          <TextLink
                            text={element.label}
                            href={element.route}
                            items={true}
                            active={element.active ? element.active : false}
                          />
                        </li>
                      );
                    } else {
                      return (
                        <li
                          key={itemIndex}
                          className={getClassItem(true, element.active)}
                        >
                          <TextLink
                            text={element.label}
                            items={false}
                            href={element.route}
                          />
                        </li>
                      );
                    }
                  }
                )}
              </ul>
            </nav>
            <div
              id="Search"
              className="flex justify-center cursor-pointer border-r border-l border-neutral-300 py-4 my-2 hidden"
            >
              <Icon iconName="search" />
            </div>
            <div className="flex items-start align-center justify-center text-center pr-6 font-bold text-sm">
              <Button
                label={button?.label}
                size="xsm"
                variant="primary"
                iconName={button?.iconName}
                onClick={button?.onClick}
              />
            </div>
          </div>
        </div>
      </header>
      {/* submenu */}
      <div
        id="SubMenu"
        className={getclassSubMenu(submenu)}
        onMouseEnter={(_) => {
          setmenuIn(true);
        }}
        onMouseLeave={(_) => {
          setmenuIn(false);
          setmenu(true);
        }}
      >
        {data?.menus[index]?.items?.map(
          (subitem: MenuItemsTypes, subitemIndex: number) => (
            <div
              key={subitemIndex}
              className=" border-r border-neutral-300 h-auto flex flex-row flex-grow flex-1 flex-nowrap flex-inline relative "
            >
              <div className={getClassItem(false, subitem.active)}>
                <TextLink
                  text={subitem.label}
                  items={false}
                  href={subitem.route}
                />
              </div>
            </div>
          )
        )}
      </div>

      <header
        id="NavbarMobile"
        className="flex absolute lg:hidden z-20 px-1 py-1 shadow top-0 w-full"
        style={{ background: "#fff" }}
      >
        <div id="menu" className="border-r-2 border-neutral-300  px-2">
          <div
            id="icon"
            className="py-4 px-2 w-12 h-12 flex items-center justify-center cursor-pointer"
            onClick={handleOnclickMenu}
          >
            <Lottie
              play={IconOpen || iconClose}
              loop={false}
              direction={iconClose ? -1 : 1}
              speed={2}
              animationData={menuAnimation}
              style={{ width: 40, height: 40 }}
            />
          </div>
        </div>
        <div
          id="Logo"
          className="flex relative w-full items-center justify-items-center justify-center"
        >
          <img src={data.logotype.src} alt="logo" className="w-22.5 h-10 " />
        </div>
        <div
          id="search"
          className="flex relative flex-end hidden border-l-2  border-neutral-300 px-2"
        >
          <div className="py-4 px-2 w-12 h-12 flex hidden items-center justify-center cursor-pointer ">
            <Icon iconName="search" />
          </div>
        </div>
      </header>
      <MenuMobile
        submenuM={submenuM}
        items={data?.menuMobile}
        button={button}
        socialMedia={data?.socialMedia}
        promolink1={data?.promolink1}
        promolink2={data?.promolink2}
      />
    </div>
  );
};

export default Menu;
