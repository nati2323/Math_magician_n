import React from 'react';
export const Homepage = () => {
  return (
      <div style={{ margin: '5%', width: '90%' }}>
        <h2 style= {{ fontFamily: '"Segoe UI", Arial, sans-serif', color: 'rgb(133, 134, 147)', marginBottom: '5%' }}> Welcome to our page! </h2>
        <p style={{
          fontFamily: 'Montserrat,sans-serif',
          textAlign: 'center',
          fontSize: '20px',
          lineHeight: '1.4',
          color: '#4ab',
          fontWeight: 'bold',
        }
         }>
           Everybody needs a Calculator at some point -- Full Screen, Fast Loading and FREE! <br/>
           <span> Check it out! Math Magicians! </span> 
           <br/>
           Math Magicians always available when you need to perform basic <br/> calculations such as addition, subtraction, multiplication, and division...
        </p>
      </div>
  );
};
