import React from 'react'
import './CompanyCard.css'

class CompanyCard extends React.Component{
    render(){
        return(
            <div className='company-card-container'>
        <div>
            <div><img src='https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjZ6vSRrMbjAhWKnxQKHTYIBvIQjRx6BAgBEAU&url=https%3A%2F%2Fcodepen.io%2Fmportugal%2Fpen%2FNGpLwe&psig=AOvVaw0G3Au70Febh45HkaoOTPmJ&ust=1563809934417224'></img></div>
            <div>
                <p>CEO @ TONL</p>
                <p>Ameeta Londhia</p>
                <p>London</p>
            </div>
        </div>
        <div>
            <p><strong>Funding Rounds:</strong> 3</p>
            <p><strong>Amount Raise:</strong> £XXXX-XXXX</p>
            <p><strong>Revenue:</strong> £ XXXX-XXXX</p>
            <p><strong>Competititors:</strong> Getty Images, Monzo, N26, Deliveroo</p>
        </div>
    </div>
        )
    }
}
export default CompanyCard