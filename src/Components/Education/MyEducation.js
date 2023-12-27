import './EducationStyles.css'
import EducationData from './EducationData';


const MyEducation = () => {
    return(
        <div>
            <EducationData
            className="education"
            title="My Education"
            description="Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since 
            the 1500s, when an unknown printer took a galley 
            of type and scrambled it to make a type specimen 
            book."
            titleCard="Universitas Amikom Yogyakarta"
            year="2021 - 2025"
            degree="Graduate in Computer Science (S1)"
            />
        </div>
    )
}

export default MyEducation;

