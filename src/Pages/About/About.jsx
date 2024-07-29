import React from 'react'
import { NavLink } from 'react-router-dom'
import { RoutesConstant } from '../../Utils/Constant'

function About() {
  return (
    <>
    <div>About</div>
    <NavLink to={RoutesConstant.Home}>Home</NavLink>
    </>
  )
}

export default About