import React from 'react';
import database from '../data';
import Image from 'next/image';
function ExploreGallery() {
    return (
        <section>
            <div className='container mx-auto flex justify-center items-start flex-wrap'>
                <div className='explore_text_part_' style={{ width: "700px", maxWidth: "100%" }}>
                    <div className='heading_'>
                        <h3>Explore most popular holiday destinations</h3>
                        <p>Discover your ideal experience with us</p>
                    </div>
                    <div className='gallary_images_ flex item-start'>
                        <div className='item_image flex flex-col mr-4 justify-between'>
                            <div className='image group relative overflow-hidden rounded-xl mb-4'>
                                <Image className='group-hover:scale-110 transition-all duration-500' src={database?.galleryImage[0]?.imageLocation} width={336} height={315} />
                                <div className='overly absolute h-full w-full top-0 left-0 flex items-end pb-8 pl-4'>
                                    <div className="rating">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className='image group'>
                                <Image className='group-hover:scale-110  transition-all duration-500' src={database?.galleryImage[1]?.imageLocation} width={336} height={315} />
                            </div>

                        </div>
                        <div className='item_image'>
                            <div className='image group'>
                                <Image className='group-hover:scale-110  transition-all duration-500' src={database?.galleryImage[2]?.imageLocation} width={336} height={630} />
                            </div>

                        </div>

                    </div>

                </div>
                <div className='explore_big_image_part_ sm:ml-4' style={{ width: "700px", maxWidth: "100%" }}>
                    <div className='item-image'>
                        <Image className='hover:scale-110  transition-all duration-500' src={database?.galleryImage[3]?.imageLocation} width={678} height={500} layout="responsive" alt={database?.galleryImage[3]?.alt} />
                    </div>
                    <div className='item-image flex justify-between w-full flex-wrap mt-4'>
                        <Image className='hover:scale-110  transition-all duration-500' src={database?.galleryImage[4]?.imageLocation} width={330} height={250} alt={database?.galleryImage[4]?.alt} />
                        <Image className='hover:scale-110  transition-all duration-500' src={database?.galleryImage[5]?.imageLocation} width={330} height={250} alt={database?.galleryImage[5]?.alt} />
                    </div>
                </div>


            </div>
        </section>
    )
}

export default ExploreGallery