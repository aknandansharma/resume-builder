import React from "react";
import Navbar from "../Navbar/Navbar";

import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";
import Body from "../Body/Body";

function Header() {
  return (
    <>
    <Navbar/>
    <div className="Container_Main">
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
    <br/>
    </div>
    <Body/>
    </>
  );
}

export default Header;
