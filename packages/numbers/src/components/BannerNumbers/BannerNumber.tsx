import { Aspect } from "@lottuseducation/design_system";
import Numbers from "../Numbers";
import { Heading } from "@lottuseducation/design_system";
import cn from "classnames";
import { BannerNumberType } from "../types/BannerNumber.types";
import { NumbersType } from "../types/Numbers.types";

const BannerNumber: React.FC<BannerNumberType> = (props: BannerNumberType) => {
  const { imageUrl, overlay = "", title, content, numbers } = props;
  return (
    <div className="w-full">
      <div className="hidden lg:flex">
        <Aspect ratio="7/2">
          <img
            className={cn("w-full h-full object-cover object-center", {
              ["opacity-50"]: overlay === "light",
              ["brightness-50"]: overlay === "dark",
            })}
            src={imageUrl}
            alt="image Banner"
          />
          <div className="w-full h-full absolute top-0 left-0 flex flex-col p-10 ">
            <div className="pb-2 w-1/2 leading-5">
              <Heading title={title} type="h-3" font="secondary" />
            </div>
            <div className="w-1/2 font-secondary leading-5">
              <span>{content}</span>
            </div>
            <ul className="grid grid-cols-4 gap-6 pt-6">
              {numbers.map((number: NumbersType, numberindex: number) => (
                <li key={numberindex}>
                  <Numbers {...number} />
                </li>
              ))}
            </ul>
          </div>
        </Aspect>
      </div>
      <div className="hidden md:flex lg:hidden">
        <Aspect ratio="2/1">
          <img
            className={cn("w-full h-full object-cover object-center", {
              ["opacity-50"]: overlay === "light",
              ["brightness-50"]: overlay === "dark",
            })}
            src={imageUrl}
            alt="image Banner"
          />
          <div className="w-full h-full absolute top-0 left-0 flex flex-col p-10 ">
            <div className="pb-2 w-4/5 leading-5">
              <Heading title={title} type="h-3" font="secondary" />
            </div>
            <div className="w-4/5 font-secondary  md:text-base leading-5">
              <span>{content}</span>
            </div>
            <ul className="grid grid-cols-4 gap-6 pt-6">
              {numbers.map((number: NumbersType, numberindex: number) => (
                <li key={numberindex}>
                  <Numbers {...number} />
                </li>
              ))}
            </ul>
          </div>
        </Aspect>
      </div>
      <div className="flex md:hidden ">
        <Aspect ratio="1/2">
          <img
            className={cn("w-full h-full object-cover object-center", {
              ["opacity-50"]: overlay === "light",
              ["brightness-50"]: overlay === "dark",
            })}
            src={imageUrl}
            alt="image Banner"
          />
          <div className="w-full h-full absolute top-0 left-0 flex flex-col p-6 ">
            <div className="pb-2 leading-5">
              <Heading title={title} type="h-3" font="secondary" />
            </div>
            <div className={cn("font-secondary leading-5")}>
              <span>{content}</span>
            </div>
            <ul className={cn("flex flex-col pt-6 gap-4 md:gap-6")}>
              {numbers.map((number: NumbersType, numberindex: number) => (
                <li key={numberindex}>
                  <Numbers {...number} />
                </li>
              ))}
            </ul>
          </div>
        </Aspect>
      </div>
    </div>
  );
};
export default BannerNumber;
