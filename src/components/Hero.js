import React from 'react';
import '../App.css';
import { Dropdown, Image} from 'react-bootstrap';
import '../assets/css/Hero.css';
import warehouse from "../assets/image/warehouse.svg"

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Walmart Pharmacy With You</h1>
      <p>Needs That Delivers To Your Door</p>
      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
        Explore Categories
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Perscription</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Pharmacy Services</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Health & Insurance Resources</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        <Image src={warehouse} className="warehouse" />
    </div>
  );
}

export default HeroSection;