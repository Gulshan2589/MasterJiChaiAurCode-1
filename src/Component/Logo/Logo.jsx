import React from 'react';
import logo from '../../assets/Logo.png';

const Logo = ({left, top}) => {
  const handleClick = () => {
    window.open('http://chaicode.com/', '_blank');
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "143.62px",
        height: "150px",
        left: `${left}`,
        top: top ? top : "780px",
        background: `url(${logo})`,
        backgroundSize: 'cover',
        borderRadius: "18px",
        cursor: "pointer" // Add cursor pointer for better UX
      }}
      onClick={handleClick}
    >
    </div>
  );
};

export default Logo;
