import { IFRAME_LOCATION } from '@/src/config/Constant';
import React from 'react';

const GoogleMap = () => {
    return (
        <>
            <div className="tp-contact-map-area">
            <div className="tp-contact-map">
               <iframe src={IFRAME_LOCATION} style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" width="600" height="450"></iframe>
            </div>
         </div>
        </>
    );
};

export default GoogleMap;