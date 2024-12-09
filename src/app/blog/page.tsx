import React from 'react';

function Blog() {
    return (
        <div style={{
            padding: '20px', 
            fontFamily: 'Arial', 
            lineHeight: '1.6', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100vh' // Takes full viewport height
        }}>
            <h1 style={{ 
                color: '#333', 
                fontSize: '48px', // Larger font size
                background: 'linear-gradient(45deg, #6a5acd, #ff8c00)', // Gradient effect
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '20px' // Spacing below the header
            }}>
                Welcome to Our Blog
            </h1>
            <p style={{
                maxWidth: '600px', // Sets max width for readability
                textAlign: 'center', // Centers text
                fontSize: '20px' // Slightly larger paragraph text
            }}>
                This is a blog page where we share insights, news, and updates about our services.
            </p>
            {/* More blog content would go here */}
        </div>
    );
}

export default Blog;
