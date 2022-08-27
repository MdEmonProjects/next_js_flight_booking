import React from 'react'
import database from '../data';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className='container mx-auto flex justify-between'>
        <div className='contact_links foteerNavigation'>
            <div className='footer-heading mb-8'>
                <h6>Get in touch</h6>
            </div>
            <ul className="footerNavList getInTouchBox">
                <li>Feel free to get in touch with us. <br/>Contact us at</li>
                {
                    database.contactInfo.map(value=>{
                        return(
                            <li key={value?.id}>
                                <a href={value.name == "mobile" ? "tel:"+value.data : "mailto:"+value.data}>
                                    <Image src={value.imageLocation} width={20} height={20}></Image>
                                    {value.data}
                                </a>
                            </li>
                        )
                    })
                }

            </ul>

        </div>
        {
            database.footerNavMainbox.map(value=>{
                return(
                    <div className='navMainBox' key={value?.id}>
                        <div className='footer-heading mb-8'>
                            <h6>{value.header}</h6>
                        </div>
                        <ul className='footerNavList'>
                            {value?.link.map(val=>{
                                return(
                                    <li key={val?.id}>
                                        <a href={val.route}>{val.data}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )
            })
        }
    </footer>
  )
}

export default Footer;