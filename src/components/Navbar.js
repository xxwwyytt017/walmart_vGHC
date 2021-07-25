import React, { useState } from 'react';
import { Navbar, Container, Nav, Image, Modal, Button} from 'react-bootstrap';
import CartBtn from './Cart';
import walmartLogo from '../assets/image/walmart-logo.png';
import '../assets/css/Navbar.css';

function NavbarSection(props) {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
                <Navbar collapseOnSelect sticky="top" expand="lg" variant="dark" className="nav">
                <Container>
                <Navbar.Brand href="/">
                        <Image src={walmartLogo} className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="nav-links">
                <Nav.Link onClick={handleShow}>My Innovation</Nav.Link>
                <Modal show={show}>
                        <Modal.Header>
                        <Modal.Title>Idea Behind</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                                This medicine delivery idea came up in my mind back when I was traveling by myself.
                                I was at the Airbnb alone when I had abdominal pain. I couldn't get up and buy the
                                medicine, and the only thing I could do was asking the pharmacist what can I do at
                                the moment to reduce pain over phone. This kind of service would offer help in my situation, but
                                there maybe more. Not everyone lives with someone else and not everyone knows what common
                                medicines they should keep at home.
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                        </Modal.Footer>
                </Modal>
                <CartBtn items={props.items} handleCart={props.handleCart} setShow={props.setShow} />
                </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        );
}

export default NavbarSection;