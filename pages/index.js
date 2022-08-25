import Head from 'next/head';
import Image from 'next/image';
import BannerImage from '../components/BannerImage';
import DatePicker from '../components/DatePicker';
import LocationSearch from '../components/LocationSearch';
import SelectDropDown from '../components/SelectDropDown';
import database from '../data';
import ChooseusTesttimonial from '../sections/ChooseusTesttimonial';
import Counter from '../sections/Counter';
import Imagenation from '../sections/Imagenation';
import SearchTabs from '../sections/SearchTabs';



export default function Home() {

  return (
    <>
    <BannerImage></BannerImage>
    <section className='banner pt-8 pb-[100px] relative'>
      <div className='short-container mx-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
        <SearchTabs></SearchTabs>
      </div>
    </section>
    <Imagenation></Imagenation>
    <Counter></Counter>
    <ChooseusTesttimonial></ChooseusTesttimonial>
    {/* <section className='_brand_ pb-8'>
      <h5 className='text-center pt-8'>Key Airline Partners</h5>
      <div className='brand_images'>
        <ul className='flex justify-center pt-8 pb-4'>
          {
            database?.airlinePartners.map((value,index)=>{
              return(
                <li key={value+index} className="mx-8">
                  <Image src={value?.imageLocation} alt={value?.alt} width={100} height={100}></Image>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='container mx-auto border-b border-[#f0f0f0]'></div>
    </section>
    <section className='our_services'>
      <div className='container mx-auto'>
        <h6 className='text-center mb-4'>Our Services</h6>
        <h2 className='text-center'>Solutions for the whole <br/>travel ecosystem</h2>
        <div className='row flex flex-wrap pb-8 justify-center'>
          {
            database.serciceMainCard.map(value=>{
              return(
                <div className='w-1/2 ourServiceMainBox px-4'key={value.header}>
                  <div className='main_services relative rounded-xl' style={{background: value.background}}>
                    <div className='feature_image text-center absolute w-full top-0 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                      <img src={value.imageLocation} alt="feture card" className='mx-auto' />
                    </div>
                    <div className='text_section pl-8 pb-8 pr-8'>
                      <h3>{value.header}</h3>
                      <p>{value.shortDescription}</p>
                      <a href={value.learnMoreRoute}>Learn More</a>
                    </div>
                  </div>
                 
                </div>
              );
            })
          }
        </div>
      </div>

      
    </section>
    <section className='why_choose_us'>
      <div className='container mx-auto'>
        <h6 className='text-center mb-4'>Why flyhub?</h6>
        <h2 className='text-center'>We’re the travel platform of <br/>choice for enterprises</h2>
        <div className='whyus_cards flex justify-between'>
          {
            database.whyusSection.map(value=>{
              return(
                <div className='whyusMainBox text-center' key={value.alt}>
                  <div className='whyus_icon'>
                    <Image src={value.imageLocation} alt={value.alt} height={70} width={70}></Image>
                  </div>
                  <div className='whyusBoxContent'>
                    <h3>{value.header}</h3>
                    <p>{value.shortDescription}</p>
                  </div>
                </div>
              );
            })
          }
        </div>

      </div>

    </section> */}
    <section className='newslatter_section relative mb-8 mt-8'>
      <div className='container mx-auto'>
        <div className='newslatter_image'>
          <Image src="/Travel-Experience-Bg.svg" alt='Travel-Experience-Bg' width={1110} height={300} layout="responsive"></Image>
        </div>
        <div className='newslatter_content absolute position-center text-center'>
          <h2 className='text-5xl text-white mb-8'>Let’s make the travel <br/>experience amazing together.</h2>
          <div className="columnBlock">
            <a href="#" className="newslatter_btn">Sign Up Now</a>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}
