import React from "react";
import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';
import "./About.css";

const About = () => (
  <>
    <Navbar />
    <div className="app__aboutus" id="about">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <br />
        <div className="spoon__img">
          <img src="https://play-lh.googleusercontent.com/TOXeSHl7jRENro3f0EBBIbTgR223V3MIXTnKOtHtOhUz3xOGZztx8zjj9LkDo34zcg" />
          <img
            src="https://play-lh.googleusercontent.com/k9f5461ozVZlakd3tLpw8XI2R4XvD3jrOBQl6H43XKUjTlGF50NBjEJhA7B1z3YoxA=rw"
            alt="about_spoon"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_scuPF5SuG-Rmjf1oMgfCcEg7a5ysa0cRwJfjDC8Vf7CGeHh0hQ_onc786MeQFLNTIoE&usqp=CAU"
            alt="about_spoon"
          />
          <img
            src="https://play-lh.googleusercontent.com/kyAt5S2m40lUB1NHjHu8tAHH3Sm5K6kU5tCq5hVMU0qyxk86qlbwp_zgO77IfIfHKg_G"
            alt="about_spoon"
          />
          <img
            src="https://play-lh.googleusercontent.com/q5oAj3tWDHBhIcLQWLs-7AzXCpOBqxmXl4xvha74YabEzTqI8JsrE0nXhMNGRQQXJBc=w240-h480-rw"
            alt="about_spoon"
          />
          <img
            src="https://lh3.googleusercontent.com/pbKIxdCxDj18Z6bl4q8wk5MHPJ9HY0Gn2e5_Of3YAdsfoeP1lHljGtKcbTrImYH8xHQ"
            alt="about_spoon"
          />
        </div>
        <p className="p__opensans">
          We believe that landing a job and building the perfect resume should
          be simple, and that a poorly written resume should be the last reason
          for not getting the job that you want. We’re dedicated to make sure
          that doesn’t happen. We aggregated millions of resumes for thousands
          of jobs and job descriptions from thousands of small businesses and
          large, international companies like Amazon, Apple, Morgan Stanley,
          Goldman Sachs, and more. With this information we built a machine
          learning engine that analyzed these resumes and job descriptions in
          order to build a resume matching profile – determining what keywords
          to use, what relevant experience to use, and, in general, what works
          and what doesn’t when making a resume.
          <br />
          <br />
          We don’t just rely on technology. We also have a team of certified
          resume writers, experts, hiring managers, and employers that assess
          resumes and job posts to make sure that our results are accurate and
          have the best chance for getting the job you want.
        </p>
        <br />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <br />
        <img
          src="https://www.lucasgroup.com/wp-content/uploads/2019/10/71-Top-5-Resume-Writing-Tips-900x600.jpg"
          alt="about_spoon"
          className="spoon__img"
        />
        <p className="p__opensans">
          The Average Job Posting Attracts 250 Resumes. Make Yours Stand Out. Of
          those 250 resumes, only 4 candidates will get interviews, and only one
          will get the job. ResumeBuilder.com is the premier resource for job
          seekers – our goal is to help you beat the other 249 candidates by
          providing you with the information, machine learning tools, and guides
          you need to build the best resume possible.
        </p>
      </div>
    </div>
    <Footer />
  </>
);

export default About;