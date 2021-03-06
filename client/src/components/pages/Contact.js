import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Form from './Contact/Form'
import FormSuccess from './Contact/FormSuccess'

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isInterested, setIsInterested] = useState('')
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
        if (location.state === undefined) {
            //console.log('no msg')
        } else {
            setIsInterested(location.state.msg)
        }
    // eslint-disable-next-line
    }, [])

    function submitForm() {
        setIsSubmitted(true)
    }

    return (
        <div className="contact">

            <div className="contact-container">

                <div onMouse className="contact-form">
                    {!isSubmitted ?
                        (<Form submitForm={submitForm} msg={isInterested}/>) :
                        (<FormSuccess />)
                    }
                </div>
            </div>

        </div>
    )
}

export default Contact