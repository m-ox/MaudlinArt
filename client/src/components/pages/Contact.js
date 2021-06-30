import React, { useState } from 'react'

import Form from './Contact/Form'
import FormSuccess from './Contact/FormSuccess'

function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

    return (
        <div className="contact">

            <div className="contact-container">
                <div className="hero-section">
                    <span className="smol">Don't be a stranger</span>
                    <h4 className="beeg">Contact Me</h4>
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