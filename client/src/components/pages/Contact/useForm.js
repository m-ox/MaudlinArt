import {useState, useEffect} from 'react'
import emailjs from 'emailjs-com';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setErrors(validate(values))
        setIsSubmitting(true)
        
        // emailjs.sendForm('gmail', 'maudlin_template', e.target, 'user_uuwkLmasO07PFD6K5Kupt')
        //   .then((result) => {
        //       console.log(result.text);
        //       setIsSubmitting(true);
        //       console.log(isSubmitting)
        //       e.target.reset()
        //   }, (error) => {
        //       console.log(error.text);
        //   })
    }

    //I'm doing a no no but the internet says this is one of the few times this warning isn't neccessary
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect( () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            callback()
          }
        },
        [errors]
    )

    return {handleChange, values, handleSubmit, errors}
}

export default useForm