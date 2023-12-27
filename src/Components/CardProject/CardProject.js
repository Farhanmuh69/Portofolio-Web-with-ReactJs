import './CardProjectStyles.css'
import Card from '../Card/Card'
import Polos from '../../assets/Polos.jpg'

function CardProject() {
    return(
        <div className="card">
            <h1>Recent Project</h1>
            <p>loremipsum domble</p>
            <div className='projectcard'>
                <Card 
                heading="What is Lorem Ipsum?"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                img={Polos}/>
                <Card
                heading="What is Lorem Ipsum?"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                img={Polos}/>
                <Card 
                heading="What is Lorem Ipsum?"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                img={Polos}/>
            </div>
        </div>
    )
}

export default CardProject;