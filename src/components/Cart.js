import React from 'react';
import cart from "../assets/image/cart.svg";
import { Image, Dropdown, Button } from 'react-bootstrap';

function CartBtn(props) {
        

        return (
                <Dropdown autoClose="outside">
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                <Image src={cart} width="50vw"/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                {
                        props.items.length === 0 ?
                        <Dropdown.Item>No selected items</Dropdown.Item> :
                        props.items.map((product) => <Dropdown.Item>{product.split(" ")[0]}</Dropdown.Item>)
                }
                <Dropdown.Item>
                        <Button variant="danger" size="sm" onClick={() => props.handleCart(cart => [])}>
                                Clear Cart</Button>{' '}
                </Dropdown.Item>
                <Dropdown.Item>
                        <Button variant="success" size="sm" onClick={() => props.setShow(true)}>
                                Place Order</Button>
                </Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
        );
}

export default CartBtn;