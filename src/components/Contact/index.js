import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    // handlechange events for input and textarea
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
              }
            //   console.log('errorMessage', errorMessage);
          }  
          
          if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value});
          }
    }

    // handlesubmit for the form submission
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // console.log(formState);

    // JSX
    return (
        <section>
            <h1 data-testId="h1tag">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                {/* name input */}
                <div>
                    <label htmlFor="name">Name:</label>
                    {/* onBlur attribute will fire the event once the user has changed focus from the input field, thus allowing the user to finish their entry before validating their input. */}
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                {/* email input */}
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                {/* message text area */}
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
                </div>
                {/* f the first value resolves to true, the second expression is evaluated. */}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testId="button" type="submit">Submit</button>
            </form>
        </section>
    )
}
    
export default ContactForm;