import React from 'react'

import useForm from './useForm'
import validate from './Validate'

function Form({submitForm}) {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate)

    return (
        <>
        <h2>I'd love to hear about collaborations, showings, or if you just want to say hello that's fine too.</h2>
        <form className={`contact-form ${errors.name} ${errors.email} ${errors.phone} ${errors.message}`} onSubmit={handleSubmit}>
            <label>Name</label>
            <input id="name" type="text" name="name" value={values.name} onChange={handleChange}/>
            {errors.name && <p>{errors.name}</p>}
            
            <label>Email</label>
            <input id="email" type="email" name="email" value={values.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}

            <label>Phone</label>
            <input id="phone" type="tel" name="phone" value={values.phone} onChange={handleChange}/>
            {errors.phone && <p>{errors.phone}</p>}

            <label>Message</label>
            <textarea id="message" name="message" value={values.message} onChange={handleChange} />
            {errors.message && <p>{errors.message}</p>}

            <input id="submit-btn" type="submit" value="Send" />
        </form>
        </>
    )
}

export default Form
