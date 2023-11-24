import React from 'react';
import PageHero from '../PageHero/PageHero';
import about from '../../assets/hero-bcg.jpeg'
import classes from './About.module.css'

const About = ({match}) => {
    return (
        <div>
            <PageHero url={match.url}/>
            <div className={classes.about}>
                <img src={about} alt='about' />
                <div className={classes.content}>
                <div className={classes.title}>
                    <h3>Our Story</h3>
                    <div className={classes.underLine}></div>
                </div>
                <div className={classes.info}>
                    <p style={{ marginBottom: '20px' }}>
                    In the bustling realm of digital innovation, our software company stands as a beacon of creativity and functionality, dedicated to crafting cutting-edge websites for diverse organizations. Armed with a passion for technology and a commitment to excellence, we embark on a journey to redefine online experiences for our clients. Our team of skilled developers, designers, and strategists collaborates seamlessly to transform visions into captivating digital realities.
                    </p> 
                    <p style={{ marginBottom: '20px' }}>
                    With a focus on versatility, we tailor our web development services to cater to the unique needs of various organizations, ranging from dynamic startups to established enterprises. Whether it's creating an intuitive e-commerce platform that enhances customer engagement or developing a sleek corporate website that reflects a brand's identity, we thrive on the challenge of turning ideas into interactive and visually stunning online spaces. Our commitment extends beyond mere code; we strive to understand the essence of each organization we partner with, ensuring that every website we craft becomes a powerful extension of their values, goals, and aspirations.
                    </p><p>
                    As a software company at the forefront of the industry, we not only build websites but also forge digital ecosystems that empower our clients to thrive in the ever-evolving online landscape. With a foundation built on innovation, collaboration, and a relentless pursuit of excellence, we are poised to continue shaping the digital future, one website at a time.
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;