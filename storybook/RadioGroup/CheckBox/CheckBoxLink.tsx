import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import React from "react";
import CheckBoxOutline from '../../../assets/icons/CheckBoxOutline';
import CheckBoxFlat from '../../../assets/icons/CheckBoxFlat';

const CheckBoxLink = () => {

    let [optionThirteen, setOptionThirteen] = useState(true)

    return (
        <div className="w-full px-1 grid grid-cols-12">
            <div className="col-span-5">
                <RadioGroup>
                    <RadioGroup.Option value={optionThirteen} className="!flex mb-2 cursor-pointer mt-2" onClick={() => setOptionThirteen(!optionThirteen)}>
                        <>
                            {optionThirteen ?
                                <CheckBoxFlat size="22" fillColor="#00A994" className="!mx-2 my-auto" />
                                : <CheckBoxOutline size="22" fillColor="#00A994" className="!mx-2 my-auto" />
                            }
                            <p className="">I have read the <a className="!underline" href="#"> Privacy Notice</a></p>
                        </>
                    </RadioGroup.Option>
                </RadioGroup>
            </div>
        </div>
    )
};

export default CheckBoxLink;


