import React from 'react'

import useForm from './useForm'
import validate from './Validate'

function Form({submitForm, msg}) {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate)

    if (msg.length > 0) {
        values.message = msg
    }

    return (
        <>
        <div className="hero-section">
            <span className="smol">Don't be a stranger</span>
            <h4 className="beeg">Contact Me</h4>
        </div>

        <h2>If you are interested in an available piece or would like to discuss a showing, please get in touch with me here!</h2>
        <form className={`contact-form ${errors.class}`} onSubmit={handleSubmit}>
        
            <label>Name {errors.name && <p>{errors.name}</p>} </label>
            <input id="name" type="text" name="name" value={values.name} onChange={handleChange}/>
            
            <label>Email {errors.email && <p>{errors.email}</p>}</label>
            <input id="email" type="email" name="email" value={values.email} onChange={handleChange} />

            <label>Phone {errors.phone && <p>{errors.phone}</p>}</label>
            <input id="phone" type="tel" name="phone" value={values.phone} onChange={handleChange}/>

            <label>Message {errors.message && <p>{errors.message}</p>}</label>
            <textarea className="message" name="message" value={values.message} onChange={handleChange} />

            <div/>

            <input id="submit-btn" type="submit" value="Send" />
        </form>
        </>
    )
}

export default Form
