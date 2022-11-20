import React from "react";
import "../Styles/About.css";
import vision from "../assets/Images/Svgs/vision.svg";
import img1 from "../assets/Images/Svgs/about.svg";
import img2 from "../assets/Images/Svgs/about1.svg";
import img3 from "../assets/Images/Svgs/about2.svg";
import reach from "../assets/Images/Svgs/reach.svg";
import headerImg from "../assets/Images/Svgs/header-img.svg";
import headerImg2 from "../assets/Images/Svgs/header-img2.svg";
const About = () => {
  return (
    <div className="About-container">
      <div className="about-hero">
        <div>
          <h1>About V-Arena</h1>
          <p>
            V-Arena is one of the best gaming site in the world, with a lot of
            visitors every month. V-Arena strives to put gamers first, giving
            them opportunities to search for games and play them which winner is
            left with NFTs.We connect millions of people to new gaming
            opportunities
          </p>
          <button>Enquire</button>
        </div>
        <img src={headerImg} alt="" srcSet="" className="header-img" />
        <img src={headerImg2} alt="" srcSet="" className="header-img2" />
      </div>
      <div className="about-body">
        <div className="about-mobile">
          <div className="static">
            <h1>500+</h1>
            <p>NFTs Generated</p>
          </div>
          <div className="static">
            <h1>100+</h1>
            <p>Daily gamers</p>
          </div>
          <div className="static">
            <h1>$125k</h1>
            <p>Money won</p>
          </div>
        </div>
        <div className="about-desktop">
          <div className="static">
            <h1>100+</h1>
            <p>Daily gamers</p>
          </div>
          <div className="static">
            <h1>500+</h1>
            <p>NFTs Generated</p>
          </div>

          <div className="static">
            <h1>$125k</h1>
            <p>Money won</p>
          </div>
        </div>
      </div>
      <div className="vision">
        <div className="vision-img">
          <img src={vision} alt="" srcSet="" />
        </div>
        <div className="vision-text">
          <h1>
            Our <br className="break" /> Vision
          </h1>
          <p>
            Our Vision is to help connect people in gaming system, we create an
            NFTs that can fight each other, programmed to solve little puzzles,
            they can also breed and improve themselves, at the end the winner
            goes with the NFTs. We foster a collaborative workplace that strives
            to create best experience for gamers.
          </p>
          <a href="/contact-us">
            <button>Contact Us</button>
          </a>
        </div>
      </div>
      <div className="about-team">
        <div className="about-team-text">
          <h1>
            Meet our excellent <span>team</span>
          </h1>
          <p>
            This project is a physics based NFT project that tends to evolve as
            the user continues playing and winning. Use our provided tools and
            quickly join the fun. Customize your look, boost it with equipment
            and get ready to play with your friends in the V-Arena
          </p>
          <button>View Team</button>
        </div>
        <div className=" about-team-img">
          <img src={img1} alt="" srcSet="" className="img1" />
          <img src={img2} alt="" srcSet="" className="img2" />
          <img src={img3} alt="" srcSet="" className="img3" />
        </div>
      </div>
      <div className="reach-out">
        <div className="reach-text">
          <h1>
            Reach <br /> Out
          </h1>
          <p>
            We are here to help. Kindly visit Meet the team, help center for
            answers to common questions or you can contact us directy.
          </p>
          <div className="contact-container">
            <a href="/faq-help">
              <button>Read FAQs</button>
            </a>

            <a href="/contact-us">
              <p>Contact Us</p>
            </a>
          </div>
        </div>
        <div className=" reach-img">
          <img src={reach} alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
};

export default About;
