import {
  BookIcon,
  DiplomaIcon,
  GraduationIcon,
  BookmarkIcon,
  BookOpenIcon,
  CheckListIcon,
  CheckedFileIcon,
  InstructionIcon,
  BuildingIcon,
  BasicLevelIcon,
  MediumLevelIcon,
  AdvancedLevelIcon,
} from "@exponentialeducation/iconography/icons/esm/index";

export default function EducationIcons() {
  return (
    <div className="my-10 grid grid-cols-6 gap-10">
      <div className="flex flex-col items-center space-y-2">
        <BookIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">BookIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <DiplomaIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">DiplomaIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <GraduationIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">GraduationIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <BookmarkIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">BookmarkIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <BookOpenIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">BookOpenIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <CheckListIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">CheckListIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <CheckedFileIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">CheckedFileIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <InstructionIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">InstructionIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <BuildingIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">BuildingIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <BasicLevelIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">BasicLevelIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <MediumLevelIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">MediumLevelIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <AdvancedLevelIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">AdvancedLevelIcon</span>
      </div>
    </div>
  )
}
