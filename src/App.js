import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Mission from './components/Misson'
import Service from "./components/Service";
import Order from "./components/Order";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  const [cartItems, changeItems] = useState([])
  const [showDelivered, setShowDelivered] = useState(false);

  const handleClose = () => setShowDelivered(false);

  return (
    <div className="App">
     <Router>
          <Modal show={showDelivered} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Place Order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {
              cartItems.length === 0 ?
              <p>You need to select something to place the order</p> :
              <p>Order Placed! It will be delivered in approximately 93 minutes, please contact your driver at 303-526-8837!</p>
              }
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>

        <Navbar items={cartItems} handleCart={changeItems} setShow={setShowDelivered} />
        
        <Hero/>
        <Mission />
        <Service />
        <Order items={cartItems} handleCart={changeItems} />
        <footer className='footer mt-auto py-3 bg-dark text-white'>
        <div className='container'>Email q109037@icloud.com for more information</div>
        </footer>
        <Switch>
          {/* <Route path='/' exact component={Home} /> */}
          {/* <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
