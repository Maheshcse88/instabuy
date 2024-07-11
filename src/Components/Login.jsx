import { Col, Row, Form, Button } from "react-bootstrap";



import LoginImg from "../assets/2.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({setUser}){
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    return(
        <div style={{backgroundColor: "#216ad9"}}>
            <Row style={{padding: 75}}>
                <Col style={{padding: 100}}>
                    <h1 style={{color: "white"}}>INSTABUY</h1>
                    <h1 style={{color: "white"}}>One Place To Order Products</h1>
                    <Form>
                        <div style={{display: "flex", justifyContent: "space-between", width: '70%', marginTop: 15}}>
                        <Form.Group style={{width: "49%"}} className="mb-3" controlId="formBasicEmail">
                         <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.currentTarget.value)} />
                        </Form.Group>

                        <Form.Group style={{width: "49%"}} className="mb-3" controlId="formBasicPassword">
                         <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        </div>
                        <Button onClick={() => {
                            localStorage.setItem('userEmail', email)
                            setUser(email)
                            navigate('/')
                        }}
                         style={{width: '70%',marginBottom: 25, backgroundColor: "#216ad9", borderWidth: 1, borderColor: "white" }} variant="primary" type="submit">
                            Submit
                        </Button>
                        <div style={{color: "white"}}>
                            Join The Club, <a style={{color: "white"}} onClick={()=> navigate('/SignUp')}>Clich Here</a>
                        </div>
                    </Form>
                </Col>
                <Col>
                    <img src={LoginImg} style={{height: "70vh"}} />
                </Col>
            </Row>
        </div>
    )
}