import React from 'react';
import { useState, Fragment } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Transition, Popover } from '@headlessui/react';

function FlightPasenger() {
    const [dropdownStatus, setDropdoenStatus] = useState(false);
    const [adultCount, setAdultCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    
    let [plan, setPlan] = useState('startup');
    const plans = [
        {
            name: 'Startup'
        },
        {
            name: 'Business'
        },
        {
            name: 'Enterprise'
        },
    ]
    const [selected, setSelected] = useState(plans[0]?.name)
    const hendelDropdown = () => {
        setDropdoenStatus(!dropdownStatus);
    }
    const countAll = (state, setState, increment) => {
        if (increment) {
            setState(state + 1);
        }
        else {
            if (!(state < 1)) {
                setState(state - 1);
            }

        }

    }

    return (
        <Popover className="relative">
            <Popover.Button className="bg-white w-full px-2 flex justify-between items-center" style={{borderRadius: "10px",height: "46px",marginTop: "6px"}}>
                <span className='block text-left'>Passengers: {adultCount}</span>
                <span className='block text-left'>Calss: {selected}</span>


            </Popover.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-full max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white pt-4 divide-y">
                        {/* code block */}
                        <div className='passenger_counter_ px-4'>
                            <h6>Passengers</h6>
                            <div className='passenger_counters flex justify-between py-2'>
                                <div className='result'>{adultCount}</div>
                                <div className='title'>Adult</div>
                                <div className='counter_btn'>
                                    <button type="button" class="btn-add" onClick={() => { countAll(adultCount, setAdultCount, true) }}>
                                        <FontAwesomeIcon style={{ fontSize: "15px", pointerEvents: "none", verticalAlign: "revert" }} icon={faPlus}></FontAwesomeIcon>
                                    </button>
                                    <button type="button" class="btn-subtract" onClick={() => { countAll(adultCount, setAdultCount, false) }}>
                                        <FontAwesomeIcon style={{ fontSize: "15px", pointerEvents: "none", verticalAlign: "revert" }} icon={faMinus}></FontAwesomeIcon>
                                    </button>
                                </div>

                            </div>
                            <div className='passenger_counters flex justify-between py-2'>
                                <div className='result'>{childrenCount}</div>
                                <div className='title'>Children</div>
                                <div className='counter_btn'>
                                    <button type="button" class="btn-add" onClick={() => { countAll(childrenCount, setChildrenCount, true) }}>
                                        <FontAwesomeIcon style={{ fontSize: "15px", pointerEvents: "none", verticalAlign: "revert" }} icon={faPlus}></FontAwesomeIcon>
                                    </button>
                                    <button type="button" class="btn-subtract" onClick={() => { countAll(childrenCount, setChildrenCount, false) }}>
                                        <FontAwesomeIcon style={{ fontSize: "15px", pointerEvents: "none", verticalAlign: "revert" }} icon={faMinus}></FontAwesomeIcon>
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className='passenger_counter_ class'>
                            <h6 className='px-4'>Cabin Class</h6>
                            {
                                plans.map(value=>{
                                    return(
                                        <div key={value.name} className='classList' onClick={()=>{setSelected(value.name)}}>
                                            <p className='text-gray-900 group w-full items-center py-2 px-4 text-sm'>{value.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>

        </Popover>
    )
}


export default FlightPasenger