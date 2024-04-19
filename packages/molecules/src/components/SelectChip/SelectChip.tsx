import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import cn from "classnames";
import React from "react";

interface SelectChipType {
    iconActive?: React.ReactNode;
    iconInactive?: React.ReactNode;
    active?: boolean;
    className?: string;
    label?: string;
}

const SelectChip: React.FC = (props: SelectChipType) => {

    const { iconActive, iconInactive, active = true, className = "", label } = props;

    const [activeChip, setActiveChip] = useState<boolean>(active)

    return (
        <RadioGroup>
            <RadioGroup.Option value={activeChip} onClick={() => setActiveChip(!activeChip)} className={cn("flex bg-surface-100 h-9 cursor-pointer border-2 rounded py-1.5 pr-1.5", className)}>
                <>
                    <div className="!ms-2 !me-2 my-auto">
                        {activeChip ? iconActive : iconInactive}
                    </div>
                    <span className="bg-surface-100 font-texts">{label}</span>
                </>
            </RadioGroup.Option>
        </RadioGroup>
    )
};

export default SelectChip;


