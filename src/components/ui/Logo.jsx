import React from "react";

const Logo = ({ width = 32, height = 32, className = "" }) => {
  return (
    <div className={`d-flex align-items-center ${className}`}>
      <img
        src="/logo-useteam.png"
        alt="useTeam Logo"
        width={width}
        height={height}
        style={{
          objectFit: "contain",
          borderRadius: "4px",
          // padding: "4px",
          border: "2px solid #000000",
        }}
      />
    </div>
  );
};

export default Logo;
