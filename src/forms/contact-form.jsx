import axios from "axios";
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { SEND_MAIL_API } from "../config/Constant";

const ContactForm = () => {
  const { handleSubmit } = useForm();
  const [formData, setFormData] = useState({})
  const formSubmit = () => {
    console.log('formData ', formData)
    axios.post(SEND_MAIL_API, formData)?.then((res) => {
      console.log('sss :: ', res)
    })?.catch((err) => console.log('error :: ', err));
  }

  const setValue = (e) => {
    
    setFormData((prev) => ({
      ...prev,
      [e?.target?.name]:e?.target?.value
    }))
  }

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)} method="POST">
        <div className="row tp-gx-10">
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="name"
                type="text"
                placeholder="Your Name*"
                required
                onChange={(e) => setValue(e)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="email"
                type="email"
                placeholder="Email Address*"
                required
                onChange={(e) => setValue(e)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="type"
                type="text"
                placeholder="Service Type"
                required
                onChange={(e) => setValue(e)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="phone"
                type="number"
                placeholder="Phone Number"
                required
                onChange={(e) => setValue(e)}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="tp-contact-input">
              <textarea
                name="message"
                placeholder="Enter Your Message here"
                onChange={(e) => setValue(e)}
              ></textarea>
            </div>
          </div>
          <div className="tp-contact-btn mt-10">
            <button type="submit" className="tp-btn">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
