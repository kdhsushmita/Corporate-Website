import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListGroup } from 'react-bootstrap';

const pricingData = [
    {
        id: 1,
        plan: 'Basic',
        price: '£49',
        features: ['Wireframing', 'Visual Design', '5 pages', 'Free Hosting', 'Support & Assistance'],
        link: 'https://www.google.com'
    },
    {
        id: 2,
        plan: 'Premium',
        price: '£149',
        features: ['Wireframing', 'Visual Design', '15 pages', 'Free Hosting', 'Support & Assistance'],
        link: 'https://www.facebook.com'
    },
    {
        id: 3,
        plan: 'Ultimate',
        price: '£349',
        features: ['Wireframing', 'Visual Design', 'Unlimited pages', 'Free Hosting', 'Support & Assistance'],
        link: 'https://www.twitter.com'
    }
]

const Pricing = () => {
    return (
        <section id='pricing' className='block pricing-block'>
            <Container fluid>
                <div className="title-helper">
                    <h2>PRICING &amp; PLANS</h2>
                    <div className="subtitle">
                        Check our pricing & plans
                    </div>
                </div>
                <Row>
                    {
                        pricingData.map((el) => {
                            return (
                                <Col sm={4} key={el.id}>
                                    <div className="heading">
                                        <h3>{el.plan}</h3>
                                        <span className="price">{el.price}</span>
                                    </div>
                                    <div className="content">
                                        <ListGroup>
                                            {el.features.map((item, index) => {
                                                return (
                                                    <ListGroup.Item key={index}>{item}</ListGroup.Item>
                                                )
                                            })}
                                        </ListGroup>
                                    </div>
                                    <div className="btn-holder">
                                        <a href={el.link} className='btn btn-primary'>Order Now</a>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>

    )
}

export default Pricing
