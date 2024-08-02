import React, { useEffect, useRef, useState } from 'react'
import logo from '../../Assets/Images/logo.png'
import './Home.css';
import styled from 'styled-components';
import projectImageOne from '../../Assets/Images/loftloom-main-landscape.webp';
import projectImageTwo from '../../Assets/Images/imusic-main-landscape.webp';
import projectImageThree from '../../Assets/Images/technis-main-landscape.webp';
import gsap, { Draggable } from 'gsap/all';
import introVideo from '../../Assets/Images/intro-video.mp4';
import Heading from '../../Components/Heading/Heading';
import Paragraph from '../../Components/Paragraph/Paragraph';
import dribble1 from '../../Assets/Images/dribbble1.webp';
import dribble2 from '../../Assets/Images/dribbble2.webp';
import dribble3 from '../../Assets/Images/dribbble3.webp';
import dribble4 from '../../Assets/Images/dribbble4.webp';
import dribble5 from '../../Assets/Images/dribbble5.webp';
import dribble6 from '../../Assets/Images/dribbble6.webp';
import FluidCanvas from '../../Components/FluidCanvas/FluidCanvas';
import CustomCursor from '../../Components/Cursor/Cursor';

const Slide = ({ imageSource, content }) => {
  return (
    <div className="slide">
      <div className="preview">
        <img src={imageSource} alt="The Plant" draggable="false" />
      </div>
      <div className="infos">
        <h3>{content.date}</h3>
        <h2>{content.desc}</h2>
      </div>
    </div>
  );
};
const pictures = [
  {
    source:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    content: {
      date: "04.29.2020",
      desc: "Behind the leaves. "
    }
  },
  {
    source:
      "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    content: {
      date: "04.28.2020",
      desc: "Minimal eucalyptus leaves"
    }
  },
  {
    source:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
    content: {
      date: "04.28.2020",
      desc: "Rubber Plant"
    }
  },
  {
    source:
      "https://images.unsplash.com/photo-1506543277633-99deabfcd722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=623&q=80",
    content: {
      date: "04.27.2020",
      desc: "Person holding leaf plant"
    }
  },
  {
    source:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    content: {
      date: "04.23.2020",
      desc: "Green leafed plant photography"
    }
  },
  {
    source:
      "https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    content: {
      date: "04.21.2020",
      desc: "Gree leafed plant in focus photography"
    }
  },
  {
    source:
      "https://images.unsplash.com/photo-1536882240095-0379873feb4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    content: {
      date: "04.23.2020",
      desc: "I took the shot at home with Sigma 105 mm"
    }
  },
  {
    source:
      "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    content: {
      date: "04.21.2020",
      desc: "Cheese plant leaf in clear glass vase"
    }
  }
];


function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const sliderRef = useRef(null);
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
    gsap.to(dribblesDiv[0],{
      scrollTrigger: {
        trigger: dribblesDiv[0],
        start: 'top 50%',
        end: `top 90%`, 
        scrub: 4,
        // markers: true,
        id: `dribble`,
        
      },
      xPercent: -55,
      rotate: -20,
      ease:'power1.in',
    });
    gsap.to(dribblesDiv[2],{
      scrollTrigger: {
        trigger: dribblesDiv[0],
        start: 'top 50%',
        end: `top 90%`, 
        scrub: 4,
        // markers: true,
        id: `dribble`,
        
      },
      xPercent: -50,
      rotate: -10,
      ease:'power1.in',
    });

    gsap.to(dribblesDiv[1],{
      scrollTrigger: {
        trigger: dribblesDiv[1],
        start: 'top 50%',
        end: `top 90%`, 
        scrub: 4,
        // markers: true,
        id: `dribble`,
        
      },
      xPercent: 55,
      rotate: 20,
      ease:'power1.in',
    });
    gsap.to(dribblesDiv[3],{
      scrollTrigger: {
        trigger: dribblesDiv[1],
        start: 'top 50%',
        end: `top 90%`, 
        scrub: 4,
        // markers: true,
        id: `dribble`,
        
      },
      xPercent: 50,
      rotate: 10,
      ease:'power1.in',
    });

    gsap.to(dribblesDiv[4],{
      scrollTrigger: {
        trigger: dribblesDiv[0],
        start: 'top 50%',
        end: `top 90%`, 
        scrub: 4,
        // markers: true,
        id: `dribble`,
        
      },
      xPercent: -25,
      rotate: -20,
      ease:'power1.in',
    });
    gsap.to(dribblesDiv[5],{
      scrollTrigger: {
        trigger: dribblesDiv[1],
        start: 'top 50%',
        end: `top 90%`, 
        scrub: 4,
        // markers: true,
        id: `dribble`,
      },
      xPercent: 25,
      rotate: 10,
      ease:'power1.in',
    });
    // dribblesDiv.forEach((section) => {
    //   gsap.from(section, {
    //     scrollTrigger: {
    //       trigger: section,
    //       start: 'top 70%',
    //       end: `bottom top`, 
    //       scrub: 2,
    //       // markers: true,
    //       id: `dribble`,
          
    //     },
    //     xPercent: 0,
    //     rotate: 0,
    //     ease:'power1.in',
    //   });
    // });
    gsap.to('.dribbleBack', {
      scrollTrigger: {
        trigger: dribblesDiv[2],
        start: '30% 100%',
        // end: 'bottom top', 
        scrub: 6, 
        // markers: true, 
        id: 'background-div',
      },
      yPercent: -70, 
      // ease: 'power1.inOut', 
    });
   
    // console.log(sliderRef.current.clientWidth, sliderRef.current.innerWidth);
    // Draggable.create(sliderRef.current, {
    //   type: "x",
    //   bounds: {
    //     minX: -sliderRef.current.clientWidth + window.innerWidth * 0.88,
    //     maxX: 0
    //   }
    // });
  }, []); 



  const [active, setActive] = useState(false);
  const linksRef = useRef([]);

  useEffect(() => {
    const handleMouseOver = () => setActive(true);
    const handleMouseOut = () => setActive(false);

    linksRef.current.forEach(link => {
      link.addEventListener('mouseover', handleMouseOver);
      link.addEventListener('mouseout', handleMouseOut);
    });

    // Cleanup event listeners on component unmount
    return () => {
      linksRef.current.forEach(link => {
        link.removeEventListener('mouseover', handleMouseOver);
        link.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);
  return (
    <>
    <FluidCanvas />
    <CustomCursor />
    <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
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
        {/* <div id="slider" className="slider" ref={sliderRef}>
      {pictures.map((item, index) => {
        return (
          <Slide key={index} imageSource={item.source} content={item.content} />
        );
      })}
    </div> */}
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
          <div className={`socials ${active ? 'active' : ''}`}>
            <a href="#" ref={el => linksRef.current[0] = el}>
              <div className="social">
                <div className="name">
                  Name
                </div>
                <div className="logo">
                  logo
                </div>
              </div>
            </a>
            <a href="#" ref={el => linksRef.current[1] = el}>
              <div className="social">
                <div className="name">
                  Name
                </div>
                <div className="logo">
                  logo
                </div>
              </div>
            </a>
            <a href="#" ref={el => linksRef.current[2] = el}>
              <div className="social">
                <div className="name">
                  Name
                </div>
                <div className="logo">
                  logo
                </div>
              </div>
            </a>
            <a href="#" ref={el => linksRef.current[3] = el}>
              <div className="social">
                <div className="name">
                  Name
                </div>
                <div className="logo">
                  logo
                </div>
              </div>
            </a>
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