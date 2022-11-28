import {
  LaptopIcon,
  SettingsIcon,
  SitemapIcon,
  KebabIcon,
  MeatballIcon,
  BarcodeIcon,
  SaveIcon,
  UnionIcon,
  SearchIcon,
  PristineIcon,
  ProgressIcon,
} from "@bedu-tmp/iconography/icons/esm/index";

export default function StatusIcons() {
  return (
    <div className="my-10 grid grid-cols-6 gap-10">
      <div className="flex flex-col items-center space-y-2">
        <LaptopIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">LaptopIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <SettingsIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">SettingsIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <SitemapIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">SitemapIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <KebabIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">KebabIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <MeatballIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">MeatballIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <BarcodeIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">BarcodeIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <SaveIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">SaveIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <UnionIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">UnionIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <SearchIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">SearchIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <PristineIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">PristineIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <ProgressIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">ProgressIcon</span>
      </div>
    </div>
  );
}
