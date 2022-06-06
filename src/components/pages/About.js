import React from "react";
import "../../App.css";
import Footer from "../Footer";
import { Button } from "../Button";

export default function Products() {
  return (
    <div className="aboutPage">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Hello again!</h1>
          <h2>I am Anand Kumar</h2>
          <p>
            As mentioned before I am a ReactJS developer, and I enjoy
            designing and developing web applications. I am a final year student
            of IIIT Agartala and Mentor at EHuB. I like spending my free time watching movies,
            documentaries, playing and solving brainstorming puzzles.
          </p>
          <div className="hero-btns">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              link="/contact"
            >
              Contact me
            </Button>
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              link="https://docs.google.com/document/d/1Y9MOuSEEcdmue51whG7lymOZHy1GqrM3pLPvTg5C9qE/edit?usp=sharing"
            >
              Grab a copy of my resume
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
