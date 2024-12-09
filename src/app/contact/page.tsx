import React from 'react';

function Contact() {
    return (
        <div style={{
            padding: '20px',
            fontFamily: 'Arial',
            lineHeight: '1.6',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh', // Ensures the content is vertically centered
            textAlign: 'center' // Centers the text horizontally
        }}>
            <h1 style={{
                fontSize: '48px', // Larger font size for heading
                color: 'transparent',
                background: 'linear-gradient(45deg, #009688, #00695c)', // Green gradient
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '20px' // Spacing below the header
            }}>
                Contact Us
            </h1>
            <p style={{
                maxWidth: '600px', // Sets max width for readability
                fontSize: '20px' // Slightly larger paragraph text
            }}>
                Have questions or need to get in touch? Send us a message or email us at <a href="mailto:info@example.com" style={{color: '#00695c', textDecoration: 'none'}}>info@example.com</a>.
            </p>
            {/* Contact form or additional contact details could go here */}
            <form style={{maxWidth: '600px', width: '100%'}}>
                <input type="text" placeholder="Your Name" style={inputStyle} />
                <input type="email" placeholder="Your Email" style={inputStyle} />
                <textarea placeholder="Your Message" style={{...inputStyle, height: '150px'}}></textarea>
                <button type="submit" style={buttonStyle}>Send Message</button>
            </form>
        </div>
    );
}

// Styles for inputs and button
const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
};

const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#009688',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px'
};

export default Contact;
