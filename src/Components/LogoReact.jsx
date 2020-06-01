import React from 'react';
import logoReact from '../img/react.png';

function LogoReact(props) {
  const { className } = props;
  return (
    <img
      className={className}
      src={logoReact}
      alt=""
      title="Facebook [Public domain], via Wikimedia Commons"
      aria-hidden="true"
    />
  );
}

export default LogoReact;
