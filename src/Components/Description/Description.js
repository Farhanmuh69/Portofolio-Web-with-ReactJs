import './DescriptionStyles.css'
import DescImg from '../../assets/Desc.jpg'
import DescImg2 from '../../assets/Desc2.jpg'
import DescriptionData from './DescriptionData'


const Description= () =>{
    return(
        <div>
            <DescriptionData
            className = "description"
            Title="Full Stack Developer"
            text="Salam, saya adalah Muhammad Farhan, seorang Full Stack Developer yang baru lulus. Saya tumbuh dengan semangat dan hasrat untuk mengembangkan solusi web yang inovatif. Dengan dasar pendidikan yang kuat dan tekad untuk terus belajar, saya siap untuk menciptakan 
            pengalaman web yang luar biasa. Saya memiliki pemahaman mendalam tentang bahasa pemrograman, kerangka kerja, dan teknologi terkini, serta siap untuk berkontribusi dalam pengembangan proyek-proyek menarik. Bersama-sama, mari kita menjelajahi dunia teknologi 
            dan membawa ide-ide brilian menjadi kenyataan di dunia digital."
            img={DescImg}
            img2={DescImg2}
            />
        </div>
    )
}

export default Description;