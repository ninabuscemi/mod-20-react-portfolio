import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './about.css';
import portfolioPic from './portfolio_pic.jpg'; // Import the image file



function About() {
    return (
        <>
            <Container className='about mx-auto mt-5 '>
                <Row className='about-body '>
                    <Col xs={12} md={8} className='justify-content-center'>
                        <div className='about-intro p-4 mobile-text'>
                            <h2>Hi, I'm <strong>Nina!</strong></h2>
                        </div>
                        <div className='about-description p-4 mobile-text'>
                            <p>
                            I’m Nina Buscemi, a certified Full Stack Web Developer and UX designer with a B.A. in Graphic Design. My journey into web development began with a passion for creativity and problem-solving. 
                            I've explored diverse disciplines like graphic and web design, human-centered design, motion graphics, and illustrations.
                            </p>
                            <p>As a full stack web developer, I blend design expertise with technical skills to create immersive digital experiences. 
                            Rooted in empathy and attention to detail, my approach ensures every project meets user needs. Inspired by my early experiences in Photoshop and HTML/CSS, I'm dedicated to crafting intuitive interfaces that make a difference.
                            </p>
                            <p></p>Looking forward, I'm committed to staying ahead in technology and delivering impactful solutions that resonate globally.
                        </div>
                        
                    </Col>
                        <Col xs={12} md={4} className='d-flex justify-content-center '>
                        <div>
                            <Image
    className='about-img img-responsive center-block d-block mx-auto'
    src={portfolioPic} // Use the imported variable as the source
    roundedCircle
/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    );
}


export default About;