import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import React from "react";
import CheckBoxOutline from '../../../assets/icons/CheckBoxOutline';
import CheckBoxFlat from '../../../assets/icons/CheckBoxFlat';

const Checkbox = () => {
    let [optionOne, setOptionOne] = useState(false)
    let [optionTwo, setOptionTwo] = useState(false)
    let [optionThree, setOptionThree] = useState(false)
    let [optionFour, setOptionFour] = useState(false)
    let [optionFive, setOptionFive] = useState(true)
    let [optionSix, setOptionSix] = useState(true)

    return (
        <div className="w-full px-1 grid grid-cols-12">
            <div className="col-span-5">
                <RadioGroup className="flex my-3">
                    <RadioGroup.Option value={optionOne} className="!w-5 !mx-2" onClick={() => setOptionOne(!optionOne)}>
                        <>
                            {optionOne ?
                                <CheckBoxFlat size="22" fillColor="#A1A1AA" className="!mx-2 cursor-pointer" />
                                : <CheckBoxOutline size="22" fillColor="#A1A1AA" className="!mx-2 cursor-pointer" />
                            }
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={optionTwo} className="!w-5 !mx-2" onClick={() => setOptionTwo(!optionTwo)}>
                        <>
                            {optionTwo ?
                                <CheckBoxFlat size="22" fillColor="#18181B" className="!mx-2 cursor-pointer" />
                                : <CheckBoxOutline size="22" fillColor="#18181B" className="!mx-2 cursor-pointer" />
                            }
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={optionThree} className="!w-5 !mx-2" onClick={() => setOptionThree(!optionThree)}>
                        <>
                            <CheckBoxOutline size="22" fillColor="#A1A1AA" className="!mx-2" />
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={optionFour} className="!w-5 !mx-2" onClick={() => setOptionFour(!optionFour)}>
                        <>
                            {optionFour ?
                                <CheckBoxFlat size="22" fillColor="#D4D4D8" className="!mx-2" />
                                : <CheckBoxOutline size="22" fillColor="#D4D4D8" className="!mx-2" />
                            }
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={optionFive} className="!w-5 !mx-2" onClick={() => setOptionFive(!optionFive)}>
                        <>
                            {optionFive ?
                                <CheckBoxFlat size="22" fillColor="#18181B" className="!mx-2 cursor-pointer" />
                                : <CheckBoxOutline size="22" fillColor="#18181B" className="!mx-2 cursor-pointer" />
                            }
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={optionSix} className="!w-5 !mx-2" onClick={() => setOptionSix(!optionSix)}>
                        <>
                            <CheckBoxFlat size="22" fillColor="#18181B" className="!mx-2 opacity-60" />
                        </>
                    </RadioGroup.Option>
                </RadioGroup>
            </div>
        </div>
    )
};

export default Checkbox;


