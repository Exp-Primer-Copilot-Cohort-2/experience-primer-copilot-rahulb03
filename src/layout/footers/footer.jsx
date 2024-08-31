import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@assets/img/logo/logo.png";

import headphone from "@assets/img/footer/headphone.png";
import footer_logo from "@assets/img/logo/footer-logo.png";
import indFlag from '@assets/img/flag/ind.png';
import user from "@assets/img/footer/user.png";
import EmailAeroplan from '@/src/svg/email-aeroplan';
import SocialLinks, { CopyRight } from '@/src/common/social-links';
import { ADDRESS, CONTACT_MAIL, CONTACT_NO, HR_MAIL, LOCATION, SERVICES_DATA, TECHNOLOGY_DATA, WEBSITE_NAME } from '@/src/config/Constant';

const footer_content = { 
    contact_us: <> Contact us at <span>{CONTACT_MAIL}</span></>,
    mail: CONTACT_MAIL,
    contact_text: "PERFECT SOLUTION From " + WEBSITE_NAME,
    phone: CONTACT_NO,
    info: <>The world’s first and largest digital market for crypto collectibles and non-fungible (NFTs). Buy</>,
    map: LOCATION,
    address: <>{ADDRESS}</>,
    mail_2: HR_MAIL,
    mail_phone: <> {HR_MAIL} <br /> {CONTACT_NO}</>,


    service_links: SERVICES_DATA



}
const { info, map, address,  service_links} = footer_content


const Footer = () => {
    return (
        <>
            <footer className="tp-footer-area p-relative">
                <div className="tp-footer-bg" style={{backgroundImage: `url(/assets/img/footer/footer-bg.jpg)`}}></div>
                {/* <div className="tp-footer-top-shape" style={{backgroundImage: `url(/assets/img/footer/footer-top-bg.png)`}}></div> */}
                
                <div className="container container-large">

                    {/* <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-footer-top-area">
                                <div className="row align-items-center">
                                <div className="col-lg-6">  
                                    <div className="tp-footer-top-contact">
                                        <a href={`mailto:${CONTACT_MAIL}`}>{CONTACT_MAIL}</a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="tp-footer-top-right d-flex justify-content-start justify-content-lg-end">
                                        <div className="tp-footer-top-right-headphone">
                                            <Image src={headphone} alt="theme-pure" />
                                        </div>
                                        <div className="tp-footer-top-right-content">
                                            <p>{contact_text}</p>
                                            <a href={`tel:${CONTACT_NO}`}>{CONTACT_NO}</a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="tp-footer-main-area">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-1">
                                <div className="tp-footer-logo">
                                <Link href="/">
                                       <Image src={footer_logo} alt="theme-pure" />
                                    </Link>
                                </div>
                                <div className="tp-footer-widget-content">
                                    <div className="tp-footer-info">
                                        <p className='d-none'>{info}</p>
                                        <div className="tp-footer-main-mail">
                                            <a href={`tel:${CONTACT_NO}`}>
                                                <i className="fa-light fa-phone"></i>{CONTACT_NO}</a>
                                        </div>
                                        <div className="tp-footer-main-mail">
                                            <a href={`mailto:${CONTACT_NO}`}>
                                                <i className="fa-light fa-envelope"></i>{HR_MAIL}</a>
                                        </div>
                                        <div className="tp-footer-main-mail">
                                            <a href={`mailto:${CONTACT_NO}`}>
                                                <i className="fa-light fa-envelope"></i>{CONTACT_MAIL}</a>
                                        </div>
                                        <div className="tp-footer-main-location">
                                            <a target='_blank' href={map}> <i className="fa-sharp fa-light fa-location-dot"></i> 
                                            {address}</a>
                                            <br />
                                            <Image src={indFlag}  alt='indiaFlag' width={45} />
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-2">
                                <h3 className="tp-footer-widget-title">Services</h3>
                                <div className="tp-footer-widget-content">
                                    <ul>
                                        {service_links.map((link, i) => <li key={i}><Link href={link?.link}>{link?.title}</Link></li>)} 
                                    </ul>
                                </div>
                                </div> 
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-2">
                                <h3 className="tp-footer-widget-title">Technologies</h3>
                                <div className="tp-footer-widget-content">
                                    <ul>
                                        {TECHNOLOGY_DATA.map((val, i) => 
                                            <li key={i}>
                                                {/* <Link href={}>{}</Link> */}
                                                <Link href='#'>{val}</Link>
                                            </li>
                                        )} 
                                    </ul>
                                </div>
                                </div> 
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 d-none">
                                <div className="tp-footer-widget tp-footer-col-3">
                                <h3 className="tp-footer-widget-title">Contact Info</h3>
                                <div className="tp-footer-widget-content">
                                    <div className="tp-footer-author d-flex d-none">
                                        <div className="tp-footer-author-thumb">
                                            <Image src={user} alt="theme-pure" />
                                        </div>
                                        <div className="tp-footer-author-content">
                                            <span>Chat With Expert <br /> Active Now</span>
                                        </div>
                                    </div>
                                    <ul>
                                        <li><Link href="#">Parking permission</Link></li>
                                        <li><Link href="#">Fire Service Noc</Link></li>
                                        <li><Link href="#">Report a Parking Violation</Link></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-5 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-4">
                                <h3 className="tp-footer-widget-title">Newsletter</h3>
                                <div className="tp-footer-from">
                                    <div className="tp-footer-text-email p-relative">
                                        <input type="text" placeholder="Enter Email Address" />
                                        <span> 
                                            <EmailAeroplan />
                                        </span>
                                    </div>
                                    <div className="tp-footer-form-check">
                                        <input className="form-check-input" id="flexCheckChecked" type="checkbox" />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            I agree to all your terms and policies
                                        </label>
                                </div>
                                <div className="tp-footer-widget-social">
                                    <SocialLinks /> 

                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="tp-footer-copyright-area p-relative">
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <div className="tp-footer-copyright-inner">
                                <p><CopyRight /> </p>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className="tp-footer-copyright-inner text-lg-end">
                                <Link href="terms">Terms and conditions</Link>
                                <Link className="ml-50" href="privacy"> Privacy policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;