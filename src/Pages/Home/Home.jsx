import React, { useEffect } from 'react'
import logo from '../../Assets/Images/logo.png'
import './Home.css';
import styled from 'styled-components';
import projectImageOne from '../../Assets/Images/loftloom-main-landscape.webp';
import projectImageTwo from '../../Assets/Images/imusic-main-landscape.webp';
import projectImageThree from '../../Assets/Images/technis-main-landscape.webp';
import gsap from 'gsap/all';
import introVideo from '../../Assets/Images/intro-video.mp4';
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
      markers: true ,
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

  const heading = document.querySelector('.recentWorkHdDiv').querySelector('h1');

  gsap.fromTo(
    'h1 span',
    { backgroundPosition: '100% 0'}, 
    {
      marginLeft:0,
      backgroundPosition: '0% 0', 
      duration: 1, 
      ease: 'none', 
      scrollTrigger: {
        trigger: heading,
        start: 'top 80%', 
        end: 'top 50%', 
        scrub: 1, 
        markers: true,
      }
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
          markers: true,
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
          yPercent: 100,
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


  }, []); 
  
  
  
  return (
    <>
      <HomeBanner>
        <div className="container">
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
        </div>
      </HomeBanner>
    <div className="recentWorkMain">
      <div className="container">
        <div className="recentWorkHdDiv">
          {/* <h1 data-text="Apps we built">Apps we built</h1> */}
          <h1 data-text="Apps we built">
            <span>Apps We</span>
            <span>Built</span>
          </h1>
          {/* <h4>They've been trending on the App Store</h4> */}
        </div>
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
    </div>
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