import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import React from "react";
import Icon from '../../components/Icon';
import CheckBoxOutline from '../../../assets/icons/CheckBoxOutline';
import CheckBoxFlat from '../../../assets/icons/CheckBoxFlat';

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
                                <CheckBoxFlat size="22" fillColor="#A1A1AA" className="!mx-2 cursor-pointer" />
                                : <CheckBoxOutline size="22" fillColor="#A1A1AA" className="!mx-2 cursor-pointer" />
                            }
                            <span className="">Label</span>
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={optionEight} className="flex cursor-pointer !mb-3 w-20" onClick={() => setOptionEight(!optionEight)}>
                        <>
                            {optionEight ?
                                <CheckBoxFlat size="22" fillColor="#18181B" className="!mx-2" />
                                : <CheckBoxOutline size="22" fillColor="#18181B" className="!mx-2" />
                            }
                            <span className="text-base">Label</span>
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={optionNine} className="flex !mb-3 w-20" onClick={() => setOptionNine(!optionNine)}>
                        <>
                            <CheckBoxOutline size="22" fillColor="#A1A1AA" className="!mx-2" />
                            <span className="text-base">Label</span>
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={optionTen} className="flex cursor-pointer !mb-3 w-20" onClick={() => setOptionTen(!optionTen)}>
                        <>
                            {optionTen ?
                                <CheckBoxFlat size="22" fillColor="#D4D4D8" className="!mx-2" />
                                : <CheckBoxOutline size="22" fillColor="#D4D4D8" className="!mx-2" />
                            }
                            <span className="">Label</span>
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={optionEleven} className="flex cursor-pointer !mb-3 w-20" onClick={() => setOptionEleven(!optionEleven)}>
                        <>
                            {optionEleven ?
                                <CheckBoxFlat size="22" fillColor="#18181B" className="!mx-2 cursor-pointer" />
                                : <CheckBoxOutline size="22" fillColor="#18181B" className="!mx-2 cursor-pointer" />
                            }
                            <span className="">Label</span>
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={optionTwelve} className="flex !mb-3" onClick={() => setOptionTwelve(!optionTwelve)}>
                        <>
                            <CheckBoxFlat size="22" fillColor="#18181B" className="!mx-2 opacity-60" />
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


