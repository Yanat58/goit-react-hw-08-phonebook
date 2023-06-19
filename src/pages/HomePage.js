import React from 'react';
import hometImg from 'components/image/homeImg.png';

const HomePage = () => {
  return (
    <div>
      <img
        style={{ display: 'flex', marginLeft: 'auto', marginRight: '40px' }}
        src={hometImg}
        alt="logo"
        width={550}
        // height={750}
      />
    </div>
  );
};
export default HomePage;
