import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import React from "react";
import Icon from "../../components/Icon";
import RadioButtonActive from '../../components/RadioButtonActive/RadioButtonActive';
import RadioButtonDefault from '../../components/RadioButtonDefault/RadioButtonDefault';

const select = [
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

    const [selected, setSelected] = useState(select[0])

    return (
        <div className="w-full">
            <RadioGroup className="flex" value={selected} onChange={setSelected}>
                <div className="space-y-2">
                    <RadioGroup.Option
                        key={select[0].name}
                        value={select[0]}
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
                                {selected == select[0] ?
                                    <RadioButtonActive size="md" className="!me-3 !absolute !right-0 !top-3" />
                                    : <RadioButtonDefault size="md" className="!me-3 !absolute !right-0 !top-3" />
                                }
                            </div>
                        </div>
                    </RadioGroup.Option>
                    <RadioGroup.Option
                        key={select[1].name}
                        value={select[1]}
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
                                {selected == select[1] ?
                                    <RadioButtonActive size="md" className="!me-3 !text-surface-400 !absolute !right-0 !top-3" />
                                    : <RadioButtonDefault size="md" className="!me-3 !text-surface-400 !absolute !right-0 !top-3" />
                                }
                            </div>
                        </div>
                    </RadioGroup.Option>
                    <RadioGroup.Option
                        key={select[2].name}
                        value={select[2]}
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
                                {selected == select[2] ?
                                    <RadioButtonActive size="md" className="!me-3 !text-surface-400 !absolute !right-0 !top-3" />
                                    : <RadioButtonDefault size="md" className="!me-3 !text-surface-400 !absolute !right-0 !top-3" />
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


