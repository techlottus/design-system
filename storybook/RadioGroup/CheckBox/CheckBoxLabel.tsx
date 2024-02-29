import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import React from "react";
import CheckBoxActive from '../../components/CheckBoxActive/CheckBoxActive';
import CheckBoxDefault from '../../components/CheckBoxDefault/CheckBoxDefault';

const CheckBoxLabel = () => {

    let [optionSeven, setOptionSeven] = useState(false)
    let [optionEight, setOptionEight] = useState(false)
    let [optionNine, setOptionNine] = useState(false)
    let [optionTen, setOptionTen] = useState(false)
    let [optionEleven, setOptionEleven] = useState(true)
    let [optionTwelve, setOptionTwelve] = useState(true)

    return (
        <div className="w-full px-1 grid grid-cols-12">
            <div className="col-span-5">
                <RadioGroup>
                    <RadioGroup.Option value={optionSeven} className="flex !mt-4 cursor-pointer !mb-3 w-20" onClick={() => setOptionSeven(!optionSeven)}>
                        <>
                            {optionSeven ?
                                <CheckBoxActive size="md" className="!mx-2 cursor-pointer" />
                                : <CheckBoxDefault size="md" className="!mx-2 cursor-pointer" />
                            }
                            <span className="">Label</span>
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={optionEight} className="flex cursor-pointer !mb-3 w-20" onClick={() => setOptionEight(!optionEight)}>
                        <>
                            {optionEight ?
                                <CheckBoxActive size="md" className="!mx-2" />
                                : <CheckBoxDefault size="md" className="!mx-2" />
                            }
                            <span className="text-base">Label</span>
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={optionNine} className="flex !mb-3 w-20" onClick={() => setOptionNine(!optionNine)}>
                        <>
                            <CheckBoxDefault size="md" className="!mx-2" />
                            <span className="text-base">Label</span>
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={optionTen} className="flex cursor-pointer !mb-3 w-20" onClick={() => setOptionTen(!optionTen)}>
                        <>
                            {optionTen ?
                                <CheckBoxActive size="md" className="!mx-2" />
                                : <CheckBoxDefault size="md" className="!mx-2" />
                            }
                            <span className="">Label</span>
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={optionEleven} className="flex cursor-pointer !mb-3 w-20" onClick={() => setOptionEleven(!optionEleven)}>
                        <>
                            {optionEleven ?
                                <CheckBoxActive size="md" className="!mx-2 cursor-pointer" />
                                : <CheckBoxDefault size="md" className="!mx-2 cursor-pointer" />
                            }
                            <span className="">Label</span>
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={optionTwelve} className="flex !mb-3" onClick={() => setOptionTwelve(!optionTwelve)}>
                        <>
                            <CheckBoxActive size="md" className="!mx-2 opacity-60" />
                            <p className="">Label</p>
                            <p className="text-sm !ms-2">Help text</p>
                        </>
                    </RadioGroup.Option>
                </RadioGroup>
            </div>
        </div>
    )
};

export default CheckBoxLabel;


