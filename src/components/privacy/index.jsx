import React from "react"; 
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer";

import privacyData from "@/src/data/privacy-data";

const Privacy = () => {
  return (
    <>
      <HeaderOne />
      <main>
            {/* <Breadcrumb top_title="Our Services" page_title="Service" /> */}
            <div className="container py-5">
              <div className="row">
              {
                privacyData?.map((row) => {
                  return (
                    <div className="col-12">
                      <div className="d-flex flex-column gap-1 mt-4">
                          <h4>{row?.title}</h4>
                          {
                            Array.isArray(row?.desc) ? (
                             row?.desc?.map((e) => <p className="mb-0">{e}</p>) 
                            ) : <p className="mb-0">{row?.desc}</p>
                          }
                        </div>
                    </div>
                  )
                })
              }  
              </div>
            </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
