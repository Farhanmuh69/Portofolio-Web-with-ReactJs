import Achievments from "../Components/Awards/Achievments";
import Hero from "../Components/HeroSection/Hero";
import AwardImg from '../assets/Award.webp';

function Awards(){
    return(
        <>
            <div>
                <Hero
                cName="hero-mid"
                HeroImg={AwardImg} 
                title="Awards"
                />
                <Achievments/>
            </div>
        </>
    )
}

export default Awards;