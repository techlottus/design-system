import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import React from "react";
import CheckBoxActive from '../../components/CheckBoxActive/CheckBoxActive';
import CheckBoxDefault from '../../components/CheckBoxDefault/CheckBoxDefault';

const CheckBoxLink = () => {

    let [optionThirteen, setOptionThirteen] = useState(true)

    return (
        <div className="w-full px-1 grid grid-cols-12">
            <div className="col-span-5">
                <RadioGroup>
                    <RadioGroup.Option value={optionThirteen} className="!flex mb-2 cursor-pointer mt-2" onClick={() => setOptionThirteen(!optionThirteen)}>
                        <>
                            {optionThirteen ?
                                <CheckBoxActive size="md" className="!mx-2 my-auto" />
                                : <CheckBoxDefault size="md" className="!mx-2 my-auto" />
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


