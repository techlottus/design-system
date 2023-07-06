import { AspectType, PaddingsType } from "../Types/Aspect.types";
import { calculateAspectRatioPercentage } from "../helpers/calculateAspectPer";

const defaultRatioPercentage: string = "50%";
const fractionRegex: RegExp = /([1-9][0-9]*(.[0-9]*)?)\/[1-9][0-9]*(.[0-9]*)?/g;

const Aspect: React.FC<AspectType> = (props: AspectType) => {
  const { children, ratio = "1/2" } = props;

  const aspectRatioPercentage: string = calculateAspectRatioPercentage(
    ratio,
    fractionRegex,
    defaultRatioPercentage
  );

  const paddingStyles: PaddingsType = {
    paddingTop: aspectRatioPercentage,
  };
  return (
    <div style={paddingStyles} className="relative w-full h-0">
      <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Aspect;
