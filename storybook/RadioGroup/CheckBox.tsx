import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import React from "react";
import Icon from '../components/Icon';


const Checkbox = () => {
    let [planOne, setPlanOne] = useState(false)
    let [planTwo, setPlanTwo] = useState(false)
    let [planThree, setPlanThree] = useState(false)
    let [planFour, setPlanFour] = useState(false)
    let [planFive, setPlanFive] = useState(true)
    let [planSix, setPlanSix] = useState(true)
    let [planSeven, setPlanSeven] = useState(false)
    let [planEight, setPlanEight] = useState(false)
    let [planNine, setPlanNine] = useState(false)
    let [planTen, setPlanTen] = useState(false)
    let [planEleven, setPlanEleven] = useState(true)
    let [planTwelve, setPlanTwelve] = useState(true)
    let [planThirteen, setPlanThirteen] = useState(true)

    return (        
        <div className="w-full px-1 grid grid-cols-12">
            <div className="col-span-5">
                <p className="text-4xl font-bold">Checkbox Atom</p>
                <RadioGroup className="flex my-3">
                    <RadioGroup.Option value={planOne} className="!w-5 !mx-2" onClick={() => setPlanOne(!planOne)}>
                        <>
                            {planOne ?
                                <Icon iconName="check_box" className="cursor-pointer !font-icons-solid text-base !ms-2 !me-3 text-dark" />
                                : <Icon iconName="check_box_outline_blank" className="cursor-pointer !font-icons-solid text-base !ms-2 !me-3 text-surface-400" />
                            }
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={planTwo} className="!w-5 !mx-2" onClick={() => setPlanTwo(!planTwo)}>
                        <>
                            {planTwo ?
                                <Icon iconName="check_box" className="cursor-pointer !font-icons-solid text-base !ms-2 !me-3 text-dark" />
                                : <Icon iconName="check_box_outline_blank" className="cursor-pointer !font-icons-solid text-base !ms-2 !me-3 text-surface-400" />
                            }
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={planThree} className="!w-5 !mx-2" onClick={() => setPlanThree(!planThree)}>
                        <>
                            {planThree ?
                                <Icon iconName="check_box" className="cursor-pointer !font-icons-solid text-base !ms-2 !me-3 text-dark" />
                                : <Icon iconName="check_box_outline_blank" className="cursor-pointer !font-icons-solid text-base !ms-2 !me-3 text-surface-400" />
                            }
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={planFour} className="!w-5 !mx-2" onClick={() => setPlanFour(!planFour)}>
                        <>
                            {planFour ?
                                <Icon iconName="check_box" className="cursor-pointer !font-icons-solid text-base !ms-2 !me-3 text-dark" />
                                : <Icon iconName="check_box_outline_blank" className="cursor-pointer !font-icons-solid text-base !ms-2 !me-3 text-surface-400" />
                            }
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={planFive} className="!w-5 !mx-2" onClick={() => setPlanFive(!planFive)}>
                        <>
                            {planFive ?
                                <Icon iconName="check_box" className="cursor-pointer !font-icons-solid text-base !ms-2 !me-3 text-dark" />
                                : <Icon iconName="check_box_outline_blank" className="cursor-pointer !font-icons-solid text-base !ms-2 !me-3 text-surface-400" />
                            }
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={planSix} className="!w-5 !mx-2" onClick={() => setPlanSix(!planSix)}>
                        <>
                            {planSix ?
                                <Icon iconName="check_box" className="cursor-pointer !font-icons-solid text-base !ms-2 !me-3 text-dark" />
                                : <Icon iconName="check_box_outline_blank" className="cursor-pointer !font-icons-solid text-base !ms-2 !me-3 text-surface-400" />
                            }
                        </>
                    </RadioGroup.Option>
                </RadioGroup>
                <p className="text-4xl font-bold">Component</p>
                <RadioGroup>
                    <RadioGroup.Option value={planSeven} className="!mt-4 cursor-pointer w-16 !mb-3" onClick={() => setPlanSeven(!planSeven)}>
                        <>
                            {planSeven ?
                                <Icon iconName="check_box" className="!font-icons-solid text-base !ms-2 !me-3 text-dark" />
                                : <Icon iconName="check_box_outline_blank" className="!font-icons-solid text-base !ms-2 !me-3 text-surface-400" />
                            }
                            <span className="">Label</span>
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={planEight} className="cursor-pointer w-16 !mb-3" onClick={() => setPlanEight(!planEight)}>
                        <>
                            {planEight ?
                                <Icon iconName="check_box" className="!font-icons-solid text-base !ms-2 !me-3 text-dark" />
                                : <Icon iconName="check_box_outline_blank" className="!font-icons-solid text-base !ms-2 !me-3 text-surface-400" />
                            }
                            <span className="text-base">Label</span>
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={planNine} className="cursor-pointer w-16 !mb-3" onClick={() => setPlanNine(!planNine)}>
                        <>
                            {planNine ?
                                <Icon iconName="check_box" className="!font-icons-solid text-base !ms-2 !me-3 text-dark" />
                                : <Icon iconName="check_box_outline_blank" className="!font-icons-solid text-base !ms-2 !me-3 text-surface-400" />
                            }
                            <span className="text-base">Label</span>
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={planTen} className="cursor-pointer w-16 !mb-3" onClick={() => setPlanTen(!planTen)}>
                        <>
                            {planTen ?
                                <Icon iconName="check_box" className="!font-icons-solid text-base !ms-2 !me-3 text-dark" />
                                : <Icon iconName="check_box_outline_blank" className="!font-icons-solid text-base !ms-2 !me-3 text-surface-400" />
                            }
                            <span className="">Label</span>
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={planEleven} className="cursor-pointer w-16 !mb-3" onClick={() => setPlanEleven(!planEleven)}>
                        <>
                            {planEleven ?
                                <Icon iconName="check_box" className="!font-icons-solid text-base !ms-2 !me-3 text-dark" />
                                : <Icon iconName="check_box_outline_blank" className="!font-icons-solid text-base !ms-2 !me-3 text-surface-400" />
                            }
                            <span className="">Label</span>
                        </>
                    </RadioGroup.Option>
                    <RadioGroup.Option value={planTwelve} className="cursor-pointer w-16 !mb-3" onClick={() => setPlanTwelve(!planTwelve)}>
                        <>
                            {planTwelve ?
                                <Icon iconName="check_box" className="!font-icons-solid text-base !ms-2 !me-3 text-dark" />
                                : <Icon iconName="check_box_outline_blank" className="!font-icons-solid text-base !ms-2 !me-3 text-surface-400" />
                            }
                            <span className="">Label</span>
                            <p className="text-sm !ms-2">Help text</p>
                        </>
                    </RadioGroup.Option>
                </RadioGroup>
                <p className="text-4xl font-bold">Checkbox con link</p>
                <RadioGroup>
                    <RadioGroup.Option value={planThirteen} className="mb-2 cursor-pointer mt-2" onClick={() => setPlanThirteen(!planThirteen)}>
                        <>
                            {planThirteen ?
                                <Icon iconName="check_box" className="!font-icons-solid text-base !ms-2 !me-3 text-dark" />
                                : <Icon iconName="check_box_outline_blank" className="!font-icons-solid text-base !ms-2 !me-3 text-surface-400" />
                            }
                            <span className="">He leído el </span><a className="!underline" href="#">Aviso de Privacidad</a>                            
                        </>
                    </RadioGroup.Option>
                </RadioGroup>
            </div>
        </div>
    )
};

export default Checkbox;


