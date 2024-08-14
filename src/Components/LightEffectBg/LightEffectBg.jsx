import React, { useEffect, useRef } from "react";
import './LightEffectBg.css';

function LightEffectBg({ image }) {
  const maskingElementRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (maskRef.current) {
        const rect = maskRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;  

        if (maskingElementRef.current) {
          maskingElementRef.current.style.setProperty('--x', `${x}px`);
          maskingElementRef.current.style.setProperty('--y', `${y}px`);
        }
      }
    };

    const maskElement = maskRef.current;

    if (maskElement) {
      maskElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (maskElement) {
        maskElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="mask" ref={maskRef}>
      <div className="mask__wrapper">
        <div className="mask__primary">
          <img alt="Trionn" src={image} />
        </div>
        <div className="mask__secondary" ref={maskingElementRef}>
          <img alt="Trionn" src={image} />
        </div>
      </div>
    </div>
  );
}

export default LightEffectBg;