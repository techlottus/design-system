import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import React from "react";
import Icon from "../components/Icon";
import RadioButtonActive from '../../assets/icons/RadioButtonActive';
import RadioButtonDefault from '../../assets/icons/RadioButtonDefault';

const plans = [
    {
        name: 'Startup',
        ram: '12GB',
        cpus: '6 CPUs',
        disk: '160 GB SSD disk',
    },
    {
        name: 'Business',
        ram: '16GB',
        cpus: '8 CPUs',
        disk: '512 GB SSD disk',
    },
    {
        name: 'Enterprise',
        ram: '32GB',
        cpus: '12 CPUs',
        disk: '1024 GB SSD disk',
    },
]

const RadioButtonCard = () => {

    const [selected, setSelected] = useState(plans[0])

    return (
        <div className="w-full">
            <RadioGroup className="flex" value={selected} onChange={setSelected}>
                <div className="space-y-2">
                    <RadioGroup.Option
                        key={plans[0].name}
                        value={plans[0]}
                        className="w-96 relative cursor-pointer rounded-lg px-5 py-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.12)]">
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
                                {selected == plans[0] ?
                                    <RadioButtonActive size="24" fillColor="" className="!me-3 !absolute !right-0 !top-3" />
                                    : <RadioButtonDefault size="24" fillColor="" className="!me-3 !absolute !right-0 !top-3" />
                                }
                            </div>
                        </div>
                    </RadioGroup.Option>
                    <RadioGroup.Option
                        key={plans[1].name}
                        value={plans[1]}
                        className="relative flex cursor-pointer !my-5 rounded-lg px-5 py-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.12)]">
                        <div className="flex w-full items-center justify-between">
                            <div className="flex items-center">
                                <Icon iconName="credit_card" className="!font-icons-solid !text-4xl text-primary-500 !me-6" />
                                <div className="!grid !gap-3">
                                    <RadioGroup.Label
                                        as="p"
                                        className="!text-gray-900 !text-lg !font-bold !mb-0">
                                        Historial crediticio
                                    </RadioGroup.Label>
                                    <RadioGroup.Description
                                        as="span"
                                        className="text-gray-500 grid gap-3">
                                        <p className="!my-0 !text-sm">Vencimiento: 08-06-2022</p>
                                        <p className="!my-0 !text-base !font-bold !text-primary-500">$250.00</p>
                                        <p className="!my-0 !text-base !text-primary-500">Eliminar</p>
                                    </RadioGroup.Description>
                                </div>
                                {selected == plans[1] ?
                                    <RadioButtonActive size="24" fillColor="" className="!me-3 !text-surface-400 !absolute !right-0 !top-3" />
                                    : <RadioButtonDefault size="24" fillColor="" className="!me-3 !text-surface-400 !absolute !right-0 !top-3" />
                                }
                            </div>
                        </div>
                    </RadioGroup.Option>
                    <RadioGroup.Option
                        key={plans[2].name}
                        value={plans[2]}
                        className="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.12)]">
                        <div className="flex w-full items-center justify-between">
                            <div className="flex items-center">
                                <Icon iconName="medical_services" className="!font-icons-solid !text-4xl text-primary-500 !me-6" />
                                <div className="!grid !gap-3">
                                    <RadioGroup.Label
                                        as="p"
                                        className="!text-gray-900 !text-lg !font-bold !mb-0">
                                        Historial médico
                                    </RadioGroup.Label>
                                    <RadioGroup.Description
                                        as="span"
                                        className="text-gray-500 grid gap-3">
                                        <p className="!my-0 !text-sm">Vencimiento: 08-06-2022</p>
                                        <p className="!my-0 !text-base !font-bold !text-primary-500">$480.00</p>
                                        <p className="!my-0 !text-base !text-primary-500">Eliminar</p>
                                    </RadioGroup.Description>
                                </div>
                                {selected == plans[2] ?
                                    <RadioButtonActive size="24" fillColor="" className="!me-3 !text-surface-400 !absolute !right-0 !top-3" />
                                    : <RadioButtonDefault size="24" fillColor="" className="!me-3 !text-surface-400 !absolute !right-0 !top-3" />
                                }
                            </div>
                        </div>
                    </RadioGroup.Option>
                </div>
            </RadioGroup>
        </div>
    )
};

export default RadioButtonCard;


