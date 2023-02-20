import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg">
        <Navbar />
        <div className="home-content">
          <h3 className="heading">
            "If you're applying for a creative position, don't be afraid to get
            a little creative on your resume."
          </h3>
          <br />
          
          <h3 className="home_navbar2_login">
            <Link to="/Header">
              <p className="start-btn">Let's Start...</p>
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Home

