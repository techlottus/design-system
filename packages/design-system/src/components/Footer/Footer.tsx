import Button from "../Button";
import TextLink from "../TextLink";
import cn from "classnames";
import SocialMedia from "../SocialMedia";
import Icon from "../Icon";
import Accordion from "../Accordion";
import { myhref } from "../helpers/myrefHelper";

const linksTitleSection = cn(
  "font-principal font-bold lg:text-lg text-neutral-800 pb-6"
);
const textLinksClasses = cn("font-principal text-neutral-600 px-0 pb-4 pt-0");

const Footer = (props: any) => {
  const {
    logoUrl,
    newsletter,
    textLinks,
    links,
    contact,
    certificates,
    legal,
  } = props;
  return (
    <div id="Footer-container" className="lg:px-20 md:px-10 px-6">
      <div id="footer-desk-tab" className="md:flex hidden flex-col">
        <div
          id="footer-main"
          className="flex justify-between items-center py-10"
        >
          <div id="Logo" className="flex ">
            <img src={logoUrl} alt="logo-img" className="w-36 h-10" />
          </div>
          {newsletter ? (
            <div
              id="mail-input"
              className="flex flex-1 content-stretch font-principal"
            >
              <div
                id="subscribe-text"
                className="flex w-full items-center justify-end  pr-6 font-bold md:text-sm lg:text-base"
              >
                {newsletter.text}
              </div>
              <input
                type="text"
                placeholder={newsletter?.inputTxt}
                id="input-mail"
                name={newsletter?.inputName}
                className="flex bg-neutral-200  w-1/2 rounded-l-lg py-4 px-3 font-principal text-neutral-800"
              />

              <Button
                label={newsletter.btn.label}
                variant="primary"
                size="md"
                iconName={newsletter.btn?.iconName}
                className="rounded-l-none hidden lg:flex"
                onClick={newsletter.onClick}
              />
              <Button
                label={newsletter.btn.label}
                variant="primary"
                size="xsm"
                iconName={newsletter.btn?.iconName}
                className="rounded-l-none  lg:hidden"
                onClick={newsletter.onClick}
              />
            </div>
          ) : (
            ""
          )}
        </div>

        <div
          id="footer-main-textlinks"
          className="flex flex-row-reverse pb-6 space-x-2 space-x-reverse "
        >
          <TextLink
            {...textLinks}
            className="font-bold font-principal text-base "
          />
        </div>
        {links ? (
          <div
            id="links"
            className="border-t border-b border-neutral-400 flex justify-between py-10"
          >
            {links?.deskLinks.map((l: any, indx: any) => (
              <div className="flex flex-col" key={indx}>
                {l.map((link: any, index: any) => (
                  <div id="col1" className="flex flex-col pb-10" key={index}>
                    <div id="title-section1" className={linksTitleSection}>
                      {link?.titleSection}
                    </div>
                    {link?.linktext?.map((lt: any, indxLt: any) => (
                      <TextLink
                        {...lt}
                        key={indxLt}
                        className={textLinksClasses}
                      />
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        <div
          id="contact"
          className="flex lg:justify-between py-10 lg:items-center md:flex-col lg:flex-row"
        >
          <div className="flex lg:items-center md:flex-col lg:flex-row">
            <div className="font-principal font-bold lg:text-lg">
              {contact?.text}
            </div>
            <div id="socialmedia" className="flex">
              <SocialMedia
                className=" flex py-0 md:py-4 lg:items-center md:px-0 lg:px-6 space-x-8  md:justify-start lg:justify-center "
                imgClassName="h-5"
                socialMedia={contact?.socialMedia}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex lg:justify-end font-principal font-bold">
              {contact?.phoneText}
            </div>
            <div className="flex items-start space-x-2 pt-2">
              <span>
                <Icon {...contact?.icon} />
              </span>
              <span className="font-primary text-neutral-600">
                {contact?.phoneNumber}
              </span>
            </div>
          </div>
        </div>
        <div
          id="certificates"
          className="flex flex-col py-10 border-t border-b border-neutral-400"
        >
          <div className="w-full flex justify-start pb-4 font-principal lg:text-lg font-bold">
            {certificates?.title}
          </div>
          <div className="flex space-x-10">
            {certificates?.logos.map((logo: any, index: any) => (
              <img
                src={logo?.url}
                alt={logo?.alt}
                className={cn("h-16", {
                  ["cursor-pointer"]: logo?.link,
                })}
                key={index}
                onClick={(e) => {
                  logo.link ? myhref(logo?.link) : e.stopPropagation();
                }}
              />
            ))}
          </div>
        </div>
        <div id="legal" className="flex justify-between py-6 items-center">
          <div className="font-principal flex space-x-1">
            <span className="text-neutral-700">{legal?.title}</span>
            <span className="font-bold text-neutral-800">{legal?.text}</span>
          </div>
          <div className="text-neutral-700 font-principal">
            <TextLink {...legal?.linkText} />
          </div>
        </div>
      </div>
      <div id="footer-mobile" className="md:hidden flex flex-col">
        <div id="Logo" className="flex justify-between items-end pb-6">
          <img src={logoUrl} alt="logo-img" className="w-36 h-10" />
          <div
            id="footer-main-textlinks"
            className="flex space-x-2 justify-end items-end "
          >
            <TextLink
              {...textLinks}
              className="font-bold font-principal text-base"
            />
          </div>
        </div>
        <div>
          <Accordion itemsData={links.mobileLinks} expandAll={true} />
        </div>
        <div id="contact" className="flex  py-10 flex-col ">
          <div className="flex flex-col ">
            <div className="font-principal font-bold ">{contact?.text}</div>
            <div id="socialmedia" className="flex justify-start">
              <SocialMedia
                className="  flex  py-4  sm:px-0 space-x-8sm:justify-start  "
                svgClass="h-5"
                socialMedia={contact?.socialMedia}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex font-principal font-bold">
              {contact?.phoneText}
            </div>
            <div className="flex items-start space-x-2 ">
              <span>
                <Icon {...contact?.icon} />
              </span>
              <span className="font-primary text-neutral-600">
                {contact?.phoneNumber}
              </span>
            </div>
          </div>
        </div>
        <div
          id="certificates"
          className="flex flex-col py-5 border-t border-b border-neutral-400"
        >
          <div className="w-full flex justify-start pb-4 font-principal text-lg font-bold">
            {certificates?.title}
          </div>
          <div className="flex space-x-10 flex-wrap">
            {certificates?.logos.map((logo: any, index: any) => (
              <img
                src={logo?.url}
                alt={logo?.alt}
                className={cn("h-16", {
                  ["cursor-pointer"]: logo?.link,
                })}
                key={index}
                onClick={(e) => {
                  logo.link ? myhref(logo?.link) : e.stopPropagation();
                }}
              />
            ))}
          </div>
        </div>
        <div id="legal" className="flex flex-col space-y-4 py-6">
          <div className="font-principal flex space-x-1">
            <span className="text-neutral-700">{legal?.title}</span>
            <span className="font-bold text-neutral-800">{legal?.text}</span>
          </div>
          <div className="text-neutral-700 font-principal">
            <TextLink {...legal?.linkText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
