import {
  LockIcon,
  QuestionIcon,
  ErrorAlertIcon,
  AlertIcon,
  InfoIcon,
  NewsIcon,
  QuizIcon,
  CircleCheckIcon,
  ErrorIcon,
  CheckIcon,
  CloseIcon,
  HelperIcon,
  EyeIcon,
  StatusIcon,
} from "@exponentialeducation/iconography/icons/esm/index";

export default function StatusIcons() {
  return (
    <div className="my-10 grid grid-cols-6 gap-10">
      <div className="flex flex-col items-center space-y-2">
        <LockIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">LockIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <QuestionIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">QuestionIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <ErrorAlertIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">ErrorAlertIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <AlertIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">AlertIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <InfoIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">InfoIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <NewsIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">NewsIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <QuizIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">QuizIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <CircleCheckIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">CircleCheckIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <ErrorIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">ErrorIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <CheckIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">CheckIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <CloseIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">CloseIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <HelperIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">HelperIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <EyeIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">EyeIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <StatusIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">StatusIcon</span>
      </div>
    </div>
  );
}
