import React from 'react'
import ImagenationSlider from '../components/ImagenationSlider'

function Imagenation() {
  return (
    <section className='imagenation_section'>
        <div className='container mx-auto pt-8 flex justify-center items-center'>
            <div className='text-section pr-8'>
                <h3>Go beyond<br/> your <br/>imagination</h3>
                <p>Discover your ideal<br/> experience with us</p>
            </div>
            <div className='slier_section pl-8' style={{width: "50%"}}>
                <ImagenationSlider></ImagenationSlider>
            </div>
        </div>
    </section>
  )
}

export default Imagenation