export default function validateInfo(values) {
    let errors = {}

    if(!values.name.trim()) {
        errors.name = "A name is required"
    }

    if(!values.email) {
        errors.email = "An email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "The email entered is invalid"
    }

    if(!values.phone.trim()) {
        errors.phone = "A 10 digit phone number is required"
    } else if (values.phone.length !== 10) {
        errors.message = 'The phone number entered does not have the required 10 digits'
    }

    if(!values.message.trim()) {
        errors.message = "A message is required"
    } else if (values.message.length < 15) {
        errors.message = 'The message must be at least 15 characters long'
    }

    if (errors) {
        console.log('there were errors in the form!')
        errors.class = "errors"
    }

    return errors
}