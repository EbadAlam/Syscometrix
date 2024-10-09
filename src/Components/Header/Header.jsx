import React from 'react'
import './Header.scss';
import logo from '../../Assets/Images/logo-white.png';
import { RoutesConstant } from '../../Utils/Constant';
import CustomButton from '../CustomButton/CustomButton';
import Menu from '../Menu/Menu';
import { NavLink } from 'react-router-dom';
function HeaderWeb() {
  return (
   <header className='header-web header container'>
    <div className="logo">
      <NavLink to='/'>
      <img src={logo} alt="Logo" />
      </NavLink>
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
      {/* <CustomButton text="Contact Us" /> */}
      {/* <Menu /> */}
    </div>
   </header>
  )
}

export default HeaderWeb