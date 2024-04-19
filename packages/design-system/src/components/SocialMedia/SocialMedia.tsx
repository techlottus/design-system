import { myhref } from "../helpers/myrefHelper";
import cn from "classnames";
import SVGIcons from "../assets/SVGIcons";

const smClass = cn("cursor-pointer ");

const SocialMedia = (props: any) => {
  const { className = "", socialMedia, svgClass = "" } = props;
  return (
    <div
      className={cn(
        className,
        "flex px-10 py-10 w-full justify-center space-x-2 "
      )}
    >
      {socialMedia?.map((sm: any, index: any) => (
        <div
          className={cn(smClass)}
          id={sm?.alt}
          onClick={() => {
            myhref(sm?.link);
          }}
          key={index}
        >
          <SVGIcons name={sm?.socialName} className={svgClass} />
        </div>
      ))}
    </div>
  );
};
export default SocialMedia;
