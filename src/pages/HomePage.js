import React from 'react';
import phone from 'image/phone.png';

const HomePage = () => {
  return (
    <>
      <img
        style={{
          backgroundSize: 'cover',
        }}
        src={phone}
        alt="phone"
        width={1200}
      />
    </>
  );
};
export default HomePage;
