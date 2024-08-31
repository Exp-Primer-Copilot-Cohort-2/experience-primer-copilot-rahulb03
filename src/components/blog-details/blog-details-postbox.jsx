import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Tags from '../blog/tags';
import Category from '../blog/category';
import SearchArea from '../blog/search-area';
import RecentPost from '../blog/recent-post';
import UserProfile from '../blog/user-profile';
import CommentForm from '@/src/forms/comment-form';


import thumb_1 from "@assets/img/blog/details/blog-1.jpg";
import thumb_2 from "@assets/img/blog/details/blog-2.jpg";
import thumb_3 from "@assets/img/blog/details/blog-3.jpg";

import person_1 from "@assets/img/blog/details/comment-1.jpg";
import person_2 from "@assets/img/blog/details/comment-2.jpg";

import quate from "@assets/img/blog/details/quate.jpg"; 
import RightSymbol from '@/src/svg/right-symbol';
import VideoPopup from '@/src/modals/video-popup';
import ReplyIcon from '@/src/svg/reply-icon';

import serviceData from '../../data/services-data'
import { Splide, SplideSlide } from '@splidejs/react-splide';


const single_post_details  = {
   thumb: thumb_1,
   date: "02 Apr 2021",
   comments: "Comments (03)",
   upload_time: "3 min Read",
   title_1: <>The whimsically named Egg Canvas brainchild</>,
   des_1: <>he whimsically named Egg Canvas is the brainchild of Erica Choi, a design director and photo
   grapher based in York. Why the name “Egg Canvas Erica was inspired by her Korean childhood
    nickname, which means egg, while “canvas” medium with wh art is created. “Egg Canvas
   therefore, is her life—creating beautiful things each day
   a blank canvas.</>,
   des_2: <>We have covered many special events such as fireworks, fairs, parades, races, walks, awards ceremonies, fashion shows, sporting events, and even a memorial service.</>,
   des_3: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum rhon
   cus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo fun consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interd enim. Vivamus fauc ex sed nibh egestas elementum. Mauris et bibendum</>,
   quate_icon: quate,
   blockquote: <>Your time is limited, so don’t waste it living someone else’s life.
   Don’t be trapped by dogma – which is living with the results</>,
   writer: "Jamil",
   title_2: <>Let our investment management team</>,
   postbox_list: [
      {
         id: 1,
         active: "",
         title: "Lorem Ipsum generators on the tend to repeat.",
         icon: <RightSymbol />
      },
      {
         id: 2,
         active: "active",
         title: "If you are going to use a passage..",
         icon: <RightSymbol />
      },
      {
         id: 3,
         active: "",
         title: "series of manual and semi-manual activities.",
         icon: <RightSymbol />
      },
      {
         id: 4,
         active: "",
         title: "Lorem Ipsum generators on the tend to repeat.",
         icon: <RightSymbol />
      },
      {
         id: 5,
         active: "",
         title: "If you are going to use a passage.",
         icon: <RightSymbol />
      },
   ],
   thumb_list: thumb_2,
   video_thumb: thumb_3,
   title_3: <>“Amazing Beach Scenery & Relaxing Ocean Sounds”</>,
   des_4: <>We have covered many special events such as fireworks, fairs, parades, races, walks, awards
   ceremonies, fashion shows, sporting events, and even a memorial service.Lorem ipsum dolor
   sit amet, consectetur adipiscing elit. vestibulum rhoncus, dolor eget viverra pretium, dolor
   ellus aliquet nunc,</>,
   tags: ["Business",  "Design", "apps", "data"],
   comment_reply: [
      {
         id: 1,
         img: person_1,
         children_cls: "",
         name: "Eleanor Fant",
         date: "July 14, 2022",
         comment: <>There are many variations of passages of Lorem Ipsum available, but the leap into electronic
         type setting, remaining essentiallyuncha opularisedthe with the release of Letrasetsheets
         containingth leap electrtypesetting remainingmajority have. There are many variations
         of passages of Lorem Ipsum</> ,
         reply_icon: <ReplyIcon />
         
      },
      {
         id: 2,
         img: person_2,
         children_cls: "children",
         name: "Eleanor Fant",
         date: "July 14, 2022",
         comment: <>There are many variations of passages of Lorem Ipsum available, but the
         majority have. There are many variations of passages</> , 
         
      }
   ]


}
const {thumb, date, comments, upload_time, comment_reply}  =  single_post_details

const setting = {
   type   : 'loop',
   drag   : 'free',
   pagination: false,
   arrows: true,
   perPage: 4,
   gap:'10px',
   breakpoints: {
      1800: {
         perPage: 4,
      },
      1500: {
         perPage: 3,
      },
      1200: {
         perPage: 2,
      },
      800: {
         perPage: 1,
      },
      566: {
         perPage: 1,
      },
     },
}

