import React, { useState } from "react";
import Particle from "../Particle";
import { AiFillMail,AiFillPhone } from "react-icons/ai";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const Contacts = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>      
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  };
  return (
    <>
    <Particle/>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
     // method="POST"
      //target="_blank"
  >
     
      <div className="contact-container" >
        <h2 style={{color:"white"}}>CONTACT <span className="purple">ME</span></h2>
         <AiFillMail style={{color:"white"}}/>Email:info.hollamik@gmail.com<br/>
         <AiFillPhone style={{color:"white"}}/>+2348064139378<br/><br/>

      <div className="contact">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <br/>
      <div className="contact">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <br/>
      <div className="contact-message">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <br/>
      <div className="contact-btn">
        <button
          className="btn"
          type="submit"
        >
          Send a message
        </button>
      </div>
      </div>
    </form>
    </>
  );
};
export default Contacts;