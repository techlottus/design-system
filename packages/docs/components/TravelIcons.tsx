import {
  LocationIcon,
  CarIcon,
  LongFlagIcon,
  FlagIcon,
  MapsIcon,
  PathIcon,
  BikeIcon,
  BusIcon,
  WalkIcon,
 } from "@bedu-tmp/iconography/icons/esm/index";
 
 export default function TravelIcons() {
   return (
     <div className="my-10 grid grid-cols-6 gap-10">
       <div className="flex flex-col items-center space-y-2">
         <LocationIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">LocationIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <CarIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">CarIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <LongFlagIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">LongFlagIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <FlagIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">FlagIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <MapsIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">MapsIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <PathIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">PathIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <BikeIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">BikeIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <BusIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">BusIcon</span>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <WalkIcon className="w-8 h-8" />
         <span className="text-xs text-gray-600">WalkIcon</span>
       </div>
     </div>
   );
 }
 