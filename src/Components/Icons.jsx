import React from 'react';
import { FaStar, FaRocket, FaBirthdayCake, FaHeart } from 'react-icons/fa'; // Import icons from react-icons

const RandomIcons = () => {
  const icons = [FaStar, FaRocket, FaBirthdayCake, FaHeart]; // Use imported icons

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80px', // Adjust the height as needed
   // backgroundColor: 'grey', // Add red background color
    overflow: 'hidden', // Hide overflow to prevent unnecessary space
  };

  const iconStyle = {
    fontSize: '25px', // Adjust the size as needed
    margin: '90px', // Add space between icons horizontally
    cursor: 'pointer', // Set cursor to pointer on hover

  };

  return (
    <div style={containerStyle}>
      {icons.map((Icon, index) => (
        <span key={index} style={iconStyle}>
          <Icon />
        </span>
      ))}
    </div>
  );
};

export default RandomIcons;
