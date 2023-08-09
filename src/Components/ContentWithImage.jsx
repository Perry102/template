import React from 'react';

const ContentWithImage = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto',
    maxWidth: '800px',
    padding: '20px',
  };

  const imageStyle = {
    maxWidth: '50%',
    height: 'auto',
  };

  return (
    <div style={containerStyle}>
      <div>
        {/* Left Content */}
        <h4>Get your job done with skilled and experience team.</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, velit?</p>
        <button className="btn btn-primary">Know More</button> {/* Added button */}
      </div>
      <img
        src="https://source.unsplash.com/300x300/?business%20woman"
        alt="..."
        style={imageStyle}
      />
    </div>
  );
};

export default ContentWithImage;
