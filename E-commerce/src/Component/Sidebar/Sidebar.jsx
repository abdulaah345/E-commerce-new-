import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaShoppingBag, FaShoppingCart, FaTags, FaTruck,FaHeart,FaCreditCard } from 'react-icons/fa';
import './../Sidebar/Sidebar.css'
import logo1 from './../../assets/6384231aaa 1.png'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div id='side'>
    <Navbar className="sidebar d-flex flex-column">
    <Nav className="flex-column">
        <a href="/">
        <img src={logo1} />
        </a>
   
      <Nav.Link  className="d-flex align-items-center" as={NavLink} to="/">
        <FaHome className="icon" /> 
      </Nav.Link>
      <Nav.Link className="d-flex align-items-center" as={NavLink} to="/bag">
        <FaShoppingBag className="icon" />
      </Nav.Link>
      <Nav.Link href="#cart" className="d-flex align-items-center" as={NavLink} to="/cart">
        <FaShoppingCart className="icon" /> 
      </Nav.Link>
      <Nav.Link href="#offer" className="d-flex align-items-center"as={NavLink} to="/offer">
        <FaTags className="icon" /> 
      </Nav.Link>
      <Nav.Link href="#truck" className="d-flex align-items-center" as={NavLink} to="/truck">
        <FaTruck className="icon" /> 
      </Nav.Link>
      <Nav.Link href="#fav" className="d-flex align-items-center" as={NavLink} to="/fav">
        <FaHeart className="icon" /> 
      </Nav.Link>
      <Nav.Link href="#fav" className="d-flex align-items-center" as={NavLink} to="/checks">
        <FaCreditCard className="icon" /> 
      </Nav.Link>
    </Nav>
  </Navbar>
  </div>
  )
}

export default Sidebar
