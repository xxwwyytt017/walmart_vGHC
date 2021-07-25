import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ItemCard(props) {

        return (
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.img} />
                        <Card.Body>
                                <Card.Title>{props.title}</Card.Title>
                                <Card.Text>{props.text}</Card.Text>
                                <Button variant="primary" onClick={() => 
                                        props.handleCart(cart => [...cart, props.title])}>
                                        Add to Cart</Button>
                        </Card.Body>
                </Card>
        );
}

export default ItemCard;