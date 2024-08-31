import Link from "next/link";
import { SOCIAL_DATA, WEBSITE_NAME } from "../config/Constant";


const social_links = [
  {
    link: "http://facebook.com",
    target: "_blank",
    icon: "fab fa-facebook-f", 
  },
  {
    link: "http://twitter.com",
    target: "_blank",
    icon: "fab fa-twitter", 
  },
  {
    link: "https://www.instagram.com",
    target: "_blank",
    icon: "fa-brands fa-instagram", 
  }, 
  {
    link: "https://www.pinterest.com",
    target: "_blank",
    icon: "fa-brands fa-pinterest", 
  },
];

const SocialLinks = () => {
  return (
    <>
      {SOCIAL_DATA.map((row, i) => (
        <Link
          key={i}
          href={row?.link}
          // className={l.color}
          target='_blank'
        >
          <i className={`fab fa-${row?.icon}`}></i>
        </Link>
      ))}
    </>
  );
};

export default SocialLinks;






const copy_right_text = {
  copy_right: <>© Copyright <span>©{new Date().getFullYear()}</span> {WEBSITE_NAME}. All Rights Reserved </>,
}
const {copy_right}  = copy_right_text

export const CopyRight = ()  => {
  return (
    <>
    {copy_right}
    </>
  )
}




// home 03 social link data
const social_links_two = [
  {
    link: "http://facebook.com",
    target: "_blank",
    icon: "fab fa-facebook-f", 
  },
  {
    link: "http://twitter.com",
    target: "_blank",
    icon: "fab fa-twitter",  
  },
  {
    link: "https://www.linkedin.com",
    target: "_blank",
    icon: "fab fa-linkedin-in", 
  }, 
  {
    link: "https://www.youtube.com",
    target: "_blank",
    icon: "fab fa-youtube",  
},

];
 

export const  SocialLinksTwo = ()  => {
   return (
     <>
        {social_links_two.map((link, i) => (
          <Link
            key={i}
            target={link.target}
            className={`icon-color-${link.color}`}
            href={link.link}
          >
            <i className={link.icon}></i>
            <span></span>
          </Link>
        ))}
     </>
   );
}