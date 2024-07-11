import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Button, Card} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductDetails({cartItems, handleAddToCart}){
    const location = useLocation();
    const {title, price, images, description, category, id} = location.state;

    const [otherProducts, setOtherProducts] = useState([]);

    useEffect(()=> {
        async function getData(){
            const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id}/products?limit=10&offset=0`);  //escuela js --> swagger UI --> categories select last one
            console.log(response.data);
            setOtherProducts(response.data);
        }
        getData();
    },[])

    const navigate = useNavigate();

    return(
        <div>
            <Row style={{marginTop: 20, padding: 50}}>
                <Col lg={2}>
                    <div>
                        {images.map((image, index) => {
                            return(
                                <img key={index} src={image} width={150} style={{marginBottom:20, borderRadius: 8}}/>
                            )
                        })}
                    </div>
                </Col>
                <Col lg={5}>
                        <div>
                            <img src={images[0]} width={350} style={{marginBottom: 20, borderRadius: 8}}/>
                            <h3>{title}</h3>
                            <h3 style={{color: '#216ad9'}}>$ {price}</h3>
                            <div>{description}</div>
                            <Button onClick={() => {
                                if(id in cartItems){
                                    const currentItems = cartItems[id];
                                    handleAddToCart({[id]: {title, price, quantity: currentItems.quantity + 1}});
                                }
                                else{
                                    handleAddToCart({[id]: {title, price, quantity: 1}});
                                }
                                // navigate('/cart');
                            }}
                            style={{marginTop: 10}}>Add To Cart</Button>
                        </div>
                </Col>
                <Col lg={5}>
                    <div>
                        <h3>other products in Same Category</h3>
                        <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {otherProducts.map((product) => {
                            if(product.id == id) return
                        return(
                        <Card key={product.id} style={{width: '10rem', border: 'none', margin: 10}}>
                            <Card.Img src={product.images[0]}/>
                            <Card.Title>{product.title.split(' ')[0]}</Card.Title>
                            <Card.Text>$ {product.price}</Card.Text>
                            <Button onClick={()=> navigate(`/product/${product.id}`, {state: product})} style={{width: 150}}>View Product</Button>
                        </Card>
                    )
                })}
            </div>
                    </div>
                </Col>
            </Row>
           
        </div>
    )
}

