import CardProject from "../Components/CardProject/CardProject";
import Hero from "../Components/HeroSection/Hero";
import ExperImg from '../assets/Exper.webp';


function Experience (){
    return(
        <>
            <div>
                <Hero
                cName="hero-mid"
                HeroImg={ExperImg} 
                title="Experience"
                />
                <CardProject/>
            </div>
        </>
    )
}

export default Experience;