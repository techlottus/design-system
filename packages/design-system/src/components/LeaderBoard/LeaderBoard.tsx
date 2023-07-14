import Heading from "../Heading";
import Extensions from "../Extensions";
import cn from "classnames";
import Button from "../Button";
import { getTextCount } from "../helpers/textHelper";
import {
  LeaderboardType,
  LeaderboardTypeVariants,
} from "../Types/Leaderboard.types";

const variants: LeaderboardTypeVariants = {
  light: "text-neutral-100",
  dark: "text-neutral-900",
};

const LeaderBoard: React.FC<LeaderboardType> = (props: LeaderboardType) => {
  const { imageUrl, title = "", variant = "dark", links, button } = props;
  return (
    <div
      className={cn(
        "w-full md:h-52 h-64 text-sm md:text-base relative overflow-hidden",
        [variants[variant]]
      )}
    >
      <img
        src={imageUrl}
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute top-0 left-0 p-10 md:px-20 md:py-12 w-full h-full flex flex-col ">
        <span className="pb-4">
          <Heading
            title={getTextCount(title, 61)}
            variant="h-4"
            font="principal"
          />
        </span>
        {button ? (
          <div>
            <span className="flex flex-col space-y-4 font-principal">
              <span>
                {" "}
                <Extensions {...links?.[0]} />
              </span>
              <span>
                <Button {...button} />
              </span>
            </span>
          </div>
        ) : (
          <div className="flex md:flex-row md:space-x-4 flex-col space-y-4 md:space-y-1">
            <span className="flex flex-col space-y-4 font-principal">
              <Extensions {...links?.[0]} />
              <Extensions {...links?.[1]} />
            </span>
            <span className="flex flex-col space-y-4 font-principal ">
              <Extensions {...links?.[2]} />
              <Extensions {...links?.[3]} />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default LeaderBoard;
