import React, { useEffect } from 'react'
import logo from '../../Assets/Images/logo.png'
import './Home.css';
import styled from 'styled-components';
import projectImageOne from '../../Assets/Images/loftloom-main-landscape.webp';
import projectImageTwo from '../../Assets/Images/imusic-main-landscape.webp';
import projectImageThree from '../../Assets/Images/technis-main-landscape.webp';
import gsap from 'gsap/all';
import introVideo from '../../Assets/Images/intro-video.mp4';
import Heading from '../../Components/Heading/Heading';
import Paragraph from '../../Components/Paragraph/Paragraph';
import dribble1 from '../../Assets/Images/dribbble1.webp';
import dribble2 from '../../Assets/Images/dribbble2.webp';
function Home() {
  useEffect(() => {
    const videoDiv = document.querySelector('.videoDiv');
  gsap.timeline({
    scrollTrigger: {
      trigger: videoDiv,
      start: 'top 75%', 
      end: '+=100vh',
      scrub: 2,
      // pin: true, 
      // markers: true ,
      id:'video',
    }
  })
  .fromTo(videoDiv.querySelector('video'), 
  { 
    width: '13%', 
    borderRadius:'100rem'
  },
    { 
      width: '80%', 
      borderRadius:'10rem',
    }
  );
    document.querySelectorAll('.recentWork').forEach((section) => {
      const image = section.querySelector('.image');
      const detail = section.querySelector('.detail');
      const direction = section.classList.contains('right') ? -80 : 80;
      const rotate = section.classList.contains('right') ? -15 : 15;

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: '-200px 100%',
          end: 'bottom 90%',
          scrub: 2,
          // markers: true,
          id: 'mm',
        }
      })
      .fromTo(image,
        {
          xPercent: direction,
          rotate: rotate
        },
        {
          xPercent: 0,
          rotate: 0,
          duration: 1
        },
        '<'
      )
      .fromTo(detail,
        {
          yPercent: 150,
          opacity: 0
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1
        },
        '<'
      );
    });

    document.querySelectorAll('.whoWeAre').forEach((section) => {
      const direction = section.classList.contains('right') ? -50 : 50;
      const rotate = section.classList.contains('right') ? -50 : 50;

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 100%',
          end: 'top 90%',
          scrub: 4,
          // markers: true,
          id: 'services',
        }
      })
      .fromTo(section,
        {
          xPercent: direction,
          rotate: rotate
        },
        {
          xPercent: 0,
          rotate: 0,
          duration: 2
        },
        '<'
      )
      .fromTo(section,
        {
          yPercent: 150,
          opacity: 0
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 2
        },
        '<'
      );
    });
    const dribblesDiv = document.querySelectorAll('.dribble');
    dribblesDiv.forEach((section, index) => {
      const direction = section.classList.contains('right') ? 80 : -80;
      const rotate = section.classList.contains('right') ? 50 : -50;
    
      gsap.to(section, {
        scrollTrigger: {
          trigger: dribblesDiv[0],
          start: 'top 50%',
          end: `top 90%`, 
          scrub: 4,
          // markers: true,
          id: `dribble`,
          
        },
        xPercent: direction,
        rotate: rotate,
        ease:'power1.in',
      });
    });
    gsap.to('.dribbleBack', {
      scrollTrigger: {
        trigger: dribblesDiv[0],
        start: '30% 100%',
        // end: 'bottom top', 
        scrub: 10, 
        // markers: true, 
        id: 'background-div',
      },
      yPercent: -70, 
      // ease: 'power1.inOut', 
    });
   
    
  }, []); 
  return (
    <>
    {/* <WebGLCanvas /> */}
      <div className="container">
        <HomeBanner>
            <HeadingDiv>
              <h3>We Are</h3>
            </HeadingDiv>
            <LogoDiv>
              <img src={logo} style={{width:'100%'}} alt="" />
            </LogoDiv>
            <AboutTextDiv>
              <p>We founded our company in 2010 and have since evolved into a prominent US-based web design and development business, serving thousands of clients.</p>
            </AboutTextDiv>
            <div className="videoDiv">
              <video
                width="100%"       
                autoPlay          
                muted              
                loop               
              >
                <source src={introVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
        </HomeBanner>
        <div className="recentWorkMain">
        <Heading HT1={`Apps We`} HT2={`Built`}/>
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
                  <button className="projectDetailBtn">View Project</button>
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
                  <button className="projectDetailBtn">View Project</button>
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
                  <button className="projectDetailBtn">View Project</button>
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
            <Heading HT1={`Who`} HT2={`We Are`}/>
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
          </div>
        </div>
        </div>
        {/* <div className="partnerLoveMain">
            <Heading HT1="Partner" HT2="Love" />
            <div id="slider" className="slider" ref={sliderRef}>
              {pictures.map((item, index) => {
                return (
                  <Slide key={index} imageSource={item.source} content={item.content} />
                );
              })}
            </div>
        </div> */}
      <div className="container">
        <div className="dribbleMain">
            <div className="dribbleDiv">
              <div className="dribble">
                <img src={dribble1} alt="" />
              </div>
              <div className="dribble right">
                <img src={dribble2} alt="" />
              </div>
              <div className="dribble">
                <img src={dribble1} alt="" />
              </div>
              <div className="dribble right">
                <img src={dribble2} alt="" />
              </div>
              <div className="dribble">
                <img src={dribble1} alt="" />
              </div>
              <div className="dribble right">
                <img src={dribble2} alt="" />
              </div>
            </div>
            <div className="dribbleBack">
              <h1>Back</h1>
            </div>
          </div>
        <div className="socialMain">
        <Heading HT1="Join our" HT2={`Socials`}/>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Home

const HomeBanner = styled.div`
padding:5% 0;
height:150vh;
position:relative;
`;
const HeadingDiv = styled.div`
text-align:center;
font-size:40px;
`;
const LogoDiv = styled.div`
  width:40%;
  margin:0 auto;
`;
const AboutTextDiv = styled.div`
  margin:0 auto;
  text-align:center;
  width:40%;
`;