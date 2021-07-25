import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import "../assets/css/Service.css";
import pharmacyApp from '../assets/image/pharmacy-app.svg'
import confirmation from "../assets/image/confirm-order.svg";
import door from '../assets/image/door.svg';

function ServiceSection(){
        return (
                <div className="service-container">
                        <h1>So How Does It Work?</h1>
                        <CardGroup className="cards" >
                                <Card>
                                        <Card.Img variant="top" src={pharmacyApp} className="card-img" />
                                                <Card.Body>
                                                <Card.Title>Pick Medicines/First Aid Supplies</Card.Title>
                                                <Card.Text>
                                                Acetaminophen, Aspirin, cough suppressant, Antibiotic ointment, Thermometer, etc.,
                                                pick what you need.
                                                </Card.Text>
                                                </Card.Body>
                                </Card>
                                        <Card>
                                                <Card.Img variant="top" src={confirmation} className="card-img" />
                                                <Card.Body>
                                                        <Card.Title>Place the Order</Card.Title>
                                                        <Card.Text>
                                                                Pay using cards or online payment platforms.
                                                        </Card.Text>
                                                </Card.Body>
                                        </Card>
                                <Card>
                                        <Card.Img variant="top" src={door} className="card-img" />
                                        <Card.Body>
                                                <Card.Title>Get It At Your Door</Card.Title>
                                                <Card.Text>
                                                        This is a wider card with supporting text below as a natural lead-in to
                                                        additional content. This card has even longer content than the first to
                                                        show that equal height action.
                                                </Card.Text>
                                        </Card.Body>
                                </Card>
                        </CardGroup>
                        <Button variant="warning" className="service-btn" href="#order-here">Try Now!</Button>
                </div>
        );
}

export default ServiceSection;