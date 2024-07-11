import {Row,  Col}  from 'react-bootstrap';

import {Carousel} from 'react-bootstrap';

import CarouselOneImg from "../assets/1.png"
import CarouselTwoImg from "../assets/4.png"
import CarouselThreeImg from "../assets/5.png"
import { Button } from 'react-bootstrap';

import CompanyOneImg from "../assets/10.png"
import CompanyTwoImg from "../assets/11.png"
import CompanyThreeImg from "../assets/12.png"
import CompanyFourImg from "../assets/13.png"
import CompanyFiveImg from "../assets/14.png"
import {useNavigate } from 'react-router-dom';



export default function Home({user}){
    const navigate = useNavigate()
    console.log(user)

    const handleCtaClick = () => {
        if(user){
            navigate('/ProductsGallery');
        }
        else{
            navigate('/Login');
        }
    }

    // function handleCtaClick(){
    //     if(user){
    //         navigate('/ProductsGallery');
    //     }
    //     else{
    //         navigate('/Login');
    //     }
    // }

    return(
        <div className='home-container'>
            <Carousel>
                <Carousel.Item>
                    <Row style={{margin: 0}}>
                        <Col >
                            <div style={{padding: 150}}>
                                <h1 style={{fontWeight: 700}}><i>SHOP WITH UTMOST</i></h1>
                                <h1 style={{color: '#216ad9', fontWeight: 700}}><i>STYLE</i></h1>
                                <h5 style={{marginBottom: 20}}>shop with our latest trendy products</h5>
                                <div style={{marginBottom: 20}}>
                                   <Button onClick={()=> {handleCtaClick()}}
                                    style={{width: 250}}>Browse Products</Button>
                                </div>
                                <div>
                                    <h3>Products available from:</h3>
                                    <img className='company-logo' src={CompanyOneImg}/>
                                    <img className='company-logo' src={CompanyTwoImg}/>
                                    <img className='company-logo' src={CompanyThreeImg}/>
                                    <img className='company-logo' src={CompanyFourImg}/>
                                    <img className='company-logo' src={CompanyFiveImg}/>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <img src={CarouselOneImg} style={{height: "85vh"}}/>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col >
                            <div style={{padding: 150}}>
                                <h1 style={{fontWeight: 700}}><i>SHOP WITH UTMOST</i></h1>
                                <h1 style={{color: '#216ad9', fontWeight: 700}}><i>STYLE</i></h1>
                                <h5 style={{marginBottom: 20}}>shop with our latest trendy products</h5>
                                <div style={{marginBottom: 20}}>
                                    <Button onClick={()=> {handleCtaClick()}}
                                     style={{width: 250}}>Browse Products</Button>
                                </div>
                                <div>
                                    <h3>Products available from:</h3>
                                    <img className='company-logo' src={CompanyOneImg}/>
                                    <img className='company-logo' src={CompanyTwoImg}/>
                                    <img className='company-logo' src={CompanyThreeImg}/>
                                    <img className='company-logo' src={CompanyFourImg}/>
                                    <img className='company-logo' src={CompanyFiveImg}/>
                                </div>
                            </div>
                        </Col>
                        <Col>
                        <img src={CarouselTwoImg} style={{height: "85vh"}}/>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col >
                            <div style={{padding: 150}}>
                                <h1 style={{fontWeight: 700}}><i>SHOP WITH UTMOST</i></h1>
                                <h1 style={{color: '#216ad9', fontWeight: 700}}><i>DISCOUNTS</i></h1>
                                <h5 style={{marginBottom: 20}}>shop with our latest trendy products</h5>
                                <div style={{marginBottom: 20}}>
                                    <Button onClick={()=> {handleCtaClick()}}
                                     style={{width: 250}}>Browse Products</Button>
                                </div>
                                <div>
                                    <h3>Products available from:</h3>
                                    <img className='company-logo' src={CompanyOneImg}/>
                                    <img className='company-logo' src={CompanyTwoImg}/>
                                    <img className='company-logo' src={CompanyThreeImg}/>
                                    <img className='company-logo' src={CompanyFourImg}/>
                                    <img className='company-logo' src={CompanyFiveImg}/>
                                </div>
                            </div>
                        </Col>
                        <Col>
                        <img src={CarouselThreeImg} style={{height: "85vh"}}/>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}