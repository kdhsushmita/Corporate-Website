import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <section id='contact' className='block contact-block'>
            <Container fluid>
                <div className="title-holder">
                    <h2>Contact Us</h2>
                    <div className="subtitle">get connected with us</div>
                </div>
                <Form className='contact-form'>
                    <Row>
                        <Col sm={4}>
                            <Form.Control type='text' placeholder="Enter your full name" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type='email' placeholder="Enter your email address" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type='tel' placeholder="Enter your contact number" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control as='textarea' placeholder="Leave a comment here" required />
                        </Col>
                    </Row>
                    <div className="btn-holder">
                        <Button type="submit">Submit</Button>
                    </div>
                </Form >
            </Container >
            <div className="google-map">
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28259.71856841566!2d85.36028205000001!3d27.702931250000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a266b342bc5%3A0x73bbfa829a89af1b!2sTribhuvan%20International%20Airport!5e0!3m2!1sen!2snp!4v1700395695755!5m2!1sen!2snp" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Container fluid>
                <div className="contact-info">
                    <ul>
                        <li>
                            <i class="fas fa-envelope"></i>
                            hello@domain.com
                        </li>
                        <li>
                            <i class="fas fa-phone"></i>
                            000-000-000
                        </li>
                        <li>
                            <i class="fas fa-map-marker-alt"></i>
                            London, United Kingdom
                        </li>
                    </ul>
                </div>
            </Container>
        </section >
    )
}

export default Contact
