import {
  BellIcon,
  CommentaryIcon,
  CommunityIcon,
  LikeIcon,
  MailOutlineIcon,
  RecoverIcon,
  MailboxIcon,
  QuoteIcon,
} from "@exponentialeducation/iconography/icons/esm/index";

export default function CommunicationIcons() {
  return (
    <div className="my-10 grid grid-cols-6 gap-10">
      <div className="flex flex-col items-center space-y-2">
        <BellIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">BellIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <CommentaryIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">CommentaryIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <CommunityIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">CommunityIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <LikeIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">LikeIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <MailOutlineIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">MailOutlineIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <RecoverIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">RecoverIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <MailboxIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">MailboxIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <QuoteIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">QuoteIcon</span>
      </div>
    </div>
  );
}
