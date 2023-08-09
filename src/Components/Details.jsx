import React, { useState } from 'react';

const ServiceBox = ({ title, description, logo, index, hoveredIndex, setHoveredIndex }) => {
  const boxStyle = {
    width: '200px',
    height: '200px',
    margin: '0 10px',
    backgroundColor: '#ffffff', // White background color for boxes
    border: '2px solid #333', // Border for boxes
    display: 'flex',
    flexDirection: 'column', // Align contents vertically
    justifyContent: 'center', // Center contents vertically
    alignItems: 'center', // Center contents horizontally
    textAlign: 'center', // Center text horizontally
    cursor: 'pointer',
    transition: 'border-color 0.3s', // Add transition for smooth hover effect
    borderColor: hoveredIndex === null ? '#333' : (hoveredIndex === index ? '#007bff' : '#333'), // Set border color based on hover state
    position: 'relative', // Position for the logo
  };

  const logoStyle = {
    position: 'absolute',
    top: '-20px', // Adjust the position of the logo
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40px',
    height: '40px',
  };

  return (
    <div
      style={boxStyle}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <img src={logo} alt="Logo" style={logoStyle} />
      <b>{title}</b>
      <p>{description}</p>
    </div>
  );
};

const Our_Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Align items vertically
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '70vh', // Adjust the height as needed
    backgroundColor: '#edf1f7', // Light background color
  };

  const textStyle = {
    textAlign: 'center',
    fontSize: '18px', // Adjust the font size as needed
    paddingTop: '50px', // Add some top padding for spacing
  };

  const boxesContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px', // Adjust spacing between text and boxes
  };

  const buttonStyle = {
    marginTop: '20px', // Adjust spacing between boxes and button
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#007bff', // Blue background color for button
    color: '#fff', // White text color
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        {/* Text at the top-center of the container */}
        <h3>Our Services</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam unde quod odit cum beatae saepe.</p>
      </div>
      <div style={boxesContainerStyle}>
        {/* Three horizontally-aligned boxes with hover effect */}
        <ServiceBox
          title="Financial consulting"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          logo="path/to/financial_logo.png"
          index={0}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
        <ServiceBox
          title="Content marketing"
          description="Lorem ipsum dolor sit amet consectetur adipisicing."
          logo="path/to/marketing_logo.png"
          index={1}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
        <ServiceBox
          title="Finance advices"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At, tempore."
          logo="path/to/finance_logo.png"
          index={2}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      </div>
      <button style={buttonStyle}>Learn More</button>
    </div>
  );
};

export default Our_Services;
