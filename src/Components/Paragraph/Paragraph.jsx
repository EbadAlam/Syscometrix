import React, { useEffect } from 'react'
import './Paragraph.css';
import gsap from 'gsap/all';
import SplitType from 'split-type';
function Paragraph({text}) {
    useEffect(() =>{
        const splitTypes = document.querySelectorAll('.cPText');
        splitTypes.forEach((char,i) => {
            const text = new SplitType(char,{types:'chars'});
            gsap.from(text.chars,{
                scrollTrigger:{
                    trigger:char,
                    start:'top 90%',
                    end:'top 50%',
                    // markers:true,
                    scrub:true,
                },
                opacity:0.2,
                // y:-50,
                stagger:2,
            })
        })
    },[])
  return (
    <div className='customPara'>
        <p className='cPText'>{text}</p>
    </div>
  )
}

export default Paragraph