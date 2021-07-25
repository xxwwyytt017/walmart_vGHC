import React, {useState} from 'react';
import { Image, Button, OverlayTrigger, Tooltip, Modal, Form, FormControl, Popover} from 'react-bootstrap';
import "../assets/css/Mission.css";
import drug from "../assets/image/drug.svg";

function MissonSection() {

        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);


        const popover = (
        <Popover id="popover-basic">
                <Popover.Body>
                Sorry, the service is temporarily not available at this location
                </Popover.Body>
        </Popover>
        );

        const renderTooltip = (props) => (
                <Tooltip id="button-tooltip" {...props}>
                 Click to see if available at your location
                </Tooltip>
              );

        return (
                <div className="mission-container">
                        <h1>Our Mission For Your Health</h1>
                        <p>We know that not everyone has the capability to pick up
                                the medications they need. <br/>
                                We are also aware that 
                                sometimes people don't have the physical capacity
                                to get to the pharmacy, even for non-perscribed medications.
                                <br/>
                                So here we are.
                        </p>
                        <Image src={drug} className="drug" />
                        <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                        >
                        <Button variant="light" onClick={handleShow}>
                                Medications that delivers to your door
                        </Button>
                        </OverlayTrigger>
                        <Modal show={show} onHide={handleClose}>
                                <Modal.Header>
                                <Modal.Title>Location Availability</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Search for your location
                                <Form className="d-flex">
                                        <FormControl
                                                type="search"
                                                placeholder="City Name, ex.San Diego"
                                                className="mr-2"
                                                aria-label="Search"
                                        />
                                        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                                <Button variant="outline-success" >
                                                        Search
                                                </Button>
                                        </OverlayTrigger>
                                        
                                </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                Close
                                </Button>
                                </Modal.Footer>
                        </Modal>
                </div>
        );
}

export default MissonSection;