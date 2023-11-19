import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const blogData = [
    {
        id: 1,
        image: '/assets/images/blog1.jpg',
        time: '15 Nov 2016',
        title: 'Coffee Lovers',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
        link: 'https://www.google.com'
    },
    {
        id: 2,
        image: '/assets/images/blog2.jpg',
        time: '10 Nov 2016',
        title: 'Tips for UI Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
        link: 'https://www.facebook.com'
    },
    {
        id: 3,
        image: '/assets/images/blog3.jpg',
        time: '07 Nov 2016',
        title: 'Beautiful Day',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
        link: 'https://www.twitter.com'
    }
]


const Blogs = () => {
    return (
        <section id='blog' className='block blog-block'>
            <Container fluid>
                <div className="title-holder">
                    <h2>Our Blogs</h2>
                    <div className="subtitle">Blogs we provide</div>
                </div>
                <Row>
                    {
                        blogData.map((el) => {
                            return (
                                <Col sm={4} key={el.id}>
                                    <div className="holder">
                                        <Card>
                                            <Card.Img variant="top" src={el.image} />
                                            <Card.Body>
                                                <time>{el.time}</time>
                                                <Card.Title>{el.title}</Card.Title>
                                                <Card.Text>
                                                    {el.description}
                                                </Card.Text>
                                                <a href={el.link} className='btn btn-primary'>Read More <i className="fas fa-chevron-right"></i></a>
                                            </Card.Body>
                                        </Card>
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

export default Blogs
