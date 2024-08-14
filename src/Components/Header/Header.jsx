import React from 'react'
import './Header.css';
import logo from '../../Assets/Images/logo-white.png';
import { RoutesConstant } from '../../Utils/Constant';
import CustomButton from '../CustomButton/CustomButton';
function HeaderWeb() {
  return (
   <header className='header-web header'>
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
    {/* <div className="menu">
      <ul>
        <li>
          <NavLink to={RoutesConstant.Home}>Home</NavLink>
        </li>
        <li>
          <NavLink>Services</NavLink>
        </li>
        <li>
          <NavLink>Portfolio</NavLink>
        </li>
        <li>
          <NavLink to={RoutesConstant.About}>About</NavLink>
        </li>
      </ul>
    </div> */}
    <div className="contactBtnDiv">
      {/* <NavLink className="contactBtn">Contact Us</NavLink> */}
      <CustomButton text="Contact Us" />
    </div>
   </header>
  )
}

export default HeaderWeb