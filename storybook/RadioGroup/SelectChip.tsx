import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import React from "react";
import Icon from '../components/Icon/Icon';
import RadioButtonActive from '../../assets/icons/RadioButtonActive';
import RadioButtonDefault from '../../assets/icons/RadioButtonDefault';

const SelectChip = () => {
    let [selected, setSelected] = useState('startup')

    return (
        <div className="w-full px-1 grid grid-cols-12">
            <div className="col-span-5">
                <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Option value="startup" className="flex bg-surface-100 w-24 h-9 cursor-pointer border-2 border-black rounded py-1.5">
                        {({ checked }) => (
                            <>
                                {checked ?
                                    <RadioButtonActive size="16" fillColor="#18181B" className="!ms-2 !me-3 my-auto" />
                                    : <RadioButtonDefault size="16" fillColor="#18181B" className="!ms-2 !me-3 my-auto" />
                                }
                                <span className={checked ? 'bg-surface-100' : ''}>Label</span>
                            </>
                        )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="business" className="flex bg-surface-100 w-24 h-9 cursor-pointer border-2 border-info-700 rounded py-1.5 !my-3">
                        {({ checked }) => (
                            <>
                                {checked ?
                                    <RadioButtonActive size="16" fillColor="#2B897E" className="!ms-2 !me-3 my-auto" />
                                    : <RadioButtonDefault size="16" fillColor="#2B897E" className="!ms-2 !me-3 my-auto" />
                                }
                                <span className={checked ? 'bg-surface-100' : ''}>Label</span>
                            </>
                        )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="enterprise" className="flex bg-surface-100 w-24 h-9 cursor-pointer border-2 border-error-600 rounded py-1.5">
                        {({ checked }) => (
                            <>
                                {checked ?
                                    <RadioButtonActive size="16" fillColor="#0033FF" className="!ms-2 !me-3  my-auto" />
                                    : <RadioButtonDefault size="16" fillColor="#0033FF" className="!ms-2 !me-3 my-auto" />
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


