import React, { useEffect } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import cartImg from "../assets/6.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Cart({cartItems}){
    console.log(cartItems);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        let tempPrice = 0;
        let tempQuantity = 0;
        Object.keys(cartItems).map((cartItemId) => {
            const details = cartItems[cartItemId];
            console.log(details)
            tempPrice += details.quantity * details.price;
            tempQuantity += details.quantity;
        });
        setTotalPrice(tempPrice);
        setTotalQuantity(tempQuantity);
    },[])

    return (
        <div>
            <Row style={{margin: 60}}>
                <Col style={{margin: 40}}>
                    <h3>Your Cart:</h3>
                    <div>
                    <Table>
                        <thead>
                            <tr>
                             <th>Name</th>
                             <th>Quantity</th>
                             <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(cartItems).map((cartItemId)=> {
                                const itemDetails = cartItems[cartItemId];
                                return(
                                    <tr>
                                        <td>{itemDetails.title}</td>
                                        <td>{itemDetails.quantity}</td>
                                        <td>{itemDetails.quantity * itemDetails.price}</td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td>Total</td>
                                <td>{totalQuantity}</td>
                                <td>{totalPrice}</td>
                            </tr>
                        </tbody>
                    </Table>
                    </div>
                    <Button onClick={()=>{
                         navigate('/checkout');
                    }}
                    >CheckOut</Button>
                </Col>
                <Col>
                    <img src={cartImg} height={500}/>
                </Col>
            </Row>      
        </div>
       
    )
}
