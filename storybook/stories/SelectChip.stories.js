import React from "react";
import SelectChip from "../components/SelectChip"
import RadioButtonActive from './../../storybook/components/RadioButtonActive/RadioButtonActive'
import RadioButtonDefault from './../../storybook/components/RadioButtonDefault/RadioButtonDefault'
import mdx from './../../storybook/components/SelectChip.mdx'
import { RadioGroup } from "@headlessui/react"

/** Select Chip give you the same functionality as native HTML radio inputs, without any of the styling. They're perfect for building out custom UIs for selectors.*/
export default {
    title: "Molecules/SelectChip",
    component: SelectChip,
    tags: ["autodocs"],
    parameters: {
        docs: {
            page: mdx,
        },
    },
    args: {
        className: "",
        size: "md"
    }

};

const standar = () => (
    <div className="grid gap-3 w-1">
        <RadioGroup>
            <SelectChip
                iconActive={<RadioButtonActive />}
                iconInactive={<RadioButtonDefault />}
                className="border-success-500"
                active={true}
                label="Label"
            />
        </RadioGroup>
    </div>
);

const templateGroup = () => (
    <RadioGroup className="grid gap-3 w-1">
        <SelectChip
            iconActive={<RadioButtonActive />}
            iconInactive={<RadioButtonDefault />}
            className="border-success-500"
            active={true}
            label="LabelOne"
        />
        <SelectChip
            iconActive={<RadioButtonActive />}
            iconInactive={<RadioButtonDefault />}
            className="border-error-500"
            active={false}
            label="LabelTwo"
        />
        <SelectChip
            iconActive={<RadioButtonActive />}
            iconInactive={<RadioButtonDefault />}
            className="border-secondary-500"
            active={false}
            label="LabelThree"
        />
    </RadioGroup>
);

const Standar = standar.bind({});
const SelectChips = templateGroup.bind({});

export { Standar, SelectChips };
