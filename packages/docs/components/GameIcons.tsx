import {
 TargetIcon,
 TrophyIcon,
 CrownIcon,
 StarIcon,
 StarFillIcon,
 StarSquareIcon,
} from "@exponentialeducation/iconography/icons/esm/index";

export default function GameIcons() {
  return (
    <div className="my-10 grid grid-cols-6 gap-10">
      <div className="flex flex-col items-center space-y-2">
        <TargetIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">TargetIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <TrophyIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">TrophyIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <CrownIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">CrownIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <StarIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">StarIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <StarFillIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">StarFillIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <StarSquareIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">StarSquareIcon</span>
      </div>
    </div>
  );
}
