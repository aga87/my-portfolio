import React from 'react';
import logoRedux from '../img/redux.png';

function LogoRedux(props) {
  const { className } = props;
  return (
    <img
      className={className}
      src={logoRedux}
      alt=""
      title="AAMINE1965 [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)]"
      aria-hidden="true"
    />
  );
}

export default LogoRedux;
