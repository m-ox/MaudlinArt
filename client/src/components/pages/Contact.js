import React from 'react'
import emailjs from 'emailjs-com';

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'maudlin_template', e.target, 'user_uuwkLmasO07PFD6K5Kupt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

function Contact() {
    return (
        <div className="contact">
            <div className="hero-section">
                <span className="smol">Don't be a stranger</span>
                <span className="beeg">Contact Me.</span>
            </div>
            <div className="contact-form">
                <h2>I'd love to talk about collaborations, showings, or if you just want to say hello that's fine too!</h2>

                <form className="contact-form" onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="name" />
                    <label>Email</label>
                    <input type="email" name="email" />
                    <label>Phone</label>
                    <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}

export default Contact