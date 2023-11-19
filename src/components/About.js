import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

const About = () => {
    const now = 60;
    return (
        <section id='about' className='block about-block'>
            <Container fluid>
                <div className="title-holder">
                    <h2>About Us</h2>
                    <div className="subtitle">Lorem ipsum dolor sit amet.</div>
                </div>
                <Row>
                    <Col sm={6}>
                        <img src="/assets/images/img1.jpg" alt="" />
                    </Col>
                    <Col sm={6}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem! </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde repudiandae vitae earum ab soluta mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quidem dicta mollitia commodi quae laudantium vero sint nostrum consequatur nihil. </p>
                        <div className="progress-block">
                            <h4>HTML/CSS/JAVASCRIPT</h4>
                            <ProgressBar now={now} label={`${now}%`} />
                        </div>
                        <div className="progress-block">
                            <h4>RESPONSIVE</h4>
                            <ProgressBar now={now} label={`${now}%`} />
                        </div>
                        <div className="progress-block">
                            <h4>PHOTOSHOP</h4>
                            <ProgressBar now={now} label={`${now}%`} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About
