import React from 'react'

import useForm from './useForm'
import validate from './Validate'

function Form({submitForm}) {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate)

    return (
        <>
        <h2>I'd love to hear about collaborations, showings, or if you just want to say hello that's fine too.</h2>
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
