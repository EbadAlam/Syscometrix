import React from 'react'
import { NavLink } from 'react-router-dom'
import './CustomButton.css';

function CustomButton({text}) {
  return (
    <NavLink className="customBtn">{text}</NavLink>
  )
}

export default CustomButton