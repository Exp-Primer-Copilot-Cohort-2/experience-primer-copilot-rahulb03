import React from 'react';
import framework from '@/src/data/technologyData'; // Assuming this is the correct path to your data file
import ClientArea from '@/src/common/client-area';
import Image from 'next/image';

// style={{backgroundImage:`url(/assets/img/logo/footer-logo.png)`}}
const Technology = () => {
  return (
    <>
 
    <div>
      <div className="tp-technologies-main-content mt-10 mb-10  " >
          <div className="row mt-3">
            {Object.keys(framework).map((key) => (
              <div key={key} className="tp-technologies-sss">
                <div className="tp-technologies-row">
                  <div className="tp-technologies-details">
                    <h1 className="tp-technologies-framework-name">{framework[key].name}</h1>
                    <p className="tp-technologies-framework-description">{framework[key].description}</p>
            
                    <div className="tp-technologies-framework-info">
                      <a
                        href={framework[key].website}
                        className="tp-technologies-framework-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn more
                      </a>
                      <button className="tp-technologies-button">Contact Us</button>
                    </div>
                  </div>
                  <div className="tp-technologies-image">
                    <Image
                    src={framework[key].image}
                     alt="rahul" 
                     className='tp-technologies-framework-image'
                     />
{/* <Image  src={recent_post_data[0].img} /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

    </div>


    
    <ClientArea/>


    
    </>
  )
}

export default Technology;
