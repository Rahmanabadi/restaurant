import React, { useEffect, useRef, useState } from 'react';
import './CSS/Contact.css';  

const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  const sendEmail = () => {
      window.Email.send({
        Host: "smtp.elasticemail.com",
        Username: "fateme.rahmanabadi@example.com",
        Password: "0208A74EA9E16E38C87546B301138599E6E6",
        To: "fateme.rahmanabadi@gmail.com",
        From: "farah101@uni-duesseldorf.de",
        Subject: "New Message",
        Body: `Email: ${email}<br> Message: ${message}`,
      }).then(() => {
        setSuccessMessage(true);
        setEmail(''); 
        setMessage(''); 
        setTimeout(() => {
          setSuccessMessage(false);
        }, 10000);
      }).catch((error) => {
        console.error('Error sending email:', error);
      });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  const mapRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = [mapRef.current, formRef.current];
      const triggerPoint = window.innerHeight / 1.3;

      elements.forEach((element) => {
        if (element && element.getBoundingClientRect().top < triggerPoint) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="contact-page">
      <div className='row'>
        <div className="contact-container-1 col-12 col-md-6" ref={mapRef}>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.8609311192015!2d13.376987315649968!3d52.51627247981298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c7e703db3b%3A0xa048af8b28193092!2sBrandenburg%20Gate!5e0!3m2!1sen!2sde!4v1617557481234!5m2!1sen!2sde" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
          <p>Address: 123 Example Street, Berlin, Germany</p>
          <p>Phone: +49 123 456 789</p>
          <p>Email: contact@example.com</p>
        </div>

        <div className="contact-container-2 col-12 col-md-6" ref={formRef}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label>Message:</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            </div>
            <button type="submit">Send</button>
            {successMessage && <p>Email sent successfully!</p>}
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;

