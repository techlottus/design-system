import {
  TimeIcon,
  CalendarIcon,
  UpdateIcon,
 } from "@bedu-tmp/iconography/icons/esm/index";
 
 export default function MathIcons() {
   return (
     <div className="my-10 grid grid-cols-6 gap-10">
       <div className="flex flex-col items-center space-y-2">
         <TimeIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">TimeIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <CalendarIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">CalendarIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <UpdateIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">UpdateIcon</span>
       </div>
     </div>
   );
 }
 