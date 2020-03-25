import React from 'react';
import logoJS from '../img/js.svg.png';

function LogoJS(props) {
  const { className } = props;
  return (
    <img
      className={className}
      src={logoJS}
      alt="Unofficial JavaScript logo"
      title="Chris Williams [Public domain], via Wikimedia Commons"
    />
  );
}

export default LogoJS;
