import React, { useEffect, useRef, useState } from "react";
import logo from "../../Assets/Images/logo-white.png";
import "./Home.css";
import styled from "styled-components";
import projectImageOne from "../../Assets/Images/loftloom-main-landscape.webp";
import projectImageTwo from "../../Assets/Images/imusic-main-landscape.webp";
import projectImageThree from "../../Assets/Images/technis-main-landscape.webp";
import gsap from "gsap/all";
import introVideo from "../../Assets/Images/intro-video.mp4";
import Heading from "../../Components/Heading/Heading";
import Paragraph from "../../Components/Paragraph/Paragraph";
import dribble1 from "../../Assets/Images/dribbble1.webp";
import dribble2 from "../../Assets/Images/dribbble2.webp";
import dribble3 from "../../Assets/Images/dribbble3.webp";
import dribble4 from "../../Assets/Images/dribbble4.webp";
import dribble5 from "../../Assets/Images/dribbble5.webp";
import dribble6 from "../../Assets/Images/dribbble6.webp";
import TestimonialSlider from "../../Components/Slider/Slider";
import CustomButton from "../../Components/CustomButton/CustomButton";
import LightEffectBg from "../../Components/LightEffectBg/LightEffectBg";
import texasImage from '../../Assets/Images/texas-state-resize.jpg';
function Home() {
  useEffect(() => {
    const videoDiv = document.querySelector(".videoDiv");
    gsap
      .timeline({
        scrollTrigger: {
          trigger: videoDiv,
          start: "top 75%",
          end: "+=100vh",
          scrub: 2,
          // pin: true,
          // markers: true ,
          id: "video",
        },
      })
      .fromTo(
        videoDiv.querySelector("video"),
        {
          width: "13%",
          borderRadius: "100rem",
        },
        {
          width: "100%",
          borderRadius: "10rem",
        }
      );
    document.querySelectorAll(".recentWork").forEach((section) => {
      const image = section.querySelector(".image");
      const detail = section.querySelector(".detail");
      const direction = section.classList.contains("right") ? -80 : 80;
      const rotate = section.classList.contains("right") ? -15 : 15;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "-200px 100%",
            end: "bottom 90%",
            scrub: 2,
            // markers: true,
            id: "mm",
          },
        })
        .fromTo(
          image,
          {
            xPercent: direction,
            rotate: rotate,
          },
          {
            xPercent: 0,
            rotate: 0,
            duration: 1,
          },
          "<"
        )
        .fromTo(
          detail,
          {
            yPercent: 150,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
          },
          "<"
        );
    });

    document.querySelectorAll(".whoWeAre").forEach((section) => {
      const direction = section.classList.contains("right") ? -50 : 50;
      const rotate = section.classList.contains("right") ? -50 : 50;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 100%",
            end: "top 90%",
            scrub: 4,
            // markers: true,
            id: "services",
          },
        })
        .fromTo(
          section,
          {
            xPercent: direction,
            rotate: rotate,
          },
          {
            xPercent: 0,
            rotate: 0,
            duration: 2,
          },
          "<"
        )
        .fromTo(
          section,
          {
            yPercent: 150,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 2,
          },
          "<"
        );
    });
    const dribblesDiv = document.querySelectorAll(".dribble");
    gsap.to(dribblesDiv[0], {
      scrollTrigger: {
        trigger: dribblesDiv[0],
        start: "top 50%",
        end: `top 90%`,
        scrub: 4,
        // markers: true,
        id: `dribble`,
      },
      xPercent: -55,
      rotate: -20,
      ease: "power1.in",
    });
    gsap.to(dribblesDiv[2], {
      scrollTrigger: {
        trigger: dribblesDiv[0],
        start: "top 50%",
        end: `top 90%`,
        scrub: 4,
        // markers: true,
        id: `dribble`,
      },
      xPercent: -50,
      rotate: -10,
      ease: "power1.in",
    });

    gsap.to(dribblesDiv[1], {
      scrollTrigger: {
        trigger: dribblesDiv[1],
        start: "top 50%",
        end: `top 90%`,
        scrub: 4,
        // markers: true,
        id: `dribble`,
      },
      xPercent: 55,
      rotate: 20,
      ease: "power1.in",
    });
    gsap.to(dribblesDiv[3], {
      scrollTrigger: {
        trigger: dribblesDiv[1],
        start: "top 50%",
        end: `top 90%`,
        scrub: 4,
        // markers: true,
        id: `dribble`,
      },
      xPercent: 50,
      rotate: 10,
      ease: "power1.in",
    });

    gsap.to(dribblesDiv[4], {
      scrollTrigger: {
        trigger: dribblesDiv[0],
        start: "top 50%",
        end: `top 90%`,
        scrub: 4,
        // markers: true,
        id: `dribble`,
      },
      xPercent: -25,
      rotate: -20,
      ease: "power1.in",
    });
    gsap.to(dribblesDiv[5], {
      scrollTrigger: {
        trigger: dribblesDiv[1],
        start: "top 50%",
        end: `top 90%`,
        scrub: 4,
        // markers: true,
        id: `dribble`,
      },
      xPercent: 25,
      rotate: 10,
      ease: "power1.in",
    });
    gsap.to(".dribbleBack", {
      scrollTrigger: {
        trigger: dribblesDiv[2],
        start: "30% 100%",
        // end: 'bottom top',
        scrub: 6,
        // markers: true,
        id: "background-div",
      },
      yPercent: -70,
      // ease: 'power1.inOut',
    });

    const slider1 = document.querySelector(".slider1");
    const slider2 = document.querySelector(".slider2");

    const duration = 50;
    const forwardTimeline1 = gsap
      .timeline({ repeat: -1, paused: true })
      .fromTo(
        slider1,
        { xPercent: 25 },
        { xPercent: -25, duration: duration, ease: "linear" }
      );

    const reverseTimeline1 = gsap
      .timeline({ repeat: -1, paused: true })
      .fromTo(
        slider1,
        { xPercent: -25 },
        { xPercent: 25, duration: duration, ease: "linear" }
      );

    const forwardTimeline2 = gsap
      .timeline({ repeat: -1, paused: true })
      .fromTo(
        slider2,
        { xPercent: -25 },
        { xPercent: 25, duration: duration, ease: "linear" }
      );

    const reverseTimeline2 = gsap
      .timeline({ repeat: -1, paused: true })
      .fromTo(
        slider2,
        { xPercent: 25 },
        { xPercent: -25, duration: duration, ease: "linear" }
      );

    let currentTimeline1 = forwardTimeline1;
    let currentTimeline2 = forwardTimeline2;

    const switchAnimations = (current, forward, reverse, direction) => {
      const progress = current.progress();
      current.pause();
      const newTimeline = direction === "forward" ? forward : reverse;
      newTimeline.progress(1 - progress).play();
      return newTimeline;
    };

    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      let direction = st > lastScrollTop ? "forward" : "reverse";

      if (direction === "forward") {
        if (currentTimeline1 !== forwardTimeline1) {
          currentTimeline1 = switchAnimations(
            currentTimeline1,
            forwardTimeline1,
            reverseTimeline1,
            direction
          );
        }
        if (currentTimeline2 !== forwardTimeline2) {
          currentTimeline2 = switchAnimations(
            currentTimeline2,
            forwardTimeline2,
            reverseTimeline2,
            direction
          );
        }
      } else {
        if (currentTimeline1 !== reverseTimeline1) {
          currentTimeline1 = switchAnimations(
            currentTimeline1,
            forwardTimeline1,
            reverseTimeline1,
            direction
          );
        }
        if (currentTimeline2 !== reverseTimeline2) {
          currentTimeline2 = switchAnimations(
            currentTimeline2,
            forwardTimeline2,
            reverseTimeline2,
            direction
          );
        }
      }

      lastScrollTop = st <= 0 ? 0 : st;
    });

    currentTimeline1.play();
    currentTimeline2.play();
  }, []);

  const [active, setActive] = useState(false);
  const linksRef = useRef([]);

  useEffect(() => {
    const handleMouseOver = () => setActive(true);
    const handleMouseOut = () => setActive(false);

    linksRef.current.forEach((link) => {
      link.addEventListener("mouseover", handleMouseOver);
      link.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      // linksRef.current.forEach((link) => {
      //   link.removeEventListener("mouseover", handleMouseOver);
      //   link.removeEventListener("mouseout", handleMouseOut);
      // });
    };
  }, []);

  return (
    <>
      <LightEffectBg image={texasImage} text="we are syscomatix" />
      <div className="container">
        <div className="HomeBanner">
          <div className="HeadingDiv">
            <h3>We Are</h3>
          </div>
          <div className="LogoDiv">
            <img src={logo} style={{ width: "100%" }} alt="" />
          </div>
          <div className="AboutTextDiv">
            <p>
              We founded our company in 2010 and have since evolved into a
              prominent US-based web design and development business, serving
              thousands of clients.
            </p>
          </div>
          
        
        <div className="videoDiv">
            <video width="100%" autoPlay muted loop>
              <source src={introVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="recentWorkMain">
          <Heading HT1="Apps We" HT2="Built" />
          <Paragraph text="Lorem ipsum dolor sit amet consectetur" />
          <div className="recentWorks">
            <div className="recentWork left">
              <div className="detail">
                <div className="heading">
                  <h2>Project Name</h2>
                </div>
                <div className="keypoints">
                  <p>Project Keypoints</p>
                </div>
                <div className="projectDetail">
                  <CustomButton text="View Project" />
                </div>
              </div>
              <div className="image">
                <img src={projectImageOne} alt="" />
              </div>
            </div>
            <div className="recentWork right">
              <div className="detail">
                <div className="heading">
                  <h2>Project Name</h2>
                </div>
                <div className="keypoints">
                  <p>Project Keypoints</p>
                </div>
                <div className="projectDetail">
                  <CustomButton text="View Project" />
                </div>
              </div>
              <div className="image">
                <img src={projectImageTwo} alt="" />
              </div>
            </div>
            <div className="recentWork left">
              <div className="detail">
                <div className="heading">
                  <h2>Project Name</h2>
                </div>
                <div className="keypoints">
                  <p>Project Keypoints</p>
                </div>
                <div className="projectDetail">
                  <CustomButton text="View Project" />
                </div>
              </div>
              <div className="image">
                <img src={projectImageThree} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="whoWeAreMain">
          <div className="headingText">
            <Heading HT1={`Who`} HT2={`We Are`} />
            <Paragraph text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque inventore magni et, similique placeat deserunt quam ipsam, corporis ad dicta commodi eveniet" />
          </div>
          <div className="whoeWeAreDiv">
            <div className="whoWeAre right">
              <div className="serviceIconDiv">
                <h2>icon</h2>
              </div>
              <div className="serviceName">
                <h3>Mobile App Development</h3>
              </div>
            </div>
            <div className="whoWeAre left">
              <div className="serviceIconDiv">
                <h2>icon</h2>
              </div>
              <div className="serviceName">
                <h3>serviceName</h3>
              </div>
            </div>
            <div className="whoWeAre right">
              <div className="serviceIconDiv">
                <h2>icon</h2>
              </div>
              <div className="serviceName">
                <h3>serviceName</h3>
              </div>
            </div>
            <div className="whoWeAre left">
              <div className="serviceIconDiv">
                <h2>icon</h2>
              </div>
              <div className="serviceName">
                <h3>serviceName</h3>
              </div>
            </div>
            {/* <div className="whoWeAre right">
              <div className="serviceIconDiv">
                <h2>icon</h2>
              </div>
              <div className="serviceName">
                <h3>serviceName</h3>
              </div>
            </div>
            <div className="whoWeAre left">
              <div className="serviceIconDiv">
                <h2>icon</h2>
              </div>
              <div className="serviceName">
                <h3>serviceName</h3>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="testimonialSliderMain">
        <div className="container">
          <Heading HT1="partner" HT2="love" />
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
      <section className="autoSlider">
        <div class="tiles">
          <div class="tiles__line slider1">
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
            <h1 className="tiles__line-img">—wild ideas!</h1>
          </div>
          <div class="tiles__line inverse slider2">
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
            <h1 className="tiles__line-img">Let's Dive In!</h1>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="dribbleMain">
          <div className="dribbleDiv">
            <div className="dribble">
              <img src={dribble1} alt="" />
            </div>
            <div className="dribble">
              <img src={dribble2} alt="" />
            </div>
            <div className="dribble">
              <img src={dribble3} alt="" />
            </div>
            <div className="dribble">
              <img src={dribble4} alt="" />
            </div>
            <div className="dribble">
              <img src={dribble5} alt="" />
            </div>
            <div className="dribble">
              <img src={dribble6} alt="" />
            </div>
          </div>
          <div className="dribbleBack">
            <h1>Back</h1>
          </div>
        </div>
        <div className="socialMain">
          <Heading HT1="Heading" HT2="Text" TC={true} />
          <div className={`socials ${active ? "active" : ""}`}>
            <a href="#" ref={(el) => (linksRef.current[0] = el)}>
              <div className="social">
                <div className="name">Name</div>
                <div className="logo">logo</div>
              </div>
            </a>
            <a href="#" ref={(el) => (linksRef.current[1] = el)}>
              <div className="social">
                <div className="name">Name</div>
                <div className="logo">logo</div>
              </div>
            </a>
            <a href="#" ref={(el) => (linksRef.current[2] = el)}>
              <div className="social">
                <div className="name">Name</div>
                <div className="logo">logo</div>
              </div>
            </a>
            <a href="#" ref={(el) => (linksRef.current[3] = el)}>
              <div className="social">
                <div className="name">Name</div>
                <div className="logo">logo</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima non adipisci maiores tempore, tenetur vel voluptates dolorem, exercitationem sunt, laborum earum et quam illum error! Soluta quasi nihil quidem eligendi.",
    author: "John Doe",
    position: "CEO, Company A",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima non adipisci maiores tempore, tenetur vel voluptates dolorem, exercitationem sunt, laborum earum et quam illum error! Soluta quasi nihil quidem eligendi.",
    author: "John Doe",
    position: "CEO, Company A",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima non adipisci maiores tempore, tenetur vel voluptates dolorem, exercitationem sunt, laborum earum et quam illum error! Soluta quasi nihil quidem eligendi.",
    author: "John Doe",
    position: "CEO, Company A",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima non adipisci maiores tempore, tenetur vel voluptates dolorem, exercitationem sunt, laborum earum et quam illum error! Soluta quasi nihil quidem eligendi.",
    author: "John Doe",
    position: "CEO, Company A",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima non adipisci maiores tempore, tenetur vel voluptates dolorem, exercitationem sunt, laborum earum et quam illum error! Soluta quasi nihil quidem eligendi.",
    author: "John Doe",
    position: "CEO, Company A",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima non adipisci maiores tempore, tenetur vel voluptates dolorem, exercitationem sunt, laborum earum et quam illum error! Soluta quasi nihil quidem eligendi.",
    author: "John Doe",
    position: "CEO, Company A",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima non adipisci maiores tempore, tenetur vel voluptates dolorem, exercitationem sunt, laborum earum et quam illum error! Soluta quasi nihil quidem eligendi.",
    author: "John Doe",
    position: "CEO, Company A",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima non adipisci maiores tempore, tenetur vel voluptates dolorem, exercitationem sunt, laborum earum et quam illum error! Soluta quasi nihil quidem eligendi.",
    author: "John Doe",
    position: "CEO, Company A",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima non adipisci maiores tempore, tenetur vel voluptates dolorem, exercitationem sunt, laborum earum et quam illum error! Soluta quasi nihil quidem eligendi.",
    author: "John Doe",
    position: "CEO, Company A",
  },
];
export default Home;