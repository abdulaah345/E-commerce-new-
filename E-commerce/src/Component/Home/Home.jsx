// Home.js
import React from 'react';
import Group66 from './../../assets/Group66.png';
import Group58 from './../../assets/Group 58.png';
import photo from './../../assets/wepik-export-202308270412471nu7 1.png';
import icon from './../../assets/Group 68.png';
import group1 from './../../assets/Group 1.png';
import group2 from './../../assets/Group 2.png';
import { Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container-fluid p-0 " >
      <img className="img-fluid w-100 " src={Group66} alt="Home background" style={{ height: '100vh' }} />

      <div className="home d-flex justify-content-around align-items-center py-5">
        <div className="logo text-center">
          <img src={Group58} alt="SellKick Logo" className="img-fluid" style={{ width: '200px' }} />
        </div>
        <div className="home-title text-center">
          <h2 className="display-1">Set Up Your Style</h2>
          <p className="lead text-muted">"Step into Style: Your Ultimate Online Shoe Haven!"</p>
        </div>
        <div className="home-img">
          <img src={photo} alt="Shoe img" className="img-fluid" style={{ maxWidth: '500px', height: 'auto' }} />
        </div>
      </div>

      <div className="home-details text-center mt-5">
        <div className="home-container row justify-content-center">
          <div className="col-md-4">
            <p className="display-3">get</p>
            <img src={icon} alt="Home Icons" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <p className="display-4">Today</p>
            <img src={group1} alt="Item 1" className="img-fluid mb-2" style={{ width: '100px' }} />
            <img src={group2} alt="Item 2" className="img-fluid mb-2" style={{ width: '100px' }} />
            <div className="d-flex justify-content-center gap-2 mt-3">
              <Button variant="primary" className="px-4">Buy Now</Button>
              <Button variant="secondary" className="px-4">Buy Now</Button>
            </div>
          </div>
        </div>

        <div className="tour-btn mt-5">
          <Link to="/fav">
            <Button variant="dark" size="lg" className="px-5 py-3">Take Tour</Button>
          </Link>
        </div>
      </div>

      <footer className="home-footer bg-light text-center py-5 mt-5">
        <h2 className="mb-4">Follow us</h2>
        <div className="icons d-flex justify-content-center gap-3">
          <a href="https://www.facebook.com/" className="text-dark fs-2">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com/" className="text-dark fs-2">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/" className="text-dark fs-2">
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
