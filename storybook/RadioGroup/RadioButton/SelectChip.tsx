import { useState } from 'react'
import React from "react";
import SelectChip from '../../components/SelectChip/SelectChip';
import { RadioGroup } from '@headlessui/react';

const SelectChips = () => {

    let [activeChip1, setActiveChip1] = useState(true)
    let [activeChip2, setActiveChip2] = useState(false)
    let [activeChip3, setActiveChip3] = useState(false)
    const [selected, setSelected] = useState()

    return (
        <div className="w-full px-1 grid grid-cols-12">
            <div className="col-span-5">
                <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Option value={activeChip1}>
                        <SelectChip className="border-success-400" radioColor="fill-success-400" active={activeChip1} />
                    </RadioGroup.Option>
                    <RadioGroup.Option value={activeChip2}>
                        <SelectChip className="border-secondary-600 my-3" radioColor="fill-secondary-600" active={activeChip2} />
                    </RadioGroup.Option>
                    <RadioGroup.Option value={activeChip3}>
                        <SelectChip className="border-warning-400" radioColor="fill-warning-400" active={activeChip3} />
                    </RadioGroup.Option>
                </RadioGroup>
            </div>
        </div>
    )
};

export default SelectChips;


