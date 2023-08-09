import React from 'react';

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-around', // Added space around property
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 139, 0.5)', // Blue background with alpha (transparency)
    backgroundImage: 'url("https://source.unsplash.com/1400x450/?macbook")', // Replace with your image URL
    backgroundBlendMode: 'multiply', // Blend mode to mix the background color and image
    color: '#fff',
    padding: '15px',
    height: '10vw'
  };

  const contentStyle = {
    flex: 1,
    marginLeft: '350px',
  };

  const placeholderStyle = {
    marginBottom: '3px',
    marginRight: '350px',
    padding: '3px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '80%',
    maxWidth: '300px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <h3>Subscribe to Our Newsletter</h3>
        <p>Stay updated with our latest news and promotions.</p>
      </div>
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          style={placeholderStyle}
        />
        <button style={buttonStyle}>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
