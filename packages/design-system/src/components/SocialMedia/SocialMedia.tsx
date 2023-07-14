import { myhref } from "../helpers/myrefHelper";
import cn from "classnames";
import SVGIcons from "../assets/SVGIcons";
import { SocialMediaConfig, socialMediaItem } from "../Types/SocialMedia.types";

const smClass = cn("cursor-pointer ");

const SocialMedia: React.FC<SocialMediaConfig> = (props: SocialMediaConfig) => {
  const { className = "", socialMedia } = props;
  return (
    <div
      className={cn(
        className,
        "flex px-10 py-10 w-full justify-center space-x-2 "
      )}
    >
      {socialMedia?.map((sm: socialMediaItem, index: number) => (
        <div
          className={cn(smClass)}
          id={sm?.alt}
          onClick={() => {
            myhref(sm?.link);
          }}
          key={index}
        >
          <SVGIcons name={sm?.socialName} />
        </div>
      ))}
    </div>
  );
};
export default SocialMedia;
