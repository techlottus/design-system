import Button from "../Button";
import TextLink from "../TextLink";
import cn from "classnames";
import SocialMedia from "../SocialMedia";
import Icon from "../Icon";
import Accordion from "../Accordion";
import { myhref } from "../helpers/myrefHelper";
import { TextLinkConfig } from "../Types/TextLink.types";
import { LogoType, LinkType, FooterType } from "../Types/Footer.types";
import React from "react";
const Footer: React.FC<FooterType> = (props: FooterType) => {
  const { logoUrl, newsletter, textLink, links, contact, certificates, legal } =
    props;
  return (
    <div id="Footer-container" className="w-d:px-20 w-t:px-10 px-6">
      <div id="footer-desk-tab" className="w-t:flex hidden flex-col">
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
              className="flex flex-1 content-stretch font-headings"
            >
              <div
                id="subscribe-text"
                className="flex w-full items-center justify-end  pr-6 font-bold w-t:text-sm w-d:text-base"
              >
                {newsletter.text}
              </div>
              <input
                type="text"
                placeholder={newsletter?.placeholder}
                id={newsletter?.id}
                name={newsletter?.name}
                className="flex bg-surface-200  w-1/2 rounded-l-lg py-4 px-3 font-headings text-surface-800"
              />

              <Button
                label={newsletter?.button.label}
                variant="primary"
                size="md"
                iconName={newsletter?.button?.iconName}
                className="rounded-l-none hidden w-d:flex"
                onClick={newsletter?.button?.onClick}
              />
              <Button
                label={newsletter?.button?.label}
                variant="primary"
                size="xsm"
                iconName={newsletter?.button?.iconName}
                className="rounded-l-none  w-d:hidden"
                onClick={newsletter?.button?.onClick}
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
            {...textLink}
            className="font-bold font-headings text-base "
          />
        </div>
        {links ? (
          <div
            id="links"
            className="border-t border-b border-surface-400 flex justify-between py-10"
          >
            {links?.deskLinks?.map((l: LinkType[], indx: number) => (
              <div className="flex flex-col" key={indx}>
                {l.map((link: LinkType, index: number) => (
                  <div id="col1" className="flex flex-col pb-10" key={index}>
                    <div
                      id="title-section1"
                      className="font-headings font-bold w-d:text-lg text-surface-800 pb-6"
                    >
                      {link?.titleSection}
                    </div>
                    {link?.linktext?.map(
                      (lt: TextLinkConfig, indxLt: number) => (
                        <TextLink
                          {...lt}
                          key={indxLt}
                          className="font-headings text-surface-600 px-0 pb-4 pt-0"
                        />
                      )
                    )}
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
          className="flex w-d:justify-between py-10 w-d:items-center w-t:flex-col w-d:flex-row"
        >
          <div className="flex w-d:items-center w-t:flex-col w-d:flex-row">
            <div className="font-headings font-bold w-d:text-lg">
              {contact?.text}
            </div>
            <div id="socialmedia" className="flex">
              <SocialMedia
                className=" flex py-0 h-5 w-t:py-4 w-d:items-center w-t:px-0 w-d:px-6 space-x-8  w-t:justify-start w-d:justify-center "
                {...contact?.socialMedia}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex w-d:justify-end font-headings font-bold">
              {contact?.phoneText}
            </div>
            <div className="flex items-start space-x-2 pt-2">
              <span>
                <Icon {...contact?.icon} />
              </span>
              <span className="font-primary text-surface-600">
                {contact?.phoneNumber}
              </span>
            </div>
          </div>
        </div>
        <div
          id="certificates"
          className="flex flex-col py-10 border-t border-b border-surface-400"
        >
          <div className="w-full flex justify-start pb-4 font-headings w-d:text-lg font-bold">
            {certificates?.title}
          </div>
          <div className="flex space-x-10">
            {certificates?.logos?.map((logo: LogoType, index: number) => (
              <img
                src={logo?.src}
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
          <div className="font-headings flex space-x-1">
            <span className="text-surface-700">{legal?.title}</span>
            <span className="font-bold text-surface-800">{legal?.text}</span>
          </div>
          <div className="text-surface-700 font-headings">
            <TextLink {...legal?.textLink} />
          </div>
        </div>
      </div>
      <div id="footer-mobile" className="w-t:hidden flex flex-col">
        <div id="Logo" className="flex justify-between items-end pb-6">
          <img src={logoUrl} alt="logo-img" className="w-36 h-10" />
          <div
            id="footer-main-textlinks"
            className="flex space-x-2 justify-end items-end "
          >
            <TextLink
              {...textLink}
              className="font-bold font-headings text-base"
            />
          </div>
        </div>
        <div>
          <Accordion items={links?.mobileLinks} expandAll={true} />
        </div>
        <div id="contact" className="flex  py-10 flex-col ">
          <div className="flex flex-col ">
            <div className="font-headings font-bold ">{contact?.text}</div>
            <div id="socialmedia" className="flex justify-start">
              <SocialMedia
                className=" h-5 flex  py-4  w-p:px-0 space-x-8w-p:justify-start  "
                {...contact?.socialMedia}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex font-headings font-bold">
              {contact?.phoneText}
            </div>
            <div className="flex items-start space-x-2 ">
              <span>
                <Icon {...contact?.icon} />
              </span>
              <span className="font-primary text-surface-600">
                {contact?.phoneNumber}
              </span>
            </div>
          </div>
        </div>
        <div
          id="certificates"
          className="flex flex-col py-5 border-t border-b border-surface-400"
        >
          <div className="w-full flex justify-start pb-4 font-headings text-lg font-bold">
            {certificates?.title}
          </div>
          <div className="flex space-x-10 flex-wrap">
            {certificates?.logos?.map((logo: LogoType, index: number) => (
              <img
                src={logo?.src}
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
          <div className="font-headings flex space-x-1">
            <span className="text-surface-700">{legal?.title}</span>
            <span className="font-bold text-surface-800">{legal?.text}</span>
          </div>
          <div className="text-surface-700 font-headings">
            <TextLink {...legal?.textLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
