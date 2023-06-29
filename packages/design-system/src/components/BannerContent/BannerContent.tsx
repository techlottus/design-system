import cn from "classnames";
import Heading from "../Heading";
import Button from "../Button";
import {
  getPositionContainerText,
  getClassBannerPositionButton,
} from "../helpers/classesHelper";
import { getTextCount } from "../helpers/textHelper";
import Icon from "../Icon/Icon";

const BannerContent = (props: any) => {
  const {
    title,
    text,
    btn,
    label,
    iconName,
    contentVariant = "dark",
    size = "lg",
    position = "left-top",
    className = "",
  } = props;
  const textColor = cn("pb-4 font-secondary", {
    ["text-neutral-100"]: contentVariant === "light",
    ["text-neutral-800"]: !contentVariant || contentVariant === "dark",
  });
  return (
    <div className={className}>
      <div id="banner-content" className={getPositionContainerText(position)}>
        <div
          style={{
            maxWidth:
              size === "lg" ? "600px" : size === "md" ? "450px" : "410px",
          }}
        >
          {title ? (
            <div className={textColor}>
              <Heading
                title={getTextCount(title, 53)}
                type="h-3"
                font="secondary"
              />
            </div>
          ) : (
            ""
          )}
          {text ? (
            <div className={textColor}>
              {/* <span>{getTextCount(text, 132)}</span> */}
              <span dangerouslySetInnerHTML={{ __html: text }} />
            </div>
          ) : (
            ""
          )}
          {btn ? (
            <div className={getClassBannerPositionButton(position)}>
              <Button
                id={btn?.id}
                variant={
                  contentVariant === "light" ? "outlined-negative" : "primary"
                }
                size={size === "lg" ? "md" : size === "md" ? "sm" : "xsm"}
                {...btn}
              >
                <span>
                  {label ? label : ""}
                  {iconName ? <Icon iconName={iconName} /> : ""}
                </span>
              </Button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        id="banner-content-mobile"
        className="w-full h-full flex flex-col md:hidden "
      >
        <div className="py-4 text-neutral-800">
          <Heading title={title} type="h-3" font="secondary" />
        </div>
        <div className="pb-4 text-neutral-800 font-secondary">
          <span dangerouslySetInnerHTML={{ __html: text }} />
        </div>
        {btn ? (
          <div className="pb-4 font-secondary">
            <Button
              id={btn?.id}
              variant="primary"
              size="xsm"
              className="min-w-full flex justify-center"
              {...btn}
            >
              <span>
                {label ? label : ""}
                {iconName ? <Icon iconName={iconName} /> : ""}
              </span>
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BannerContent;
