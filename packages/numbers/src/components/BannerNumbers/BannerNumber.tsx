import { Aspect } from "@lottuseducation/design_system";
import Numbers from "../Numbers";
import { Heading } from "@lottuseducation/design_system";
import cn from "classnames";
const classBannerImage = cn("w-full h-full object-cover object-center");
const bannerImageStyles: any = {
  dark: { filter: "brightness(0.5)" },
  light: { opacity: "0.5" },
};
const defaultValues = {
  overlay: "",
  contentVariant: "dark",
};

const BannerNumber = (props: any) => {
  const {
    imageUrl,
    overlay = defaultValues.overlay,
    title,
    description,
    numbers,
    contentVariant = defaultValues.contentVariant,
  } = props;
  const fontColors = cn({
    ["text-neutral-100"]: contentVariant === "light",
    ["text-neutral-800"]: contentVariant === "dark",
  });
  const ratio = (numbersCount: any) => {
    let aspect = "";
    if (numbersCount > 2) {
      aspect = "1/2";
    } else aspect = "3/4";
    return aspect;
  };
  return (
    <div className="w-full">
      <div className="hidden lg:flex">
        <Aspect ratio="7/2">
          <img
            className={classBannerImage}
            style={bannerImageStyles?.[overlay]}
            src={imageUrl}
            alt="image Banner"
          />
          <div className="w-full h-full absolute top-0 left-0 flex flex-col p-10 ">
            <div className="pb-2 w-1/2">
              <Heading
                title={title}
                type="h-3"
                font="secondary"
                className={fontColors}
              />
            </div>
            <div className="w-1/2 font-secondary">
              <span className={fontColors}>{description}</span>
            </div>
            <div className="grid grid-cols-4 gap-6 pt-10">
              {numbers.map((number: any, numberindex: any) => (
                <Numbers
                  number={number?.number}
                  title={number?.title}
                  iconName={number?.iconName}
                  description={number?.description}
                  variant={number?.variant}
                  color={number?.color}
                  theme={contentVariant}
                  className={number?.className}
                  key={numberindex}
                />
              ))}
            </div>
          </div>
        </Aspect>
      </div>
      <div className="hidden md:flex lg:hidden">
        <Aspect ratio="2/1">
          <img
            className={classBannerImage}
            style={bannerImageStyles?.[overlay]}
            src={imageUrl}
            alt="image Banner"
          />
          <div className="w-full h-full absolute top-0 left-0 flex flex-col p-10 ">
            <div className="pb-2 w-4/5">
              <Heading
                title={title}
                type="h-3"
                font="secondary"
                className={fontColors}
              />
            </div>
            <div className="w-4/5 font-secondary  md:text-base">
              <span className={fontColors}>{description}</span>
            </div>
            <div className="grid grid-cols-4 gap-6 pt-6">
              {numbers.map((number: any, numberindex: any) => (
                <Numbers
                  number={number?.number}
                  title={number?.title}
                  iconName={number?.iconName}
                  description={number?.description}
                  variant={number?.variant}
                  color={number?.color}
                  theme={contentVariant}
                  className={number?.className}
                  key={numberindex}
                />
              ))}
            </div>
          </div>
        </Aspect>
      </div>
      <div className="flex md:hidden ">
        <Aspect ratio={ratio(numbers.length)}>
          <img
            className={classBannerImage}
            style={bannerImageStyles?.[overlay]}
            src={imageUrl}
            alt="image Banner"
          />
          <div className="w-full h-full absolute top-0 left-0 flex flex-col p-6 ">
            <div className="pb-2">
              <Heading
                title={title}
                type="h-3"
                font="secondary"
                className={fontColors}
              />
            </div>
            <div
              className={cn("font-secondary", {
                ["text-xs min-[380px]:text-sm"]: numbers.length < 4,
                ["text-sm"]: numbers.length > 2,
              })}
            >
              <span className={fontColors}>{description}</span>
            </div>
            <div
              className={cn("flex flex-col pt-6 space-y-4", {
                [" min-[380px]:space-y-6"]: numbers.length < 3,
              })}
            >
              {numbers.map((number: any, numberindex: any) => (
                <Numbers
                  number={number?.number}
                  title={number?.title}
                  iconName={number?.iconName}
                  description={number?.description}
                  variant={number?.variant}
                  color={number?.color}
                  theme={contentVariant}
                  className={number?.className}
                  key={numberindex}
                />
              ))}
            </div>
          </div>
        </Aspect>
      </div>
    </div>
  );
};
export default BannerNumber;
