import React from 'react';
import logoJS from '../img/js.svg.png';

function LogoJS(props) {
  const { className } = props;
  return (
    <img
      className={className}
      src={logoJS}
      alt=""
      title="Chris Williams [Public domain], via Wikimedia Commons"
      aria-hidden="true"
    />
  );
}

export default LogoJS;
