import React from "react";

const Typo = (props: any) => {
  const { children, fontFamily, className } = props;
  return (
    <div style={{ fontFamily: fontFamily }} className={`${className}`}>
      {children}
    </div>
  );
};

export default Typo;
