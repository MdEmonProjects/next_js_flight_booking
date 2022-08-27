import React from 'react';
import database from '../data';
import Image from 'next/image';
function ExploreGallery() {
    return (
        <section>
            <div className='container mx-auto flex justify-center items-start'>
                <div className='explore_text_part_' style={{ width: "700px", maxWidth: "100%" }}>
                    <div className='heading_'>
                        <h3>Explore most popular holiday destinations</h3>
                        <p>Discover your ideal experience with us</p>
                    </div>
                    <div className='gallary_images_ flex item-start'>

                        <div className='item_image flex flex-col mr-8'>
                            <Image src={database?.galleryImage[0]?.imageLocation} width={336} height={305} style={{marginBottom: "20px !important"}}/>
                            <Image src={database?.galleryImage[1]?.imageLocation} width={336} height={305}/>
                        </div>
                        <div className='item_image'>
                            <Image src={database?.galleryImage[2]?.imageLocation} width={336} height={681} />
                        </div>

                    </div>

                </div>


            </div>
        </section>
    )
}

export default ExploreGallery