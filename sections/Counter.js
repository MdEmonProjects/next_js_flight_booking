import React, { useState } from 'react';
import database from '../data';
import CountUp, { useCountUp } from "react-countup";
import ReactVisibilitySensor from 'react-visibility-sensor';




function Counter() {
    function renderCounter(value, index, arrayLength) {
        if (index === arrayLength - 1) {
            return (
                <div key={value.name} className="counter_number text-center">

                    <ReactVisibilitySensor>
                        {({ isVisible }) =>
                            <h3>{isVisible ? <CountUp end={value.maxCount} duration={3} /> : value.maxCount}</h3>
                        }
                    </ReactVisibilitySensor>

                    <h6>{value.name}</h6>
                </div>
            )
        }
        return (
            <div key={value.name} className="counter_number text-center" style={{ marginRight: "100px" }}>
                <ReactVisibilitySensor>
                        {({ isVisible }) =>
                            <h3>{isVisible ? <CountUp end={value.maxCount} duration={3} /> : value.maxCount}</h3>
                        }
                    </ReactVisibilitySensor>
                <h6>{value.name}</h6>
            </div>
        )
    }
    return (

        <section className='counter_section'>
            <div className='counter_bg bg-img bg-fixed bg-center relative' style={{ background: 'url("15.jpg")' }}>
                <div className='container mx-auto relative z-10'>
                    <div className='row flex flex-wrap justify-center'>
                        {
                            database?.counterData.map((value, index) => {
                                return (
                                    renderCounter(value, index, database?.counterData.length)
                                )
                            })
                        }
                    </div>
                </div>

            </div>


        </section>

    )
}

export default Counter