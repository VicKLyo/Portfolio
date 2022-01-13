import './ContactForm.css'
import { useState } from 'react';
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
init('user_azARhXlChaXMd0LooZ3tE');



const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_id';
            const templateId = 'template_id';
            const userId = 'user_azARhXlChaXMd0LooZ3tE';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));
    
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        
        <div id='contact' className="contact-form-container">
            <div className="contact-title-wrapper">
                <h2>Contact me !</h2>
            </div>
            <div className="contact-form">
                <input type="text" placeholder='Your Name' value={name}  onChange={e => setName(e.target.value)} />
                <input type="email" placeholder='Your Email Address' value={email} onChange={e => setEmail(e.target.value)} />
                <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <button onClick={submit}>Send Message</button>
                <span className={emailSent ? 'visible' : null}>Thank you for contacting me!</span>
            </div>
        </div>
    )
}

export default ContactForm
