import {
  PlusIcon,
  MinusIcon,
  PlusCircleIcon,
  MinusCircleIcon,
  TableIcon,
 } from "@exponentialeducation/iconography/icons/esm/index";
 
 export default function MathIcons() {
   return (
     <div className="my-10 grid grid-cols-6 gap-10">
       <div className="flex flex-col items-center space-y-2">
         <PlusIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">PlusIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <MinusIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">MinusIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <PlusCircleIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">PlusCircleIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <MinusCircleIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">MinusCircleIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <TableIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">TableIcon</span>
       </div>
     </div>
   );
 }
 