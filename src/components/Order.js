import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Item from './Item'
import claritin from "../assets/image/Claritin.png";
import tylenol from "../assets/image/Tylenol.jpeg";
import advil from "../assets/image/Advil.png";
import tums from "../assets/image/Tums.png";

function OrderSection(props) {
        return (
                <Container id="order-here">
                        <h1>Order From These Medicines</h1>
                        <Row>
                        {
                                products.map( (product) => (
                                        <Item 
                                        title={product.title}
                                        text={product.text}
                                        img={product.img}
                                        id={product.id}
                                        cart={props.items}
                                        handleCart={props.handleCart} />
                                ))
                        }
                        </Row>
                </Container>
        );
}


let products = [
        {
                title: "Claritin 24 Hour Non-Drowsy Allergy Relief Tablets - Loratadine",
                text: "Powerful, 12-hour, non-drowsy indoor and outdoor allergy relief",
                img: claritin,
                id: 1
        },
        {
                title: "TYLENOL Pain Reliever/Fever Reducer Caplets Extra Strength",
                text: "When doing the activities you love, having powerful relief of headaches, muscle aches and pains is what’s important. Whether headaches or muscle aches are bringing your day to a halt, relieve those road blocks with doctor-recommended pain relief.",
                img: tylenol,
                id: 2
        },
        {
                title: "Advil Ibuprofen Pain Relief 200 mg Liqui-Gels",
                text: "The first and only FDA approved pain relief medication to combine Acetaminophen and Ibuprofen. Combining these two allows you to take a lower maximum daily dose of each medication and now get up to 8-hours of powerful relief.",
                img: advil,
                id: 3
        },
        {
                title: "TUMS Ultra Strength 1000",
                text: "TUMS Ultra Strength 1000 antacid contains DOUBLE the acid neutralizing power per tablet of regular strength TUMS!",
                img: tums,
                id: 4
        }
];

export default OrderSection;