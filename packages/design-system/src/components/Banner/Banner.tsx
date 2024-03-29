import Aspect from "../Aspect";
import BannerContent from "../BannerContent";
import cn from "classnames";
const bannerImageStyles: any = {
  dark: { filter: "brightness(0.5)" },
  light: { opacity: "0.5" },
};
const defaultValues: any = {
  ratio: "2/1",
  overlay: "normal",
  contentVariant: "dark",
  size: "md",
  position: "left-top",
  className: "",
};
const classBannerImage: any = cn("w-full h-full object-cover object-center");

const Banner = (props: any) => {
  const {
    imageUrl,
    ratio = defaultValues.ratio,
    overlay = defaultValues.overlay,
    title,
    text,
    contentVariant = defaultValues.contentVariant,
    btn,
    size = defaultValues.size,
    position = defaultValues.position,
    className = defaultValues.className,
  } = props;
  return (
    <div className={className}>
      <div className="hidden xl:block lg:block md:block  ">
        <Aspect ratio={ratio}>
          <img
            className={classBannerImage}
            style={bannerImageStyles?.[overlay]}
            src={imageUrl}
            alt="image Banner"
          />
          <BannerContent
            title={title}
            text={text}
            btn={{
              id: btn.id,
              label: btn.label,
              variant: contentVariant ? "outlined" : "primary",
              iconName: btn?.iconName,
            }}
            contentVariant={contentVariant}
            size={size}
            position={position}
            mobile={false}
          />
        </Aspect>
      </div>
      <div className="lg:hidden md:hidden flex flex-col space-x-1 ">
        <div className="w-full h-full flex relative ">
          <Aspect ratio="4/3">
            <img
              src={imageUrl}
              className="w-full h-full object-cover object-center"
              alt="img-banner-mobile"
            />
          </Aspect>
        </div>
        <div>
          <BannerContent
            title={title}
            text={text}
            contentVariant="dark"
            btn={{
              id: btn?.id,
              label: btn?.label,
              variant: "primary",
              iconName: btn?.iconName,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
