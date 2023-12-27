import Hero from "../Components/HeroSection/Hero";
import AboutImg from '../assets/About.webp';
import AboutMe from "../Components/About/AboutMe";

function About (){
    return(
        <>
            <div>
                <Hero
                cName="hero-mid"
                HeroImg={AboutImg} 
                title="About Me"
                />
                <AboutMe/>
                
            </div>
        </>
    )
}

export default About;