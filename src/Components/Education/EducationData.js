import './EducationStyles.css'
import { Component } from 'react'

class EducationData extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className='educ-container'>
                    <div className='educ-text'>
                        <h2>{this.props.title}</h2>
                        <p>
                            {this.props.description}
                        </p>
                    </div>
                    <div className='educ-card'>
                        <div className='card-logo'>
                            <i className='fas fa-school'></i>
                        </div>
                        <h3>{this.props.titleCard}</h3>
                        <p>{this.props.year}</p>
                        <p>{this.props.degree}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default EducationData;