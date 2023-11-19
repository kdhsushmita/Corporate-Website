import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

var heroData = [
    {
        id: 1,
        image: '/assets/images/img-hero1.jpg',
        title: 'The perfect design for your website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
        link: 'https://www.google.com'
    },
    {
        id: 2,
        image: '/assets/images/img-hero2.jpg',
        title: 'Start Your Future Financial Plan',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
        link: 'https://www.facebook.com'
    },
    {
        id: 3,
        image: '/assets/images/img-hero3.jpg',
        title: 'Enjoy the Difference',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
        link: 'https://www.twitter.com'
    }
]


const CarousalHeroSection = () => {
    return (
        <section id='hero' className='hero-block'>
            <Carousel>
                {heroData.map((el) => {
                    return (
                        <Carousel.Item key={el.id}>
                            <img
                                className="d-block w-100"
                                src={el.image}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5>{el.title}</h5>
                                <p>{el.description}</p>
                                <a href={el.link} className='btn btn-primary'>Learn More <i className="fas fa-chevron-right"></i> </a>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}

            </Carousel>
        </section>
    )
}

export default CarousalHeroSection
