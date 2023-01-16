import {
  EmployersIcon,
  UserStarIcon,
  AvatarHappyIcon,
  HandOkIcon,
  UserOnlineIcon,
  WebsiteLoginIcon,
} from "@exponentialeducation/iconography/icons/esm/index";

export default function PeopleIcons() {
  return (
    <div className="my-10 grid grid-cols-6 gap-10">
      <div className="flex flex-col items-center space-y-2">
        <EmployersIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">EmployersIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <UserStarIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">UserStarIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <AvatarHappyIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">AvatarHappyIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <HandOkIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">HandOkIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <UserOnlineIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">UserOnlineIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <WebsiteLoginIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">WebsiteLoginIcon</span>
      </div>
    </div>
  );
}
