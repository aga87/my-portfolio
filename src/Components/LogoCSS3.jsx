import React from 'react';
import logoCSS3 from '../img/css3.png';

function LogoCSS3(props) {
  const { className } = props;

  return (
    <img
      className={className}
      src={logoCSS3}
      alt=""
      title="Rudloff [CC BY 3.0 (https://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons / Cropped original"
      aria-hidden="true"
    />
  );
}

export default LogoCSS3;
