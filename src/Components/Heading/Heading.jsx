import gsap from 'gsap/all';
import React, { useEffect } from 'react';
import './Heading.css';

function Heading({HT1,HT2}) {
    useEffect(() => {
        const headings = document.querySelectorAll('.recentWorkHdDiv .animated-heading');

        headings.forEach(heading => {
            gsap.fromTo(
                heading.querySelectorAll('span'),
                { backgroundPosition: '100% 0' },
                {
                    marginLeft: 0,
                    backgroundPosition: '0% 0',
                    duration: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: heading,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: 1,
                        // markers: true,
                    }
                }
            );
        });
    }, []);

    return (
        <div className="recentWorkHdDiv">
            <h1 className='animated-heading'>
                <span className='animated-heading-span-1'>{HT1}</span>
                <span className='animated-heading-span-2'>{HT2}</span>
            </h1>
        </div>
    );
}

export default Heading;
