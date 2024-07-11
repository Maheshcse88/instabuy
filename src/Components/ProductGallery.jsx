import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"



export default function ProductGallery(){

    const [products, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        async function getProducts(){
            const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=30'); // npm install axios, platzi fake store API doc in google 
            console.log(response.data);
            setProduct(response.data);
        }
        getProducts();
    },[])

    return (
        <div style={{padding: 50}}>
            <h1>Select a product</h1>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {products.map((product) => {
                    const validImage = product.images.find(
                        (image) => !image.startsWith('["') && !image.endsWith('"]')
                    );
                    if(validImage){
                        return(
                            <Card key={product.id} style={{width: '20rem', border: 'none', margin: 10}}>
                               
                                    {validImage && <Card.Img src={validImage} />}
                                <Card.Title>{product.title.slice(0, 16)}</Card.Title>
                                <Card.Text>$ {product.price}</Card.Text>
                                <Button onClick={()=> navigate(`/product/${product.id}`, {state: product})} style={{width: 150}}>View Product</Button>
                            </Card>
                        )
                    }
                    return null;
                   
                })}
            </div>
        </div>
    )
}