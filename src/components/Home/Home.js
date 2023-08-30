import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Navbar />
            {/* Start Landing Page */}
            <div className="landing-page">
                <div className="content">
                    <div className="container">
                        <div className="info">
                            <h1>Looking For Inspiration</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>
                            <Link to="/header">
                                <button>Make My Resume</button>
                            </Link>
                        </div>
                        <div className="image">
                            <img src="https://cutewallpaper.org/24/resume-png/resume-clipart-png-5-clipart-world.png" alt='ptop'/>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Landing Page */}
            <Footer />

        </>
    )
}

export default Home