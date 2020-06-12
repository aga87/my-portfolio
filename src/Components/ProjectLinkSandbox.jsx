import React from 'react';
import sandboxLogo from '../img/codesandbox-50.png';

function ProjectLinkSandbox(props) {
  const { name, href } = props;

  return (
    <a className="o-link" href={href} target="_blank" rel="noopener noreferrer">
      {name}{' '}
      <img
        className="o-link__img"
        src={sandboxLogo}
        alt=""
        title="https://blog.codepen.io/documentation/brand-assets/logos/"
        aria-hidden="true"
      />
    </a>
  );
}

export default ProjectLinkSandbox;
