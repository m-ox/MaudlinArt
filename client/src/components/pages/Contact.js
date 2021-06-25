import React, { useState } from 'react'

import mothbackground from '../../images/mothbackground.jpg'

import Form from './Contact/Form'
import FormSuccess from './Contact/FormSuccess'

function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

    return (
        <div className="contact">
            <div className="skewed-background">
                <img src={mothbackground} className="skewed-image" alt="form submission background"/>
            </div>
            <div className="skewed-content">
                <div className="hero-section">
                    <span className="smol">Don't be a stranger</span>
                    <h4 className="beeg">Contact Me.</h4>
                </div>
                <div className="contact-form">
                    {!isSubmitted ?
                        (<Form submitForm={submitForm}/>) :
                        (<FormSuccess />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact