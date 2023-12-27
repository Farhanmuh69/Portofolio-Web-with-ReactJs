import Description from "../Components/Description/Description";
// import Footer from "../Components/Footer/Footer";
import Hero from "../Components/HeroSection/Hero";
import HeroImg from '../assets/Hero.webp';

function Home (){
    return(
        <>
            <div>
                <Hero
                cName="hero"
                HeroImg={HeroImg} 
                title="Welcome To My Portofolio"
                subtitle="I am a full stack developer"
                url="/about"
                btnClass="show"
                buttonText="About Me"
                />
                <Description/>
                
            </div>
        </>
    )
}

export default Home;