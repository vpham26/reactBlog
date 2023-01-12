import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='links'>
          <Link className='link' to="/?cat=TableTennis">
            <h6>TableTennis</h6>
          </Link>
          <Link className='link' to="/?cat=PickleBall">
            <h6>PickleBall</h6>
          </Link>
          <Link className='link' to="/?cat=Badminton">
            <h6>Badminton</h6>
          </Link>
          <span>John</span>
          <span>Logout</span>
          <span className='write'>
            <Link to="/write">Write</Link>
          </span>
        </div> 
      </div>
    </div>
  )
}

export default Navbar