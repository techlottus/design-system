import {
  PlayIcon,
  NoSoundIcon,
  SoundIcon,
  ImgPlaceholderIcon,
  ImageIcon,
  ImgPlaceholderRectIcon,
  PdfIcon,
  CloudUploadIcon,
  Columns1Icon,
  Columns2Icon,
  Columns3Icon,
  Columns4Icon,
  FilterIcon,
  LinkIcon,
 } from "@bedu-tmp/iconography/icons/esm/index";
 
 export default function MediaIcons() {
   return (
     <div className="my-10 grid grid-cols-6 gap-10">
       <div className="flex flex-col items-center space-y-2">
         <PlayIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">PlayIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <NoSoundIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">NoSoundIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <SoundIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">SoundIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <ImgPlaceholderIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">ImgPlaceholderIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <ImageIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">ImageIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <ImgPlaceholderRectIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">ImgPlaceholderRectIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <PdfIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">PdfIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <CloudUploadIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">CloudUploadIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <Columns1Icon className="w-8 h-8" />
         <span className="text-xs text-gray-600">Columns1Icon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <Columns2Icon className="w-8 h-8" />
         <span className="text-xs text-gray-600">Columns2Icon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <Columns3Icon className="w-8 h-8" />
         <span className="text-xs text-gray-600">Columns3Icon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <Columns4Icon className="w-8 h-8" />
         <span className="text-xs text-gray-600">Columns4Icon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <FilterIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">FilterIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <LinkIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">LinkIcon</span>
       </div>
     </div>
   );
 }
 