import { useRef, useEffect } from "react";
import "./Cursor.css";

const CustomCursor = () => {
//   const secondaryCursor = useRef(null);
//   const positionRef = useRef({
//     mouseX: 0,
//     mouseY: 0,
//     destinationX: 0,
//     destinationY: 0,
//     distanceX: 0,
//     distanceY: 0,
//     key: -1
//   });

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       if (secondaryCursor.current) {
//         const { clientX, clientY } = event;

//         // Adjust cursor position based on cursor size
//         const cursorWidth = secondaryCursor.current.offsetWidth;
//         const cursorHeight = secondaryCursor.current.offsetHeight;

//         secondaryCursor.current.style.left = `${clientX - cursorWidth / 2}px`;
//         secondaryCursor.current.style.top = `${clientY - cursorHeight / 2}px`;
//       }
//     };

//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   useEffect(() => {
//     const followMouse = () => {
//       positionRef.current.key = requestAnimationFrame(followMouse);
//       const {
//         mouseX,
//         mouseY,
//         destinationX,
//         destinationY,
//         distanceX,
//         distanceY
//       } = positionRef.current;
//       if (!destinationX || !destinationY) {
//         positionRef.current.destinationX = mouseX;
//         positionRef.current.destinationY = mouseY;
//       } else {
//         positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
//         positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
//         if (
//           Math.abs(positionRef.current.distanceX) +
//             Math.abs(positionRef.current.distanceY) <
//           0.1
//         ) {
//           positionRef.current.destinationX = mouseX;
//           positionRef.current.destinationY = mouseY;
//         } else {
//           positionRef.current.destinationX += distanceX;
//           positionRef.current.destinationY += distanceY;
//         }
//       }
//       if (secondaryCursor && secondaryCursor.current)
//         secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
//     };
//     followMouse();
//   }, []);
//   return (
//     <div className={`cursor-wrapper default`}>
//       <div className="secondary-cursor" ref={secondaryCursor}></div>
//     </div>
//   );
};

export default CustomCursor;
