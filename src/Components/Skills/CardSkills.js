import './SkillsStyles.css'
import Card from '../Card/Card'
import React from '../../assets/React.webp'
import Js from '../../assets/Js.webp'
import PHP from '../../assets/php.webp'
import Next from '../../assets/Next.webp'
import Html from '../../assets/Html.webp'
import Css from '../../assets/Css.webp'



function CardSkills() {
    return(
        <div className="skills-container">
            <h1>My Skills</h1>
            <div className='skillscard-container'>
                <Card 
                heading="React JS"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                img={React}/>
                <Card
                heading="Next Js"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                img={Next}/>
                <Card 
                heading="Javascript"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                img={Js}/>
                <Card 
                heading="Html"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                img={Html}/>
                <Card
                heading="PHP"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                img={PHP}/>
                <Card 
                heading="CSS"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                img={Css}/>
                
            </div>
        </div>
    )
}

export default CardSkills;