const BlogDetailsPostbox = () => {
   // console.log('serviceData :: ', serviceData)
   
  const [isVideoOpen, setIsVideoOpen] = useState(false);
    return (
        <>
            {/* <section className="postbox__area pt-120 pb-100"> */}
            <section className="postbox__area pt-30 pb-60">
            <div className="container">
               <div className="row">
                  {/* <div className="col-xxl-8 col-xl-8 col-lg-8"> */}
                  <div className="col-xxl-12 col-xl-12 col-lg-12">
                     <div className="postbox__wrapper">
                        <article className="postbox__item format-image mb-50 transition-3">
                           <div className="postbox__thumb m-img d-none">
                              <Image src={thumb} alt="theme-pure" />
                           </div>
                           <div className="postbox__content">
                              <div className="postbox__meta d-none">
                                 <span>
                                    <i className="fa-light fa-calendar-days"></i>{date}
                                 </span>
                                 <span>
                                    <Link href="#">
                                       <i className="fal fa-comments"></i>{comments}
                                    </Link>
                                 </span>
                                 <span>
                                    <Link href="#">
                                       <i className="fa-regular fa-clock"></i>{upload_time}
                                    </Link>
                                 </span>
                              </div>
                           {
                              serviceData?.map((row, index) => {
                                 return (
                                    <div className='mt-90 mb-120' id={row?.id}>
                                       <h3 className="postbox__title border-bottom border-3 d-flex gap-2 align-items-center pb-1" style={{width:'fit-content', borderColor:'#0D1130'}}>
                                          <Image src={row?.img}  alt='image loading' width={35} height={35}/>
                                          <label>{row?.title}</label>
                                       </h3>
                                       <div className="postbox__text ml-30">
                                          <h5>{row?.subtitle}</h5>
                                          <p>{row?.desc}</p>
                                          <h5>Our Approach</h5>
                                          <div className="tp-service-slider-wrapper">
                                             <Splide  options={setting} className="service-active splide">
                                                {
                                                row?.points?.map((item, i) => 
                                                   <SplideSlide key={i}>
                                                      <div
                                                         className="tp-service-wrapper p-relative border-dark"
                                                         style={{padding:'0px!important'}}
                                                      >
                                                         <div className='h-25 d-flex justify-content-center border-bottom pt-2 align-items-center px-5'>
                                                            <h5 className='text-white mb-0'>{item.title}</h5>
                                                         </div>
                                                         <div className='h-75 p-4 text-center d-flex align-items-center'>
                                                            <p style={{fontSize:'16px'}} className='mb-0'>{item.desc}</p>
                                                         </div>
                                                      </div>
                                                   </SplideSlide>
                                                   )
                                                }
                                             </Splide>
                                          </div>
                                          {/* <ul className='ml-30'>
                                          {
                                             row?.points?.map((e, i) => {
                                                return (
                                                   <li>
                                                      <h6>{i + 1}. {e?.title}</h6>
                                                      <p>{e?.desc}</p>
                                                   </li>
                                                )
                                             })
                                          }
                                          </ul> */}
                                          <div className='mt-30'>
                                             <h5>Key Benifit</h5>
                                             <ul className='ml-30'>
                                             {
                                                row?.keyBenifit?.map((e, i) => 
                                                   <li style={{marginBottom:'10px', listStyle:'none', border:'1px solid lightgrey', padding:'0px 10px'}}>
                                                      <p style={{marginBottom:'0px', fontSize:'15px'}}>{e}</p>
                                                   </li>
                                                )
                                             }
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 )
                              })   
                           }
                           </div>
                        </article>
                        <div className="postbox__comment mb-50 d-none">
                           <h3 className="postbox__comment-title">(04) Comment</h3>
                           <ul>
                              {comment_reply.map((comment_reply, index) =>
                                 <li key={index} className={comment_reply?.children_cls}>
                                    <div className="postbox__comment-box p-relative">
                                       <div className="postbox__comment-info d-flex">
                                             <div className="postbox__comment-avater mr-20">
                                                <Image src={comment_reply.img} alt="theme-pure" />
                                             </div>
                                             <div className="postbox__comment-name">
                                                <h5>{comment_reply.name}</h5>
                                                <span className="post-meta">{comment_reply.date}</span>
                                             </div>
                                       </div>
                                       <div className="postbox__comment-text ml-65">
                                          <p>{comment_reply.comment}</p>
                                          {comment_reply.reply_icon &&
                                          <div className="postbox__comment-reply">
                                             <span>
                                                <ReplyIcon /> 
                                                </span>
                                          </div> 
                                          }
                                       </div>
                                    </div>
                                 </li>
                              )} 
                           </ul>
                        </div>
                        <div className="postbox__comment-form d-none">
                           <h3 className="postbox__comment-form-title">Write a comment</h3> 
                           <CommentForm />
                           <p className="ajax-response"></p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 d-none">
                     <div className="sidebar__wrapper">
                        <UserProfile />
                        <SearchArea />
                        <RecentPost />
                        <Category />
                        <Tags /> 
                     </div>
                  </div>
               </div>
            </div>
         </section>


         <VideoPopup
         isVideoOpen={isVideoOpen}
         setIsVideoOpen={setIsVideoOpen}
         videoId={"EW4ZYb3mCZk"} 
         />
        </>
    );
};

export default BlogDetailsPostbox;