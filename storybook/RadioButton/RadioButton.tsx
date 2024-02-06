import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import React from "react";
import Icon from "../components/Icon";

const RadioButton = () => {
    const [selected, setSelected] = useState(true)

    return (
        <div className="w-full px-1 grid grid-cols-12">
            <div className="col-span-7 mx-auto w-96">
                <RadioGroup value={selected} onClick={() => setSelected(!selected)}>
                    <div className="space-y-2">
                        <RadioGroup.Option
                            value={true}
                            className="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.12)]">
                            <div className="flex w-full items-center justify-between">
                                <div className="flex items-center">
                                    <Icon iconName="school" className="!font-icons-solid !text-4xl text-primary-500 !me-6" />
                                    <div className="!grid !gap-3">
                                        <RadioGroup.Label
                                            as="p"
                                            className="!text-gray-900 !text-lg !font-bold !mb-0">
                                            Historial académico
                                        </RadioGroup.Label>
                                        <RadioGroup.Description
                                            as="span"
                                            className="text-gray-500 grid gap-3">
                                            <p className="!my-0 !text-sm">Vencimiento: 08-06-2022</p>
                                            <p className="!my-0 !text-base !font-bold !text-primary-500">$390.00</p>
                                            <p className="!my-0 !text-base !text-primary-500">Eliminar</p>
                                        </RadioGroup.Description>
                                    </div>
                                    {selected ?
                                        <Icon iconName="radio_button_unchecked" className="!font-icons-solid !text-4xl !me-3 !text-surface-400 !absolute !right-0 !top-1" />
                                        : <Icon iconName="radio_button_checked" className="!font-icons-solid !text-4xl !me-3 !text-surface-400 !absolute !right-0 !top-1" />
                                    }
                                </div>
                            </div>
                        </RadioGroup.Option>
                    </div>
                </RadioGroup>
            </div>
        </div>
    )
};

export default RadioButton;


