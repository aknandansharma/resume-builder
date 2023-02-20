import React, { useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import emailjs from '@emailjs/browser';
import  "./Contact.css";



function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_eksvv5f", e.target, "z0LMrr1FBmtT0j-fz")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };
  return (
    <>
    <Navbar/>
    <section class="contact" id="contact">
    <h1 class="headingcontact"> Contact <span> Us </span> </h1>

    <div class="icons-container">

        <div class="icons">
            <i class="fas fa-envelope"></i>
            <h3> Email</h3>
            <p>aknandansharma@gmail.com</p>
        </div>

        <div class="icons">
            <i class="fas fa-phone"></i>
            <h3>Number</h3>
            <p>+91-8757792653</p>
        </div>

        <div class="icons">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Address</h3>
            <p>Aurangabad 824121</p>
        </div>

    </div>
    {/* form section */}
      <div className='container_contact'>
        <h2 className='text-center'>Contact Form</h2>

        <form ref={form} onSubmit={sendEmail}
        className='form_control_card'>
          <input className='inputs' type="text"
            placeholder="Full Name"
            name="user_name" required/>
            <br/>
            <br/>
            <input className='inputs' type="email"
            placeholder="Enter Email"
            name="user_email" required/>
            <br/>
            <br/>
              <input className='inputs' type="text"
            placeholder="Subject"
            name="subject" required/>
            <br/>
            <br/>
            <textarea  className='inputs'name='message' cols="30" rows="10" placeholder='Type Message....'></textarea>
            <br/>
            <br/>
            <button type='submit' className='btn_contact'>Send Message</button>
        </form>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Contact
