import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import React from "react";
import Icon from '../components/Icon/Icon';

const SelectChip = () => {
 let [plan, setPlan] = useState('startup')

 return (
  <div className="w-full px-1 grid grid-cols-12">
   <div className="col-span-5">
    <RadioGroup value={plan} onChange={setPlan}>
     <RadioGroup.Option value="startup" className="bg-surface-100 w-24 h-9	border-2 border-black rounded py-1.5">
      {({ checked }) => (
       <>
        {checked ?
         <Icon iconName="adjust" className="!font-icons-solid text-base !ms-2 !me-3 text-dark" />
         : <Icon iconName="radio_button_unchecked" className="!font-icons-solid text-base !ms-2 !me-3 text-surface-400" />
        }
        <span className={checked ? 'bg-surface-100' : ''}>Label</span>
       </>
      )}
     </RadioGroup.Option>
     <RadioGroup.Option value="business" className="bg-surface-100 w-24 h-9 border-2 border-info-700 rounded py-1.5 !my-3">
      {({ checked }) => (
       <>
        {checked ?
         <Icon iconName="adjust" className="!font-icons-solid text-base !ms-2 !me-3 text-info-700" />
         : <Icon iconName="radio_button_unchecked" className="!font-icons-solid text-base !ms-2 !me-3 text-surface-400" />
        }
        <span className={checked ? 'bg-surface-100' : ''}>Label</span>
       </>
      )}
     </RadioGroup.Option>
     <RadioGroup.Option value="enterprise" className="bg-surface-100 w-24 h-9 border-2 border-error-600 rounded py-1.5">
      {({ checked }) => (
       <>
        {checked ?
         <Icon iconName="adjust" className="!font-icons-solid text-base !ms-2 !me-3 text-error-600" />
         : <Icon iconName="radio_button_unchecked" className="!font-icons-solid text-base !ms-2 !me-3 text-surface-400" />
        }
        <span className={checked ? 'bg-surface-100' : ''}>Label</span>
       </>
      )}
     </RadioGroup.Option>
    </RadioGroup>
   </div>
  </div>
 )
};

export default SelectChip;


