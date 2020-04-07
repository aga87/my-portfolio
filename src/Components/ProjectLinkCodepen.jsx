import React from 'react';
import codepenLogo from '../img/codepen-50px.png';

function ProjectLinkCodepen(props) {
  const { name, href } = props;

  return (
    <a className="o-link" href={href} target="_blank" rel="noopener noreferrer">
      {name} &#8599;
      <img
        className="o-link__img"
        src={codepenLogo}
        alt=""
        title="https://blog.codepen.io/documentation/brand-assets/logos/"
      />
    </a>
  );
}

export default ProjectLinkCodepen;
