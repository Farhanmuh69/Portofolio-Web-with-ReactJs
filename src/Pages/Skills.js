import Hero from "../Components/HeroSection/Hero";
import CardSkills from "../Components/Skills/CardSkills";
import SkillsImg from '../assets/Skills.webp';

function SkillsPage (){
    return(
        <>
            <div>
                <Hero
                cName="hero-mid"
                HeroImg={SkillsImg} 
                title="Skills"
                />
                <CardSkills/>
            </div>
        </>
    )
}

export default SkillsPage;