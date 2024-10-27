import React from 'react'
import Group66 from './../../assets/Group66.png'
import Group58 from './../../assets/Group 58.png'
import photo from './../../assets/wepik-export-202308270412471nu7 1.png'
import icon from './../../assets/Group 68.png'
import group1 from './../../assets/Group 1.png'
import group2 from './../../assets/Group 2.png'
import './../Home/Home.css'
import { Button } from 'react-bootstrap'
import { FaFacebook , FaTwitter , FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <img className='back-photo' src={Group66} alt='Home back ground'/>

      <div className="home-mar">
        <div className="home">
          <div className="logo">
              <img className= "photo" src={Group58} alt="SellKick Logo"/>
          </div>

          <div className="home-title">
            <h2>Setp Up Your Style</h2>
            <p>"Step into Style: Your Ultimate Online Shoe Haven!"</p>
          </div>

          <div className="home-img">
            <img src={photo} alt="shoe img" />
          </div>
        </div>
      </div>

    <div className="home-details">

      <div className="home-container">
        <div className="home-content">
          <p className="get-title">get</p>
          <img src={icon} alt="Home Icons" />
        </div>

        <div className="home-today">
          <p className="today-title">Today</p>
          <img src={group1} alt="" className="photo1" />
          <img src={group2} alt="" className="photo2" />

          <div className="btn-groups">
            <button>Buy Now</button>
            <button className="buy-btn">Buy Now</button>
            
          </div>
          
        </div>

      </div>

      <div className="tour-btn">
        <Link to="/fav">
          <button>Take Tour</button>
        </Link>
          
      </div>
    </div>

      <div className="home-footer">
        <div className="footer-content">
          <h2>Follow us</h2>

          <div className="icons">
            <a href="https://www.facebook.com/" className="icon-link">
              <FaFacebook className="icon"/>
            </a>
            
            <a href="https://www.twitter.com/" className="icon-link">
              <FaTwitter className="icon"/>
            </a>
            
            <a href="https://www.instagram.com/" className="icon-link">
              <FaInstagram className="icon"/>
            </a>
            

          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Home
