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

    const { iconActive, iconInactive, active = false, className = "", label } = props;

    return (
        <div className={cn("flex bg-surface-100 h-9 cursor-pointer border-2 rounded py-1.5 pr-1.5", className)}>
            <div className="!ms-2 !me-2 my-auto">
                {active ? iconActive : iconInactive}
            </div>
            <span className="font-texts">{label}</span>
        </div>
    )
};

export default SelectChip;


