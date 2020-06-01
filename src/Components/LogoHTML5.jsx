import React from 'react';
import logoHTML5 from '../img/html5.png';

function LogoHTML5(props) {
  const { className } = props;
  return (
    <img
      className={className}
      src={logoHTML5}
      alt=""
      title="W3C [CC BY 3.0 (https://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons / Cropped Original"
      aria-hidden="true"
    />
  );
}

export default LogoHTML5;
