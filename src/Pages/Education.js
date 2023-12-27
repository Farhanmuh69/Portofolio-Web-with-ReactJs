import MyEducation from "../Components/Education/MyEducation";
import Hero from "../Components/HeroSection/Hero";
import EducImg from '../assets/Educ.webp';

function Education (){
    return(
        <>
            <div>
                <Hero
                cName="hero-mid"
                HeroImg={EducImg} 
                title="Education"
                />
                <MyEducation/>
            </div>
        </>
    )
}

export default Education;