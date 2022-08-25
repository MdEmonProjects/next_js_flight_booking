import Image from 'next/image'
import React from 'react'
import database from '../data'

function ChooseusTesttimonial() {
  return (
    <section className='choose_us__testimonial'>
        <div className='container mx-auto'>
            <div className='choose_us_section' style={{width: "40%"}}>
                <div className='heading_'>
                    <h3>Why Choose Us</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                </div>

                <div className='choose_us_images flex justify-start flex-wrap'>
                    {
                        database?.chooseUsImage.map(value=>{
                            return(
                                <div className='item_image m-2.5' key={value.id} style={{height: "213px"}}>
                                    <Image src={value.imageLocation} width={213} height={213} alt={value.alt}></Image>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <div className='testimonial_section' style={{width: "60%"}}>

            </div>
        </div>
    </section>
  )
}

export default ChooseusTesttimonial